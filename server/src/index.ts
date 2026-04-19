import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';
import contactRoutes from './routes/contacts';
import blogRoutes from './routes/blogs';
import leadRoutes from './routes/leads';
import analyticsRoutes from './routes/analytics';
import testimonialRoutes from './routes/testimonials';
import seoRoutes from './routes/seo';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',      // Vite dev
        'http://localhost:4173',      // Vite preview
        'https://digiudaan.com',      // Production
        'https://www.digiudaan.com',  // Production www
    ],
    credentials: true,
}));
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/seo', seoRoutes);

// Database Health Check
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/debug-firebase', (_req, res) => {
    res.json({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
        privateKeyLength: process.env.FIREBASE_PRIVATE_KEY?.length || 0
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Digital Udaan Backend running on port ${PORT}`);
});

export default app;
