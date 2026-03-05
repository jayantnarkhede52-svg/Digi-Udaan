import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { marqueeKeywords, testimonials, faqs, servicesData, latestBlogs } from '../data/siteData';
import homeHeroVideo from '../assets/videos/home-hero.mp4';

// --- SUB-COMPONENTS ---

const Marquee = ({ colors }: any) => (
    <div className="marquee-container" style={{ background: colors.accent, padding: "20px 0", borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
        <div className="marquee-content">
            {Array(4).fill(marqueeKeywords).flat().map((word, i) => (
                <span key={i} style={{ fontSize: "24px", fontWeight: "900", margin: "0 40px", color: "white", letterSpacing: "2px" }}>{word}</span>
            ))}
        </div>
    </div>
);

const HomePage = () => {
    const navigate = useNavigate();
    const [spend, setSpend] = useState(25000);

    const calculateROI = () => {
        const revenue = spend * 3.1;
        return Math.floor(revenue).toLocaleString();
    };

    return (
        <>
            <SEO
                title="Digital Marketing That Actually Works"
                description="We help Mumbai businesses get more customers online. Simple strategies, real results. SEO, Google Ads, and websites that work."
            />

            {/* --- HERO SECTION --- */}
            <section className="hero-section" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingLeft: "8%", paddingRight: "8%", overflow: "hidden" }}>
                <video autoPlay loop muted playsInline preload="metadata" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}>
                    <source src={homeHeroVideo} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", zIndex: 1 }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}
                >
                    <h1 className="animated-text" style={{ fontSize: "clamp(32px, 5vw, 72px)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
                        You've built something great. Let's make sure people can actually find it.
                    </h1>
                    <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.9)", lineHeight: "1.7", maxWidth: "650px", marginBottom: "40px", textShadow: "0 2px 10px rgba(0,0,0,0.5)", fontWeight: "500" }}>
                        We're a Mumbai-based team that helps small businesses get more customers through Google, social media, and good-looking websites.
                    </p>
                    <div className="hero-buttons" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <button
                            onClick={() => navigate('/services')}
                            style={{ padding: "18px 40px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)", fontSize: "16px" }}
                        >
                            Start Your Journey
                        </button>
                        <button
                            onClick={() => { (window as any).__contactPrefill = "I'd like to request a Free Site Audit."; navigate('/contact'); }}
                            style={{ padding: "18px 30px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", color: "white", fontWeight: "700", cursor: "pointer", backdropFilter: "blur(10px)", fontSize: "16px" }}
                        >
                            Free Site Audit
                        </button>
                    </div>
                </motion.div>

                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", background: `linear-gradient(to top, ${colors.bg}, transparent)`, zIndex: 2 }} />
            </section>

            <Marquee colors={colors} />

            {/* --- STATS SECTION --- */}
            <section style={{ padding: "60px 8%" }}>
                <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
                    {[
                        { count: "2.5 Lakhs+", label: "Ad Spend Managed", icon: "💰" },
                        { count: "20+", label: "Professional Websites", icon: "💻" },
                        { count: "20+", label: "Instagram Accounts", icon: "📱" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}`, textAlign: "center" }}
                        >
                            <div className="stat-icon" style={{ fontSize: "48px", marginBottom: "16px" }}>{stat.icon}</div>
                            <div className="stat-count" style={{ fontSize: "42px", fontWeight: "800", color: colors.accent, marginBottom: "8px" }}>{stat.count}</div>
                            <div style={{ fontSize: "18px", color: colors.subText, fontWeight: "600" }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- WHAT WE DO (Short Version) --- */}
            <section style={{ padding: "60px 8%" }}>
                <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>How We Help You Grow</h2>
                <div className="growth-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                    <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                        <h3 style={{ color: colors.accent, marginBottom: "10px" }}>01. Get Found</h3>
                        <p style={{ color: colors.subText }}>People can't buy from you if they can't find you. We make sure your business shows up on Google and Google Maps.</p>
                    </div>
                    <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                        <h3 style={{ color: colors.accent, marginBottom: "10px" }}>02. Get Customers</h3>
                        <p style={{ color: colors.subText }}>We run ads and create content that brings in people who are actually looking to buy what you sell.</p>
                    </div>
                    <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                        <h3 style={{ color: colors.accent, marginBottom: "10px" }}>03. Keep Growing</h3>
                        <p style={{ color: colors.subText }}>We track what's working and do more of it. Every month, we find ways to get you better results for the same budget.</p>
                    </div>
                </div>
            </section>

            {/* --- CORE SERVICES SHOWCASE --- */}
            <section style={{ padding: "80px 8%", background: colors.card, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "20px" }}>
                        <div>
                            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", marginBottom: "16px" }}>What We Do Best</h2>
                            <p style={{ color: colors.subText, fontSize: "18px", maxWidth: "600px" }}>Here's what we do best. Click any service to learn more about how we can help your business.</p>
                        </div>
                        <button
                            onClick={() => navigate('/services')}
                            style={{ padding: "14px 28px", borderRadius: "100px", border: `1px solid ${colors.accent}`, background: "transparent", color: colors.accent, fontWeight: "700", cursor: "pointer", transition: "all 0.3s" }}
                            onMouseOver={(e) => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.color = "white"; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.accent; }}
                        >
                            View All Services →
                        </button>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
                        {servicesData.filter(s => ["Google SEO", "React Dev", "Google Ads"].includes(s.title)).map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                onClick={() => navigate(`/services/${service.page}`)}
                                style={{ background: colors.bg, borderRadius: "24px", overflow: "hidden", border: `1px solid ${colors.border}`, cursor: "pointer", display: "flex", flexDirection: "column" }}
                            >
                                <div style={{ height: "200px", position: "relative" }}>
                                    <img src={service.img} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: `linear-gradient(to bottom, transparent, ${colors.bg})` }} />
                                    <div style={{ position: "absolute", bottom: "20px", left: "24px", background: colors.card, padding: "12px", borderRadius: "16px", backdropFilter: "blur(10px)", border: `1px solid ${colors.border}` }}>
                                        {service.icon}
                                    </div>
                                </div>
                                <div style={{ padding: "30px 24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "12px" }}>{service.title}</h3>
                                    <p style={{ color: colors.subText, fontSize: "16px", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>{service.gist}</p>
                                    <div style={{ display: "flex", alignItems: "center", color: colors.accent, fontWeight: "700", fontSize: "15px" }}>
                                        Learn More <span style={{ marginLeft: "8px" }}>→</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- ROI CALCULATOR SECTION --- */}
            <section style={{ padding: "80px 8%", background: "linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", marginBottom: "20px" }}>See What Your Ads Could Earn</h2>
                    <p style={{ color: colors.subText, fontSize: "clamp(16px, 2.5vw, 20px)", marginBottom: "40px" }}>Drag the slider to see how much revenue your monthly ad budget could bring in.</p>

                    <div className="roi-grid" style={{ background: colors.card, padding: "50px", borderRadius: "32px", border: `1px solid ${colors.border}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                        <div style={{ textAlign: "left" }}>
                            <label style={{ display: "block", fontSize: "18px", fontWeight: "600", marginBottom: "20px" }}>Monthly Ad Budget: ₹{spend.toLocaleString()}</label>
                            <input
                                type="range"
                                min="5000"
                                max="100000"
                                step="5000"
                                value={spend}
                                onChange={(e) => setSpend(parseInt(e.target.value))}
                                style={{ width: "100%", height: "8px", borderRadius: "100px", background: colors.border, appearance: "none", cursor: "pointer", outline: "none" }}
                            />
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px", color: colors.subText, fontSize: "14px" }}>
                                <span>₹5,000</span>
                                <span>₹1,00,000</span>
                            </div>
                        </div>

                        <div className="roi-result" style={{ padding: "40px", borderRadius: "24px", background: "rgba(139, 92, 246, 0.1)", border: `2px dashed ${colors.accent}` }}>
                            <div style={{ fontSize: "16px", textTransform: "uppercase", letterSpacing: "2px", color: colors.accent, marginBottom: "10px", fontWeight: "700" }}>Estimated Revenue</div>
                            <div className="roi-amount" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", color: "white" }}>₹{calculateROI()}*</div>
                            <p style={{ fontSize: "12px", color: colors.subText, marginTop: "15px" }}>*This is a rough estimate based on what most businesses see (around 3.1x return). Your results may vary.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS --- */}
            <section style={{ padding: "80px 8%" }}>
                <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>What Our Clients Say</h2>
                <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}`, position: "relative" }}>
                            <div style={{ fontSize: "60px", position: "absolute", top: "20px", left: "20px", opacity: 0.1 }}>"</div>
                            <p style={{ fontSize: "16px", fontStyle: "italic", marginBottom: "30px", position: "relative", zIndex: 1, lineHeight: "1.6" }}>{t.quote}</p>
                            <div>
                                <div style={{ fontWeight: "800", color: colors.accent }}>{t.name}</div>
                                <div style={{ fontSize: "14px", color: colors.subText }}>{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- LATEST INSIGHTS (BLOG PREVIEW) --- */}
            <section style={{ padding: "80px 8%", background: colors.card, borderTop: `1px solid ${colors.border}` }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "20px" }}>
                        <div>
                            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", marginBottom: "16px" }}>Latest Insights</h2>
                            <p style={{ color: colors.subText, fontSize: "18px", maxWidth: "600px" }}>Actionable strategies and tips from the trenches of digital marketing.</p>
                        </div>
                        <button
                            onClick={() => navigate('/blog')}
                            style={{ padding: "14px 28px", borderRadius: "100px", border: `1px solid ${colors.accent}`, background: "transparent", color: colors.accent, fontWeight: "700", cursor: "pointer", transition: "all 0.3s" }}
                            onMouseOver={(e) => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.color = "white"; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.accent; }}
                        >
                            Read Full Blog →
                        </button>
                    </div>

                    <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                        {latestBlogs.map((blog, i) => (
                            <div key={i} onClick={() => navigate(`/blog/${blog.slug}`)} style={{ background: colors.bg, borderRadius: "20px", overflow: "hidden", border: `1px solid ${colors.border}`, transition: "transform 0.3s", cursor: "pointer" }}>
                                <div style={{ height: "180px", background: `linear-gradient(45deg, ${colors.bg}, ${colors.accent})`, opacity: 0.3 }} />
                                <div style={{ padding: "24px" }}>
                                    <div style={{ color: colors.accent, fontWeight: "700", marginBottom: "10px", fontSize: "12px", textTransform: "uppercase" }}>{blog.category}</div>
                                    <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "800", marginBottom: "16px", lineHeight: "1.4" }}>{blog.title}</h3>
                                    <div style={{ color: colors.subText, fontSize: "14px" }}>{blog.date} • 5 min read</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section style={{ padding: "80px 8%", maxWidth: "900px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {faqs.map((faq, i) => (
                        <details key={i} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: "16px", padding: "20px", cursor: "pointer" }}>
                            <summary style={{ fontWeight: "700", fontSize: "clamp(15px, 2vw, 18px)", outline: "none" }}>{faq.q}</summary>
                            <p style={{ marginTop: "16px", color: colors.subText, lineHeight: "1.6", fontSize: "15px" }}>{faq.a}</p>
                        </details>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
