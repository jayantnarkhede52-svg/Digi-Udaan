import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { latestBlogs as staticBlogs } from '../data/siteData';
import { api } from '../config/api';
import type { Blog } from '../types';

const BlogPage = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getBlogs().then(data => {
            if (data && data.length > 0) {
                setBlogs(data);
            } else {
                setBlogs(staticBlogs);
            }
            setLoading(false);
        }).catch(() => {
            setBlogs(staticBlogs);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <SEO title="Digital Growth Blog" description="Insights, tips, and strategies for growing your business in the digital age." />
            <section style={{ padding: "100px 8%" }}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>Growth <span style={{ color: colors.accent }}>Insights</span></h1>
                <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {loading ? (
                        <div style={{ padding: "40px", textAlign: "center", color: colors.subText, gridColumn: "1 / -1" }}>Loading insights...</div>
                    ) : blogs.map((blog, i) => (
                        <div key={i} onClick={() => navigate(`/blog/${blog.slug}`)} style={{ background: colors.card, borderRadius: "20px", overflow: "hidden", border: `1px solid ${colors.border}`, transition: "transform 0.3s", cursor: "pointer" }}>
                            {blog.img ? (
                                <img src={blog.img} alt={blog.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                            ) : (
                                <div style={{ height: "180px", background: `linear-gradient(45deg, ${colors.bg}, ${colors.accent})`, opacity: 0.3 }} />
                            )}
                            <div style={{ padding: "24px" }}>
                                <div style={{ color: colors.accent, fontWeight: "700", marginBottom: "10px", fontSize: "12px", textTransform: "uppercase" }}>{blog.category}</div>
                                <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "800", marginBottom: "16px", lineHeight: "1.4" }}>{blog.title}</h3>
                                <div style={{ color: colors.subText, fontSize: "14px" }}>{blog.date} • 5 min read</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default BlogPage;
