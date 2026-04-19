import { Router, Request, Response } from 'express';
import { db } from '../firebase';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// POST /api/leads — Public: create a lead
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, phone, source, message } = req.body;

        if (!source) {
            res.status(400).json({ error: 'Source is required' });
            return;
        }

        const lead = {
            name: name || 'Anonymous',
            email: email || '',
            phone: phone || '',
            source,  // 'contact_form', 'chatbot', 'free_audit', 'whatsapp'
            status: 'new',  // new → contacted → converted → lost
            message: message || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const docRef = await db.collection('leads').add(lead);
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error('Create lead error:', error);
        res.status(500).json({ error: 'Failed to create lead' });
    }
});

// GET /api/leads — Admin: list all leads
router.get('/', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { status, source } = req.query;
        let query: FirebaseFirestore.Query = db.collection('leads').orderBy('createdAt', 'desc');

        if (status && typeof status === 'string') {
            query = query.where('status', '==', status);
        }
        if (source && typeof source === 'string') {
            query = query.where('source', '==', source);
        }

        const snapshot = await query.get();
        const leads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(leads);
    } catch (error) {
        console.error('Fetch leads error:', error);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

// PATCH /api/leads/:id — Admin: update lead status
router.patch('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { status, notes } = req.body;
        const updates: Record<string, string | Date | undefined> = { updatedAt: new Date().toISOString() };
        if (status) updates.status = status;
        if (notes !== undefined) updates.notes = notes;

        await db.collection('leads').doc(id).update(updates);
        res.json({ message: 'Lead updated' });
    } catch (error) {
        console.error('Update lead error:', error);
        res.status(500).json({ error: 'Failed to update lead' });
    }
});

// GET /api/leads/stats/summary — Admin: lead stats
router.get('/stats/summary', authMiddleware, async (_req: AuthRequest, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('leads').get();
        const leads = snapshot.docs.map(doc => doc.data());

        const stats = {
            total: leads.length,
            new: leads.filter(l => l.status === 'new').length,
            contacted: leads.filter(l => l.status === 'contacted').length,
            converted: leads.filter(l => l.status === 'converted').length,
            lost: leads.filter(l => l.status === 'lost').length,
            bySource: {
                contact_form: leads.filter(l => l.source === 'contact_form').length,
                chatbot: leads.filter(l => l.source === 'chatbot').length,
                free_audit: leads.filter(l => l.source === 'free_audit').length,
                whatsapp: leads.filter(l => l.source === 'whatsapp').length,
            }
        };

        res.json(stats);
    } catch (error) {
        console.error('Lead stats error:', error);
        res.status(500).json({ error: 'Failed to fetch lead stats' });
    }
});

export default router;
