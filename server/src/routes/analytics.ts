import { Router, Request, Response } from 'express';
import { db } from '../firebase';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// POST /api/analytics/pageview — Public: track a page view
router.post('/pageview', async (req: Request, res: Response): Promise<void> => {
    try {
        const { path, referrer, userAgent } = req.body;

        if (!path) {
            res.status(400).json({ error: 'Path is required' });
            return;
        }

        await db.collection('pageviews').add({
            path,
            referrer: referrer || '',
            userAgent: userAgent || '',
            timestamp: new Date().toISOString(),
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD for grouping
        });

        res.status(201).json({ message: 'Recorded' });
    } catch (error) {
        console.error('Pageview tracking error:', error);
        res.status(500).json({ error: 'Failed to track pageview' });
    }
});

// GET /api/analytics/summary — Admin: get analytics summary
router.get('/summary', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const days = parseInt(req.query.days as string) || 30;
        const since = new Date();
        since.setDate(since.getDate() - days);
        const sinceStr = since.toISOString();

        const snapshot = await db.collection('pageviews')
            .where('timestamp', '>=', sinceStr)
            .orderBy('timestamp', 'desc')
            .get();

        const views = snapshot.docs.map(doc => doc.data());

        // Group by page
        const byPage: Record<string, number> = {};
        views.forEach(v => {
            byPage[v.path] = (byPage[v.path] || 0) + 1;
        });

        // Group by date
        const byDate: Record<string, number> = {};
        views.forEach(v => {
            const date = v.date || v.timestamp.split('T')[0];
            byDate[date] = (byDate[date] || 0) + 1;
        });

        // Sort pages by views descending
        const topPages = Object.entries(byPage)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10)
            .map(([path, count]) => ({ path, count }));

        res.json({
            totalViews: views.length,
            period: `${days} days`,
            topPages,
            viewsByDate: byDate,
        });
    } catch (error) {
        console.error('Analytics summary error:', error);
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
});

export default router;
