import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { marqueeKeywords, testimonials, faqs } from '../data/siteData';
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
        const leads = Math.floor(spend / 150);
        const revenue = leads * 0.2 * 12000;
        return revenue.toLocaleString();
    };

    return (
        <>
            <SEO
                title="Results-Driven Digital Marketing"
                description="We turn clicks into growth for Mumbai businesses. Specialized in SEO, Google Ads, and Premium Web Design."
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
                        Your business is ready for the big stage. We just provide the spotlight.
                    </h1>
                    <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.9)", lineHeight: "1.7", maxWidth: "650px", marginBottom: "40px", textShadow: "0 2px 10px rgba(0,0,0,0.5)", fontWeight: "500" }}>
                        In the heart of Mumbai, we build digital strategies that turn clicks into growth you can see in your bank account.
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
                <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>Our Growth Engine</h2>
                <div className="growth-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                    <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                        <h3 style={{ color: colors.accent, marginBottom: "10px" }}>01. Attract</h3>
                        <p style={{ color: colors.subText }}>We fix the 'invisible business' problem by dominating local maps and search rankings.</p>
                    </div>
                    <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                        <h3 style={{ color: colors.accent, marginBottom: "10px" }}>02. Convert</h3>
                        <p style={{ color: colors.subText }}>We design high-ROI campaigns that target intent, turning queries into customers.</p>
                    </div>
                    <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                        <h3 style={{ color: colors.accent, marginBottom: "10px" }}>03. Scale</h3>
                        <p style={{ color: colors.subText }}>We use data to find what works and double down on your most profitable channels.</p>
                    </div>
                </div>
            </section>

            {/* --- ROI CALCULATOR SECTION --- */}
            <section style={{ padding: "80px 8%", background: "linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", marginBottom: "20px" }}>The ROI Hustle</h2>
                    <p style={{ color: colors.subText, fontSize: "clamp(16px, 2.5vw, 20px)", marginBottom: "40px" }}>Stop guessing. See what your investment could actually become.</p>

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
                            <p style={{ fontSize: "12px", color: colors.subText, marginTop: "15px" }}>*Based on average 20% conversion rate and ₹12k service value.</p>
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
