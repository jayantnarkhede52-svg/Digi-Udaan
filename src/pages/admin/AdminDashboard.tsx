import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import { colors } from '../../data/colors';
import type { LeadStats, Analytics, Lead } from '../../types';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [leadStats, setLeadStats] = useState<LeadStats | null>(null);
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [recentContacts, setRecentContacts] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem('admin_token') || '';

    useEffect(() => {
        if (!token) { navigate('/admin'); return; }

        const fetchData = async () => {
            try {
                const [stats, anal, contacts] = await Promise.all([
                    api.getLeadStats(token),
                    api.getAnalytics(token, 30),
                    api.getContacts(token),
                ]);
                setLeadStats(stats);
                setAnalytics(anal);
                setRecentContacts(contacts.slice(0, 5));
            } catch {
                navigate('/admin');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [token, navigate]);

    const logout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin');
    };

    if (loading) return <div style={{ padding: '120px 8%', textAlign: 'center', color: colors.subText }}>Loading dashboard...</div>;

    const statCards = [
        { label: 'Total Leads', value: leadStats?.total || 0, color: colors.accent },
        { label: 'New Leads', value: leadStats?.new || 0, color: '#22c55e' },
        { label: 'Contacted', value: leadStats?.contacted || 0, color: '#f59e0b' },
        { label: 'Converted', value: leadStats?.converted || 0, color: '#3b82f6' },
    ];

    return (
        <div style={{ padding: '100px 4% 60px', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '800' }}>📊 Dashboard</h1>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button onClick={() => navigate('/admin/blogs')} style={{ padding: '10px 20px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600' }}>📝 Blogs</button>
                    <button onClick={() => navigate('/admin/leads')} style={{ padding: '10px 20px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600' }}>🎯 Leads</button>
                    <button onClick={() => navigate('/admin/testimonials')} style={{ padding: '10px 20px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600' }}>⭐ Testimonials</button>
                    <button onClick={() => navigate('/admin/seo')} style={{ padding: '10px 20px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600' }}>🔍 SEO</button>
                    <button onClick={logout} style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', background: '#ef4444', color: 'white', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
                </div>
            </div>

            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {statCards.map((s, i) => (
                    <div key={i} style={{ background: colors.card, padding: '28px', borderRadius: '20px', border: `1px solid ${colors.border}` }}>
                        <div style={{ color: colors.subText, fontSize: '14px', marginBottom: '8px' }}>{s.label}</div>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: s.color }}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Analytics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                <div style={{ background: colors.card, padding: '28px', borderRadius: '20px', border: `1px solid ${colors.border}` }}>
                    <h3 style={{ fontWeight: '700', marginBottom: '20px' }}>📈 Page Views (Last 30 days)</h3>
                    <div style={{ fontSize: '42px', fontWeight: '800', color: colors.accent, marginBottom: '16px' }}>{analytics?.totalViews || 0}</div>
                    <h4 style={{ fontWeight: '600', marginBottom: '12px', color: colors.subText }}>Top Pages</h4>
                    {analytics?.topPages?.map((p: { path: string; count: number }, i: number) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${colors.border}`, fontSize: '14px' }}>
                            <span>{p.path}</span>
                            <span style={{ color: colors.accent, fontWeight: '700' }}>{p.count}</span>
                        </div>
                    ))}
                </div>

                <div style={{ background: colors.card, padding: '28px', borderRadius: '20px', border: `1px solid ${colors.border}` }}>
                    <h3 style={{ fontWeight: '700', marginBottom: '20px' }}>🎯 Lead Sources</h3>
                    {leadStats?.bySource && Object.entries(leadStats.bySource).map(([source, count]: [string, number], i: number) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${colors.border}` }}>
                            <span style={{ textTransform: 'capitalize' }}>{source.replace('_', ' ')}</span>
                            <span style={{ color: colors.accent, fontWeight: '700' }}>{count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Contacts */}
            <div style={{ background: colors.card, padding: '28px', borderRadius: '20px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontWeight: '700', marginBottom: '20px' }}>📬 Recent Contact Submissions</h3>
                {recentContacts.length === 0 ? (
                    <p style={{ color: colors.subText }}>No contacts yet.</p>
                ) : (
                    recentContacts.map((c: Lead, i: number) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: `1px solid ${colors.border}`, gap: '16px' }}>
                            <div>
                                <div style={{ fontWeight: '700' }}>{c.name}</div>
                                <div style={{ fontSize: '13px', color: colors.subText }}>{c.email} • {c.service || 'General'}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '20px', background: c.status === 'new' ? 'rgba(34,197,94,0.2)' : 'rgba(139,92,246,0.2)', color: c.status === 'new' ? '#22c55e' : colors.accent }}>{c.status}</span>
                                <span style={{ fontSize: '12px', color: colors.subText }}>{new Date(c.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
