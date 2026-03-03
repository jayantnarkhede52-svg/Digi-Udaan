import SEO from '../components/SEO';
import { colors } from '../data/colors';

const ContactPage = () => {
    const prefill = (window as any).__contactPrefill || "";

    return (
        <>
            <SEO title="Contact Us" description="Ready to scale? Let's talk about your business goals and how we can achieve them together." />
            <section className="contact-grid" style={{ padding: "100px 8%", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "start" }}>
                <div>
                    <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", marginBottom: "24px" }}>Let's <span style={{ color: colors.accent }}>Connect</span></h1>
                    <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: colors.subText, marginBottom: "40px", lineHeight: "1.6" }}>
                        Ready for your digital takeoff? Fill out the form, and our growth experts will reach out within 24 hours.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: "16px", textDecoration: "none", color: "inherit" }}>
                            <div style={{ fontSize: "24px" }}>📍</div>
                            <div>
                                <div style={{ fontWeight: "800", marginBottom: "5px" }}>Our Office</div>
                                <div style={{ color: colors.subText }}>Mumbai, Maharashtra, India</div>
                            </div>
                        </a>
                        <a href="mailto:hello@digiudaan.com" style={{ display: "flex", gap: "16px", textDecoration: "none", color: "inherit" }}>
                            <div style={{ fontSize: "24px" }}>📧</div>
                            <div>
                                <div style={{ fontWeight: "800", marginBottom: "5px" }}>Email Us</div>
                                <div style={{ color: colors.subText }}>hello@digiudaan.com</div>
                            </div>
                        </a>
                        <a href="tel:+919999988888" style={{ display: "flex", gap: "16px", textDecoration: "none", color: "inherit" }}>
                            <div style={{ fontSize: "24px" }}>📞</div>
                            <div>
                                <div style={{ fontWeight: "800", marginBottom: "5px" }}>Call/WhatsApp</div>
                                <div style={{ color: colors.subText }}>+91 99999 88888</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-form" style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}` }}>
                    <form style={{ display: "grid", gap: "20px" }} onSubmit={(e) => e.preventDefault()}>
                        <div className="name-email-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: "600", color: colors.subText }}>Full Name</label>
                                <input type="text" placeholder="John Doe" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "12px", padding: "14px", color: "white", outline: "none", fontSize: "16px" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: "600", color: colors.subText }}>Email Address</label>
                                <input type="email" placeholder="john@example.com" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "12px", padding: "14px", color: "white", outline: "none", fontSize: "16px" }} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", fontWeight: "600", color: colors.subText }}>Interested In</label>
                            <select style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "12px", padding: "14px", color: "white", outline: "none", appearance: "none", fontSize: "16px" }}>
                                <option>SEO Services</option>
                                <option>Google Ads</option>
                                <option>Meta Ads</option>
                                <option>Social Media</option>
                                <option>Web Development</option>
                            </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", fontWeight: "600", color: colors.subText }}>Message</label>
                            <textarea placeholder="How can we help you grow?" defaultValue={prefill} style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "12px", padding: "14px", color: "white", outline: "none", minHeight: "120px", fontSize: "16px", resize: "vertical" }} />
                        </div>
                        <button style={{ background: colors.accent, color: "white", border: "none", borderRadius: "12px", padding: "16px", fontSize: "16px", fontWeight: "800", cursor: "pointer", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" }}>Initialize Takeoff</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
