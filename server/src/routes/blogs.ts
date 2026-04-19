import { Router, Request, Response } from 'express';
import { db } from '../firebase';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /api/blogs — Public: list all published blogs
// Note: We fetch all and filter in-memory to avoid needing a Firestore composite index
router.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('blogs').get();

interface BlogData {
    published: boolean;
    createdAt?: string;
}

        const blogs = snapshot.docs
            .map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    slug: data.slug,
                    title: data.title,
                    category: data.category,
                    date: data.date,
                    author: data.author,
                    readTime: data.readTime,
                    img: data.img || '',
                    excerpt: data.excerpt || '',
                    published: data.published,
                    createdAt: data.createdAt || '',
                };
            })
            .filter((b: BlogData) => b.published === true)
            .sort((a: BlogData, b: BlogData) => (b.createdAt || '').localeCompare(a.createdAt || ''));

        res.json(blogs);
    } catch (error) {
        console.error('Fetch blogs error:', error);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// GET /api/blogs/:slug — Public: get single blog post
router.get('/:slug', async (req: Request, res: Response): Promise<void> => {
    try {
        const { slug } = req.params;
        const snapshot = await db.collection('blogs')
            .where('slug', '==', slug)
            .where('published', '==', true)
            .limit(1)
            .get();

        if (snapshot.empty) {
            res.status(404).json({ error: 'Blog post not found' });
            return;
        }

        const doc = snapshot.docs[0];
        res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        console.error('Fetch blog error:', error);
        res.status(500).json({ error: 'Failed to fetch blog' });
    }
});

// GET /api/blogs/admin/all — Admin: list ALL blogs (including drafts)
router.get('/admin/all', authMiddleware, async (_req: AuthRequest, res: Response): Promise<void> => {
    try {
        const snapshot = await db.collection('blogs').orderBy('createdAt', 'desc').get();
        const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(blogs);
    } catch (error) {
        console.error('Admin fetch blogs error:', error);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// POST /api/blogs — Admin: create blog post
router.post('/', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { title, slug, category, content, author, readTime, img, excerpt, published } = req.body;

        if (!title || !slug || !content) {
            res.status(400).json({ error: 'Title, slug, and content are required' });
            return;
        }

        const blog = {
            title,
            slug,
            category: category || 'General',
            content,
            author: author || 'Digital Udaan Team',
            readTime: readTime || '5 min read',
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            img: img || '',
            excerpt: excerpt || '',
            published: published !== false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const docRef = await db.collection('blogs').add(blog);
        res.status(201).json({ id: docRef.id, ...blog });
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ error: 'Failed to create blog' });
    }
});

// PUT /api/blogs/:id — Admin: update blog post
router.put('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updates = { ...req.body, updatedAt: new Date().toISOString() };
        delete updates.id; // Don't store id inside the document

        await db.collection('blogs').doc(id).update(updates);
        res.json({ message: 'Blog updated', id });
    } catch (error) {
        console.error('Update blog error:', error);
        res.status(500).json({ error: 'Failed to update blog' });
    }
});

// DELETE /api/blogs/:id — Admin: delete blog post
router.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await db.collection('blogs').doc(id).delete();
        res.json({ message: 'Blog deleted' });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({ error: 'Failed to delete blog' });
    }
});

export default router;
