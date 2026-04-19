import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { servicePagesData } from '../data/servicePagesData';
import type { ServicePageContent } from '../data/servicePagesData';

const ServiceDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the matching service data
    const service: ServicePageContent | null = id ? servicePagesData[id] : null;

    if (!service) {
        return (
            <div style={{ padding: "120px 8%", textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontSize: "48px", fontWeight: "800", color: colors.accent, marginBottom: "20px" }}>404</h1>
                <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>Service Not Found</h2>
                <button
                    onClick={() => navigate('/services')}
                    style={{ padding: "14px 28px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}
                >
                    View All Services
                </button>
            </div>
        );
    }

    return (
        <>
            <SEO title={`${service.title} - Digital Udaan`} description={`Learn more about our premium ${service.title} services and how we can grow your business.`} />

            {/* Minimal Hero */}
            <section style={{ padding: "120px 8% 60px", background: `linear-gradient(to bottom, ${colors.bg}, rgba(0,0,0,0.3))` }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <button
                        onClick={() => navigate('/services')}
                        style={{ background: "transparent", border: "none", color: colors.subText, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "600", marginBottom: "30px", padding: 0 }}
                    >
                        ← Back to Services
                    </button>
                    <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "900", marginBottom: "20px", color: service.color }}>
                        {service.title}
                    </h1>
                    <p style={{ fontSize: "clamp(18px, 3vw, 24px)", color: "white", fontWeight: "600", maxWidth: "800px", margin: "0 auto" }}>
                        {service.tagline}
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section style={{ padding: "40px 8% 100px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "flex-start" }}>

                    {/* Visual / Sticky Side */}
                    <div className="service-visual-col" style={{ position: "sticky", top: "100px" }}>
                        <div style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${colors.border}`, aspectRatio: "4/3", marginBottom: "30px" }}>
                            <img src={service.heroImg} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "40px", borderRadius: "24px", border: `1px solid ${colors.accent}`, textAlign: "center" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "15px" }}>Ready for more customers?</h3>
                            <p style={{ color: colors.subText, marginBottom: "24px", fontSize: "16px" }}>Stop wasting time. Let's build a strategy that works.</p>
                            <button
                                onClick={() => navigate('/contact')}
                                style={{ width: "100%", padding: "16px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer", fontSize: "16px" }}
                            >
                                Contact Our Team
                            </button>
                        </div>
                    </div>

                    {/* Text / Reading Side */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="service-content"
                        style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.9)", maxWidth: "700px" }}
                        dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                </div>
            </section>

            {/* CSS for injected HTML content */}
            <style>{`
                .service-content h3 {
                    font-size: 28px;
                    font-weight: 800;
                    margin: 0 0 20px 0;
                    color: white;
                    line-height: 1.3;
                }
                .service-content p {
                    margin-bottom: 24px;
                    font-size: 18px;
                }
                .service-content strong {
                    color: ${service.color};
                    font-size: 20px;
                    display: inline-block;
                    margin-bottom: 8px;
                }
                /* Mobile Layout Adjustments */
                @media (max-width: 768px) {
                    .service-visual-col {
                        position: relative !important;
                        top: 0 !important;
                    }
                    .service-content h3 {
                        font-size: 24px;
                    }
                }
            `}</style>
        </>
    );
};

export default ServiceDetailPage;
