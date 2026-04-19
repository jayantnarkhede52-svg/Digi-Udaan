import { Router, Request, Response } from 'express';
import { db } from '../firebase';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// POST /api/contacts — Public: submit contact form
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, phone, service, message } = req.body;

        if (!name || !email || !message) {
            res.status(400).json({ error: 'Name, email, and message are required' });
            return;
        }

        const contact = {
            name,
            email,
            phone: phone || '',
            service: service || '',
            message,
            status: 'new',
            createdAt: new Date().toISOString(),
            readAt: null,
        };

        const docRef = await db.collection('contacts').add(contact);

        // Also create a lead entry
        await db.collection('leads').add({
            name,
            email,
            phone: phone || '',
            source: 'contact_form',
            status: 'new',
            message,
            createdAt: new Date().toISOString(),
        });

        res.status(201).json({ id: docRef.id, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// GET /api/contacts — Admin: list all contact submissions
router.get('/', authMiddleware, async (_req: AuthRequest, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('contacts').orderBy('createdAt', 'desc').get();
        const contacts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(contacts);
    } catch (error) {
        console.error('Fetch contacts error:', error);
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
});

// PATCH /api/contacts/:id — Admin: update contact status
router.patch('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await db.collection('contacts').doc(id).update({ status, readAt: new Date().toISOString() });
        res.json({ message: 'Contact updated' });
    } catch (error) {
        console.error('Update contact error:', error);
        res.status(500).json({ error: 'Failed to update contact' });
    }
});

export default router;
