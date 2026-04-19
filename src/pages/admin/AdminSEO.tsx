import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../data/colors';
import { api } from '../../config/api';
import type { SEOData } from '../../types';

const AdminSEO = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('admin_token') || '';
    
    const [seoData, setSeoData] = useState<Record<string, SEOData>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeRoute, setActiveRoute] = useState('/');

    // Predefined routes that we want to manage SEO for
    const managedRoutes = [
        { path: '/', label: 'Home Page' },
        { path: '/services', label: 'Services Index' },
        { path: '/services/google-seo', label: 'Google SEO Service' },
        { path: '/services/google-ads', label: 'Google Ads Service' },
        { path: '/services/meta-ads', label: 'Meta Ads Service' },
        { path: '/services/web-development', label: 'Web Developement Service' },
        { path: '/services/social-media', label: 'Social Media Service' },
        { path: '/services/gmb-local', label: 'GMB Local Service' },
        { path: '/pricing', label: 'Pricing Page' },
        { path: '/blog', label: 'Blog Index' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact Page' }
    ];

    useEffect(() => {
        if (!token) {
            navigate('/admin');
            return;
        }
        fetchSEO();
    }, [navigate, token]);

    const fetchSEO = async () => {
        try {
            const data = await api.getSEOSettings();
            
            if (data && typeof data === 'object' && !data.error) {
                // Map the data by route for easy lookup
                const mappedData: Record<string, SEOData> = {};
                Object.values(data as Record<string, SEOData>).forEach((item: SEOData) => {
                    if (item && item.route) {
                        mappedData[item.route] = item;
                    }
                });
                setSeoData(mappedData);
            } else {
                console.error('Unexpected API response:', data);
                setSeoData({});
            }
        } catch (error) {
            console.error('Failed to fetch SEO settings', error);
            setSeoData({});
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const dataToSave = seoData[activeRoute] || { route: activeRoute, title: '', description: '', keywords: '' };
            await api.updateSEO(token!, activeRoute, dataToSave);
            alert('SEO settings saved successfully!');
            fetchSEO();
        } catch (error) {
            console.error('Failed to save SEO settings', error);
            alert('Failed to save settings. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setSeoData(prev => ({
            ...prev,
            [activeRoute]: {
                ...prev[activeRoute],
                route: activeRoute,
                [field]: value
            }
        }));
    };

    const inputStyle = {
        width: '100%', padding: '12px', borderRadius: '8px',
        border: `1px solid ${colors.border}`, background: 'rgba(255,255,255,0.05)',
        color: 'white', marginBottom: '16px', outline: 'none'
    };

    const currentData = seoData[activeRoute] || { title: '', description: '', keywords: '' };

    return (
        <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                <h1 style={{ fontSize: "32px", fontWeight: "800", display: "flex", alignItems: "center", gap: "12px" }}>
                    🔍 SEO Management
                </h1>
                <button onClick={() => navigate('/admin/dashboard')} style={{ padding: "10px 20px", borderRadius: "8px", border: `1px solid ${colors.border}`, background: "transparent", color: "white", cursor: "pointer" }}>← Dashboard</button>
            </div>

            {loading ? (
                <div style={{ textAlign: "center", padding: "40px", color: colors.subText }}>Loading SEO settings...</div>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "40px" }}>
                    {/* Sidebar: Route Selector */}
                    <div style={{ background: colors.card, padding: "20px", borderRadius: "16px", border: `1px solid ${colors.border}`, height: "fit-content" }}>
                        <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "16px", color: colors.subText, textTransform: "uppercase", letterSpacing: "1px" }}>Pages</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {managedRoutes.map(route => {
                                const isConfigured = !!seoData[route.path];
                                const isActive = activeRoute === route.path;
                                return (
                                    <button
                                        key={route.path}
                                        onClick={() => setActiveRoute(route.path)}
                                        style={{
                                            padding: "10px 16px", borderRadius: "8px", border: "none", textAlign: "left", cursor: "pointer",
                                            background: isActive ? colors.accent : "transparent",
                                            color: isActive ? "white" : colors.subText,
                                            fontWeight: isActive ? "bold" : "normal",
                                            display: "flex", justifyContent: "space-between", alignItems: "center"
                                        }}
                                    >
                                        <span>{route.label}</span>
                                        {isConfigured && <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: isActive ? "white" : "#4ade80" }} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Content: SEO Form */}
                    <div style={{ background: colors.card, padding: "40px", borderRadius: "16px", border: `1px solid ${colors.border}` }}>
                        <div style={{ marginBottom: "30px" }}>
                            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Editing SEO for: <span style={{ color: colors.accent }}>{managedRoutes.find(r => r.path === activeRoute)?.label}</span></h2>
                            <code style={{ background: "rgba(255,255,255,0.05)", padding: "4px 8px", borderRadius: "4px", color: colors.subText }}>{activeRoute}</code>
                        </div>

                        <form onSubmit={handleSave}>
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Meta Title</label>
                            <input
                                style={inputStyle}
                                type="text"
                                placeholder="e.g. Best Digital Marketing Agency in Mumbai | Digital Udaan"
                                value={currentData.title}
                                onChange={e => handleInputChange('title', e.target.value)}
                            />
                            <div style={{ fontSize: "12px", color: currentData.title.length > 60 ? '#ef4444' : colors.subText, marginBottom: "24px", marginTop: "-12px" }}>
                                {currentData.title.length} / 60 characters recommended
                            </div>

                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Meta Description</label>
                            <textarea
                                style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
                                placeholder="A compelling description of the page content that encourages clicks..."
                                value={currentData.description}
                                onChange={e => handleInputChange('description', e.target.value)}
                            />
                            <div style={{ fontSize: "12px", color: currentData.description.length > 160 ? '#ef4444' : colors.subText, marginBottom: "24px", marginTop: "-12px" }}>
                                {currentData.description.length} / 160 characters recommended
                            </div>

                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Keywords (Comma separated)</label>
                            <input
                                style={inputStyle}
                                type="text"
                                placeholder="e.g. digital marketing, seo, mumbai, google ads"
                                value={currentData.keywords}
                                onChange={e => handleInputChange('keywords', e.target.value)}
                            />

                            <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: `1px solid ${colors.border}` }}>
                                <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "16px", color: colors.subText }}>Google Search Preview</h3>
                                <div style={{ background: "white", padding: "20px", borderRadius: "8px", fontFamily: "arial, sans-serif" }}>
                                    <div style={{ color: "#202124", fontSize: "14px", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
                                        <div style={{ width: "24px", height: "24px", background: colors.accent, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>DU</div>
                                        <span>https://digiudaan.com{activeRoute !== '/' ? activeRoute : ''}</span>
                                    </div>
                                    <div style={{ color: "#1a0dab", fontSize: "20px", lineHeight: "1.3", marginBottom: "4px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                        {currentData.title || 'Page Title Will Appear Here'}
                                    </div>
                                    <div style={{ color: "#4d5156", fontSize: "14px", lineHeight: "1.58" }}>
                                        {currentData.description || 'The meta description will appear here as a snippet below the title in search engine results.'}
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    style={{
                                        padding: "14px 32px", borderRadius: "8px", border: "none",
                                        background: saving ? colors.subText : colors.accent,
                                        color: "white", fontWeight: "bold", cursor: saving ? "wait" : "pointer",
                                        fontSize: "16px"
                                    }}
                                >
                                    {saving ? 'Saving...' : 'Save SEO Settings'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminSEO;
