import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from '../firebase';

const router = Router();

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required' });
            return;
        }

        // Check against environment variables first (default admin)
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (email === adminEmail && password === adminPassword) {
            const token = jwt.sign(
                { email },
                process.env.JWT_SECRET || 'fallback_secret',
                { expiresIn: '7d' }
            );
            res.json({ token, email });
            return;
        }

        // Check Firestore admins collection
        const adminDoc = await db.collection('admins').where('email', '==', email).get();
        if (adminDoc.empty) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        const adminData = adminDoc.docs[0].data();
        const isValidPassword = await bcrypt.compare(password, adminData.password);

        if (!isValidPassword) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: '7d' }
        );

        res.json({ token, email });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET /api/auth/verify — verify token is still valid
router.get('/verify', (req: Request, res: Response): void => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ valid: false });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        res.json({ valid: true, admin: decoded });
    } catch {
        res.status(401).json({ valid: false });
    }
});

export default router;
