import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { detailedServicesData } from '../data/siteData';
import servicesHeroVideo from '../assets/videos/services-hero.mp4';

const ServicesPage = () => {
    return (
        <>
            <SEO
                title="Our Services"
                description="Comprehensive digital marketing services: SEO, Google Ads, Meta Ads, Social Media Management, and Web Development."
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "8%", paddingRight: "8%", overflow: "hidden", marginBottom: "60px" }}>
                <video autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}>
                    <source src={servicesHeroVideo} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 1 }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ position: "relative", zIndex: 2, textAlign: "center", margin: "0 auto", padding: "0 5%" }}
                >
                    <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "24px", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
                        Our Growth <span style={{ color: colors.accent }}>Engine</span>
                    </h1>
                    <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,0.9)", maxWidth: "700px", margin: "0 auto", fontWeight: "500" }}>
                        We don't just provide services; we build high-performance marketing machines tailored for your business.
                    </p>
                </motion.div>

                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", background: `linear-gradient(to top, ${colors.bg}, transparent)`, zIndex: 2 }} />
            </section>

            <section style={{ padding: "0 8% 80px" }}>
                <div className="services-list" style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
                    {Object.entries(detailedServicesData).map(([id, s]: any, i) => (
                        <div key={id} className="service-detail-grid" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
                            {i % 2 !== 0 && (
                                <div className="service-image" style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${colors.border}`, height: "400px" }}>
                                    <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                                </div>
                            )}

                            <div>
                                <div style={{ color: s.color, fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px", fontSize: "14px" }}>{id.replace('service_', '')}</div>
                                <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: "800", marginBottom: "24px", lineHeight: "1.2" }}>{s.title}</h2>
                                <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: colors.subText, lineHeight: "1.8", marginBottom: "32px" }}>{s.desc}</p>

                                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                                    {s.tags.map((tag: string) => (
                                        <span key={tag} style={{ padding: "8px 16px", borderRadius: "100px", background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, fontSize: "12px", color: colors.subText }}>{tag}</span>
                                    ))}
                                </div>

                                <div className="service-benefits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                    {s.benefits.map((b: string) => (
                                        <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px", color: "white", fontWeight: "600", fontSize: "14px" }}>
                                            <span style={{ color: s.color }}>✓</span> {b}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {i % 2 === 0 && (
                                <div className="service-image" style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${colors.border}`, height: "400px" }}>
                                    <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
