import { Router, Request, Response } from 'express';
import { db } from '../firebase';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /api/seo — Public: fetch SEO metadata for all pages
router.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('seo').get();
        // Return as key-value map keyed by route (e.g., '/')
        const seoData: Record<string, unknown> = {};
        snapshot.docs.forEach(doc => {
            seoData[doc.id] = doc.data();
        });
        res.json(seoData);
    } catch (error) {
        console.error('Fetch SEO error:', error);
        res.status(500).json({ error: 'Failed to fetch SEO settings' });
    }
});

// PUT /api/seo/:route — Admin: update SEO for a specific route
// Note: route needs to be base64 encoded because it contains slashes
router.put('/:routeBase64', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const route = Buffer.from(req.params.routeBase64, 'base64').toString('ascii');
        // Firestore document IDs can't contain forward slashes easily.
        // Let's replace slashes with underscores for the doc ID.
        const docId = route === '/' ? '_home' : route.replace(/\//g, '_');

        const { title, description, keywords } = req.body;

        const seoEntry = {
            route,
            title: title || '',
            description: description || '',
            keywords: keywords || '',
            updatedAt: new Date().toISOString()
        };

        await db.collection('seo').doc(docId).set(seoEntry, { merge: true });
        res.json({ message: 'SEO updated successfully', ...seoEntry });
    } catch (error) {
        console.error('Update SEO error:', error);
        res.status(500).json({ error: 'Failed to update SEO settings' });
    }
});

export default router;
