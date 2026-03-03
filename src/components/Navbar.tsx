import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ colors }: any) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { id: '/', label: 'Home' },
        { id: '/services', label: 'Services' },
        { id: '/pricing', label: 'Pricing' },
        { id: '/blog', label: 'Blog' },
        { id: '/about', label: 'About' },
        { id: '/contact', label: 'Contact' },
    ];

    const handleNav = () => {
        setMobileOpen(false);
        window.scrollTo(0, 0);
    };

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <nav style={{
                display: "flex", justifyContent: "space-between", padding: "20px 8%", position: "fixed", width: "100%", top: 0, zIndex: 1000,
                background: colors.bg, backdropFilter: "blur(10px)", boxSizing: "border-box", borderBottom: `1px solid ${colors.border}`
            }}>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={handleNav}>
                    <div style={{ fontWeight: "800", color: colors.accent, cursor: "pointer", fontSize: "20px" }}>Digi Udaan</div>
                </Link>
                <div className="desktop-nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.id}
                            to={link.id}
                            style={{
                                cursor: "pointer",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: isActive(link.id) ? colors.accent : colors.subText,
                                textDecoration: 'none'
                            }}
                            onClick={handleNav}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    {mobileOpen ? "✕" : "☰"}
                </button>
            </nav>

            <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <Link
                        key={link.id}
                        to={link.id}
                        className={`mobile-nav-link ${isActive(link.id) ? 'active' : ''}`}
                        onClick={handleNav}
                        style={{ textDecoration: 'none' }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
