import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { whyChooseUs, whoBenefits } from '../data/siteData';

const AboutPage = () => {
    return (
        <>
            <SEO title="About Us" description="We're a small team in Mumbai that helps local businesses grow online. Simple, honest, and always focused on results." />

            <section className="about-section" style={{ padding: "100px 8%", textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "40px" }}>Helping Mumbai Businesses <span style={{ color: colors.accent }}>Grow Online</span></h1>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: colors.subText, lineHeight: "1.8", marginBottom: "60px" }}>
                    We're a small team that genuinely loves helping local businesses get more customers through the internet. No confusing words, no over-the-top promises. Just honest work that gets you real results.
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
