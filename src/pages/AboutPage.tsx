import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { whyChooseUs, whoBenefits } from '../data/siteData';

const AboutPage = () => {
    return (
        <>
            <SEO title="About Us" description="We are a team of digital growth experts dedicated to helping Mumbai businesses scale with pride." />

            <section className="about-section" style={{ padding: "100px 8%", textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "40px" }}>Scaling Mumbai with <span style={{ color: colors.accent }}>Pride</span></h1>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: colors.subText, lineHeight: "1.8", marginBottom: "60px" }}>
                    We started Digi Udaan with a simple mission: to give small and medium businesses in Mumbai the same digital firepower as the big corporations. No fluff, no jargon—just pure, data-driven growth.
                </p>

                <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", textAlign: "left" }}>
                    <div>
                        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: "800", marginBottom: "30px" }}>Why Choose Us?</h2>
                        {whyChooseUs.map((item, i) => (
                            <div key={i} style={{ marginBottom: "20px" }}>
                                <div style={{ fontWeight: "800", color: colors.accent, marginBottom: "4px" }}>{item.title}</div>
                                <div style={{ color: colors.subText, fontSize: "15px", lineHeight: "1.6" }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: "800", marginBottom: "30px" }}>Who We Help</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {whoBenefits.map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", background: colors.card, padding: "14px 18px", borderRadius: "12px", border: `1px solid ${colors.border}`, fontSize: "15px" }}>
                                    <span style={{ color: colors.accent }}>★</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
