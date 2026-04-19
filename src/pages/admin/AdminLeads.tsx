import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import { colors } from '../../data/colors';
import type { Lead } from '../../types';

const statusColors: Record<string, string> = {
    new: '#22c55e',
    contacted: '#f59e0b',
    converted: '#3b82f6',
    lost: '#ef4444',
};

const AdminLeads = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('admin_token') || '';
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const fetchLeads = useCallback(async () => {
        try {
            const data = await api.getLeads(token);
            setLeads(data);
        } catch { navigate('/admin'); }
        finally { setLoading(false); }
    }, [token, navigate]);

    useEffect(() => {
        if (!token) { navigate('/admin'); return; }
        fetchLeads();
    }, [token, navigate, fetchLeads]);

    const updateStatus = async (id: string, status: string) => {
        await api.updateLead(token, id, { status: status as any });
        fetchLeads();
    };

    const filtered = filter === 'all' ? leads : leads.filter((l: Lead) => l.status === filter);

    if (loading) return <div style={{ padding: '120px 8%', textAlign: 'center', color: colors.subText }}>Loading leads...</div>;

    return (
        <div style={{ padding: '100px 4% 60px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '12px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: '800' }}>🎯 Lead Manager</h1>
                <button onClick={() => navigate('/admin/dashboard')} style={{ padding: '10px 20px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600' }}>← Dashboard</button>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
                {['all', 'new', 'contacted', 'converted', 'lost'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        style={{
                            padding: '8px 18px', borderRadius: '20px', border: filter === f ? 'none' : `1px solid ${colors.border}`,
                            background: filter === f ? colors.accent : 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600', fontSize: '13px', textTransform: 'capitalize',
                        }}
                    >
                        {f} {f !== 'all' ? `(${leads.filter((l: Lead) => l.status === f).length})` : `(${leads.length})`}
                    </button>
                ))}
            </div>

            {/* Leads list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filtered.length === 0 ? (
                    <div style={{ background: colors.card, padding: '40px', borderRadius: '20px', textAlign: 'center', color: colors.subText }}>No leads found.</div>
                ) : filtered.map((lead: Lead) => (
                    <div key={lead.id} style={{ background: colors.card, padding: '20px 24px', borderRadius: '16px', border: `1px solid ${colors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <div style={{ fontWeight: '700', marginBottom: '4px' }}>{lead.name}</div>
                            <div style={{ fontSize: '13px', color: colors.subText }}>
                                {lead.email && <span>{lead.email} • </span>}
                                {lead.phone && <span>{lead.phone} • </span>}
                                <span style={{ textTransform: 'capitalize' }}>{lead.source?.replace('_', ' ')}</span>
                            </div>
                            {lead.message && <div style={{ fontSize: '13px', color: colors.subText, marginTop: '6px', fontStyle: 'italic' }}>"{lead.message.slice(0, 100)}{lead.message.length > 100 ? '...' : ''}"</div>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '12px', color: colors.subText }}>{new Date(lead.createdAt).toLocaleDateString()}</span>
                            <select
                                value={lead.status}
                                onChange={e => updateStatus(lead.id, e.target.value)}
                                style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', background: `${statusColors[lead.status]}30`, color: statusColors[lead.status], fontWeight: '700', cursor: 'pointer', fontSize: '12px' }}
                            >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="converted">Converted</option>
                                <option value="lost">Lost</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminLeads;
