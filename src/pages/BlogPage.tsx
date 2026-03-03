import SEO from '../components/SEO';
import { colors } from '../data/colors';

const BlogPage = () => {
    const blogs = [
        { title: "Why Your Mumbai Business is Invisible on Google Maps", date: "Mar 1, 2024", category: "SEO" },
        { title: "5 Meta Ad Secrets to Triple Your Leads in 30 Days", date: "Feb 24, 2024", category: "Ads" },
        { title: "React vs WordPress: Which is Better for Your Agency?", date: "Feb 15, 2024", category: "Web Dev" }
    ];

    return (
        <>
            <SEO title="Digital Growth Blog" description="Insights, tips, and strategies for growing your business in the digital age." />
            <section style={{ padding: "100px 8%" }}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>Growth <span style={{ color: colors.accent }}>Insights</span></h1>
                <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {blogs.map((blog, i) => (
                        <div key={i} style={{ background: colors.card, borderRadius: "20px", overflow: "hidden", border: `1px solid ${colors.border}`, transition: "transform 0.3s" }}>
                            <div style={{ height: "180px", background: `linear-gradient(45deg, ${colors.bg}, ${colors.accent})`, opacity: 0.3 }} />
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
