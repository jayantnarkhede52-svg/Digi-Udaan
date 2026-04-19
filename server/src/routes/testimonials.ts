import { Router, Request, Response } from 'express';
import { db } from '../firebase';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

interface TestimonialData {
    published: boolean;
    createdAt?: string;
}

// GET /api/testimonials — Public: list published testimonials
// Note: We fetch all and filter in-memory to avoid needing a Firestore composite index
router.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('testimonials').get();
        const testimonials = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() } as unknown as TestimonialData))
            .filter((t: TestimonialData) => t.published === true)
            .sort((a: TestimonialData, b: TestimonialData) => (b.createdAt || '').localeCompare(a.createdAt || ''));
        res.json(testimonials);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Fetch testimonials error:', message);
        res.status(500).json({ error: 'Failed to fetch testimonials', details: message });
    }
});

// GET /api/testimonials/admin/all — Admin: list all testimonials
router.get('/admin/all', authMiddleware, async (_req: AuthRequest, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('testimonials').get();
        const testimonials = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() } as unknown as TestimonialData))
            .sort((a: TestimonialData, b: TestimonialData) => (b.createdAt || '').localeCompare(a.createdAt || ''));
        res.json(testimonials);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Admin fetch testimonials error:', message);
        res.status(500).json({ error: 'Failed to fetch testimonials', details: message });
    }
});

// POST /api/testimonials — Admin: create testimonial
router.post('/', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { name, role, quote, published } = req.body;

        if (!name || !quote) {
            res.status(400).json({ error: 'Name and quote are required' });
            return;
        }

        const testimonial = {
            name,
            role: role || 'Client',
            quote,
            published: published !== false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const docRef = await db.collection('testimonials').add(testimonial);
        res.status(201).json({ id: docRef.id, ...testimonial });
    } catch (error) {
        console.error('Create testimonial error:', error);
        res.status(500).json({ error: 'Failed to create testimonial' });
    }
});

// PUT /api/testimonials/:id — Admin: update testimonial
router.put('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const updates = { ...req.body, updatedAt: new Date().toISOString() };
        delete updates.id;

        await db.collection('testimonials').doc(id).update(updates);
        res.json({ message: 'Testimonial updated', id });
    } catch (error) {
        console.error('Update testimonial error:', error);
        res.status(500).json({ error: 'Failed to update testimonial' });
    }
});

// DELETE /api/testimonials/:id — Admin: delete testimonial
router.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        await db.collection('testimonials').doc(id).delete();
        res.json({ message: 'Testimonial deleted' });
    } catch (error) {
        console.error('Delete testimonial error:', error);
        res.status(500).json({ error: 'Failed to delete testimonial' });
    }
});

export default router;
