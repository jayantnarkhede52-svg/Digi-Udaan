import { Link } from 'react-router-dom';

const SiteFooter = ({ colors }: any) => {
    return (
        <footer style={{ padding: "80px 8% 40px", borderTop: `1px solid ${colors.border}`, background: "rgba(10, 5, 20, 0.5)" }}>
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "60px" }}>
                <div>
                    <div style={{ fontWeight: "800", color: colors.accent, fontSize: "24px", marginBottom: "20px" }}>Digi Udaan</div>
                    <p style={{ color: colors.subText, lineHeight: "1.7", marginBottom: "24px" }}>
                        The agency for Mumbai's next generation of market leaders. We don't just manage ads; we build growth engines.
                    </p>
                    <div className="footer-social" style={{ display: "flex", gap: "15px" }}>
                        {['📱', '💼', '📧'].map((icon, i) => (
                            <div key={i} style={{ width: "40px", height: "40px", borderRadius: "12px", background: colors.card, border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>{icon}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 style={{ marginBottom: "24px" }}>Company</h4>
                    {['home', 'about', 'blog', 'contact'].map(item => (
                        <Link
                            key={item}
                            to={`/${item === 'home' ? '' : item}`}
                            style={{ display: "block", color: colors.subText, marginBottom: "12px", textDecoration: "none", textTransform: 'capitalize' }}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <div>
                    <h4 style={{ marginBottom: "24px" }}>Services</h4>
                    {['SEO', 'Ads', 'Social', 'Web'].map(item => (
                        <Link
                            key={item}
                            to="/services"
                            style={{ display: "block", color: colors.subText, marginBottom: "12px", textDecoration: "none" }}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <div>
                    <h4 style={{ marginBottom: "24px" }}>Legal</h4>
                    {['privacy', 'terms'].map(item => (
                        <Link
                            key={item}
                            to={`/${item}`}
                            style={{ display: "block", color: colors.subText, marginBottom: "12px", textDecoration: "none", textTransform: 'capitalize' }}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", color: colors.subText, fontSize: "14px", paddingTop: "40px", borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                <span>© 2024 Digi Udaan. All rights reserved.</span>
                <span>Built with ❤️ in Mumbai</span>
            </div>
        </footer>
    );
};

export default SiteFooter;
