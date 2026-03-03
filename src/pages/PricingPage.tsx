import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { pricingData } from '../data/pricingData';
import pricingHeroVideo from '../assets/videos/pricing-hero.mp4';

const PricingPage = () => {
    const [activeTab, setActiveTab] = useState('pricing_seo');

    return (
        <>
            <SEO
                title="Pricing & Packages"
                description="Transparent pricing for results-driven marketing. Choose the service that fits your growth goals."
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "8%", paddingRight: "8%", overflow: "hidden", marginBottom: "60px" }}>
                <video autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}>
                    <source src={pricingHeroVideo} type="video/mp4" />
                </video>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 1 }} />

                <div style={{ position: "relative", zIndex: 2, textAlign: "center", margin: "0 auto", padding: "0 5%" }}>
                    <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "20px", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
                        Packages & <span style={{ color: colors.accent }}>Pricing</span>
                    </h1>
                    <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "0 auto", fontWeight: "500" }}>
                        Transparent pricing for results-driven marketing. Choose the service that fits your growth goals.
                    </p>
                </div>

                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", background: `linear-gradient(to top, ${colors.bg}, transparent)`, zIndex: 2 }} />
            </section>

            <section style={{ padding: "0 8% 80px" }}>
                {/* Navigation Tabs */}
                <div className="pricing-tabs" style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "60px" }}>
                    {Object.entries(pricingData).map(([key, data]: any) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            style={{
                                padding: "14px 24px", borderRadius: "100px", border: activeTab === key ? `1px solid ${colors.accent}` : `1px solid ${colors.border}`,
                                background: activeTab === key ? colors.accent : colors.card, color: "white", fontWeight: "700", cursor: "pointer", transition: "all 0.3s", fontSize: "14px"
                            }}
                        >
                            {data.title}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 40px" }}>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                                <img src={pricingData[activeTab].icon} alt={pricingData[activeTab].title} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                            </div>
                            <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800", marginBottom: "16px" }}>{pricingData[activeTab].title}</h2>
                            <p style={{ fontSize: "clamp(15px, 2vw, 20px)", color: colors.subText }}>{pricingData[activeTab].desc}</p>
                        </div>

                        <div className="pricing-cards-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${pricingData[activeTab].pkgs.length === 1 ? '1' : activeTab === 'pricing_web' ? '2' : '3'}, 1fr)`, gap: "24px", maxWidth: pricingData[activeTab].pkgs.length === 1 ? "600px" : activeTab === 'pricing_web' ? "1000px" : "1200px", margin: "0 auto" }}>
                            {pricingData[activeTab].pkgs.map((pkg: any, idx: number) => (
                                <div key={idx} style={{ background: colors.card, padding: "32px", borderRadius: "24px", border: idx === 1 && pricingData[activeTab].pkgs.length > 1 ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`, position: "relative", transform: idx === 1 && pricingData[activeTab].pkgs.length > 1 ? "scale(1.03)" : "scale(1)", zIndex: idx === 1 ? 2 : 1 }}>
                                    {idx === 1 && pricingData[activeTab].pkgs.length > 1 && <div style={{ position: "absolute", top: "-16px", left: "50%", transform: "translateX(-50%)", background: colors.accent, color: "white", padding: "6px 16px", borderRadius: "100px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>}
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "10px" }}>{pkg.name}</h3>
                                    <div className="price" style={{ fontSize: "32px", fontWeight: "800", color: colors.accent, marginBottom: "24px" }}>{pkg.price}</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "30px" }}>
                                        {pkg.details.map((detail: string, i: number) => (
                                            <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: colors.subText, lineHeight: "1.4" }}>
                                                <span style={{ color: colors.accent, flexShrink: 0 }}>✓</span> {detail}
                                            </div>
                                        ))}
                                    </div>
                                    <button style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "none", background: "white", color: colors.bg, fontWeight: "800", cursor: "pointer", fontSize: "15px" }}>Get Started Now</button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>
        </>
    );
};

export default PricingPage;
