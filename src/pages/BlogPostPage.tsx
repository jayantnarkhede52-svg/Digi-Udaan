import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { blogData } from '../data/blogData';
import { api } from '../config/api';
import type { Blog } from '../types';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        
        api.getBlog(slug).then(data => {
            if (data && !(data as any).error) {
                setPost(data);
            } else {
                // Fallback to static data
                const staticPost = blogData.find(b => b.slug === slug);
                setPost(staticPost || null);
            }
            setLoading(false);
        }).catch(() => {
            const staticPost = blogData.find(b => b.slug === slug);
            setPost(staticPost || null);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return <div style={{ padding: "120px 8%", textAlign: "center", minHeight: "60vh", color: colors.subText }}>Loading article...</div>;
    }

    if (!post) {
        return (
            <div style={{ padding: "120px 8%", textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontSize: "48px", fontWeight: "800", color: colors.accent, marginBottom: "20px" }}>404</h1>
                <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>Article Not Found</h2>
                <button
                    onClick={() => navigate('/blog')}
                    style={{ padding: "14px 28px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}
                >
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <>
            <SEO title={`${post.title} - Digital Udaan`} description={`Read about ${post.title} from the Digital Udaan digital marketing experts.`} />

            <article style={{ padding: "120px 8% 80px", maxWidth: "800px", margin: "0 auto" }}>
                <button
                    onClick={() => navigate('/blog')}
                    style={{ background: "transparent", border: "none", color: colors.subText, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", marginBottom: "40px", padding: 0 }}
                >
                    ← Back to All Articles
                </button>

                <header style={{ marginBottom: "50px" }}>
                    <div style={{ color: colors.accent, fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>{post.category}</div>
                    <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", lineHeight: "1.2", marginBottom: "24px" }}>
                        {post.title}
                    </h1>

                    <div style={{ display: "flex", alignItems: "center", gap: "16px", color: colors.subText, borderBottom: `1px solid ${colors.border}`, paddingBottom: "24px" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: colors.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>
                            {(post.author || 'D').charAt(0)}
                        </div>
                        <div>
                            <div style={{ fontWeight: "600", color: "white" }}>{post.author || 'Digital Udaan'}</div>
                            <div style={{ fontSize: "14px", marginTop: "4px" }}>{post.date} • {post.readTime || '5 min read'}</div>
                        </div>
                    </div>
                </header>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="blog-content"
                    style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.9)" }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer style={{ marginTop: "60px", paddingTop: "40px", borderTop: `1px solid ${colors.border}`, textAlign: "center" }}>
                    <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "20px" }}>Want to grow your business?</h3>
                    <p style={{ color: colors.subText, marginBottom: "30px" }}>Let our experts build a tailored strategy that turns clicks into revenue.</p>
                    <button
                        onClick={() => navigate('/contact')}
                        style={{ padding: "16px 32px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}
                    >
                        Talk to an Expert
                    </button>
                </footer>
            </article>

            {/* Basic styles for the injected HTML content */}
            <style>{`
                .blog-content h3 {
                    font-size: 28px;
                    font-weight: 800;
                    margin: 40px 0 20px;
                    color: white;
                }
                .blog-content p {
                    margin-bottom: 24px;
                }
                .blog-content strong {
                    color: ${colors.accent};
                }
            `}</style>
        </>
    );
};

export default BlogPostPage;
