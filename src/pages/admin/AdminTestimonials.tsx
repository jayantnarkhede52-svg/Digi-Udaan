import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../data/colors';
import { api } from '../../config/api';
import type { Testimonial } from '../../types';

const AdminTestimonials = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('admin_token') || '';
    
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '', role: '', quote: '', published: true });

    const fetchTestimonials = useCallback(async () => {
        try {
            const data = await api.getAdminTestimonials(token!);
            if (Array.isArray(data)) {
                setTestimonials(data);
            } else {
                console.error('Unexpected API response:', data);
                setTestimonials([]);
            }
        } catch (error) {
            console.error('Failed to fetch testimonials', error);
            setTestimonials([]);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        if (!token) {
            navigate('/admin');
            return;
        }
        fetchTestimonials();
    }, [navigate, token, fetchTestimonials]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData.id) {
                await api.updateTestimonial(token!, formData.id, formData);
            } else {
                await api.createTestimonial(token!, formData);
            }
            setIsEditing(false);
            setFormData({ id: '', name: '', role: '', quote: '', published: true });
            fetchTestimonials();
        } catch (error) {
            console.error('Failed to save testimonial', error);
        }
    };

    const handleDelete = async (id: string | undefined) => {
        if (!id) return;
        if (window.confirm('Are you sure you want to delete this testimonial?')) {
            try {
                await api.deleteTestimonial(token!, id);
                fetchTestimonials();
            } catch (error) {
                console.error('Failed to delete', error);
            }
        }
    };

    const handleEdit = (testimonial: Testimonial) => {
        setFormData({
            id: testimonial.id || '',
            name: testimonial.name,
            role: testimonial.role,
            quote: testimonial.quote,
            published: testimonial.published !== false
        });
        setIsEditing(true);
    };

    const inputStyle = {
        width: '100%', padding: '12px', borderRadius: '8px',
        border: `1px solid ${colors.border}`, background: 'rgba(255,255,255,0.05)',
        color: 'white', marginBottom: '16px', outline: 'none'
    };

    return (
        <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                <h1 style={{ fontSize: "32px", fontWeight: "800", display: "flex", alignItems: "center", gap: "12px" }}>
                    ⭐ Testimonials
                </h1>
                <div style={{ display: "flex", gap: "16px" }}>
                    <button onClick={() => navigate('/admin/dashboard')} style={{ padding: "10px 20px", borderRadius: "8px", border: `1px solid ${colors.border}`, background: "transparent", color: "white", cursor: "pointer" }}>← Dashboard</button>
                    <button onClick={() => { setFormData({ id: '', name: '', role: '', quote: '', published: true }); setIsEditing(true); }} style={{ padding: "10px 20px", borderRadius: "8px", border: "none", background: colors.accent, color: "white", fontWeight: "bold", cursor: "pointer" }}>+ New Testimonial</button>
                </div>
            </div>

            {isEditing && (
                <div style={{ background: colors.card, padding: "30px", borderRadius: "16px", border: `1px solid ${colors.border}`, marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>{formData.id ? 'Edit Testimonial' : 'New Testimonial'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <input style={inputStyle} type="text" placeholder="Client Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            <input style={inputStyle} type="text" placeholder="Role/Company (e.g. CEO at ABC Corp)" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                        </div>
                        <textarea style={{...inputStyle, height: '100px', resize: 'vertical'}} placeholder="Testimonial Quote *" required value={formData.quote} onChange={e => setFormData({...formData, quote: e.target.value})} />
                        
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '20px' }}>
                            <input type="checkbox" checked={formData.published} onChange={e => setFormData({...formData, published: e.target.checked})} />
                            Published (Visible on site)
                        </label>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button type="submit" style={{ padding: "12px 24px", borderRadius: "8px", border: "none", background: colors.accent, color: "white", fontWeight: "bold", cursor: "pointer" }}>Save</button>
                            <button type="button" onClick={() => setIsEditing(false)} style={{ padding: "12px 24px", borderRadius: "8px", border: `1px solid ${colors.border}`, background: "transparent", color: "white", cursor: "pointer" }}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {loading ? (
                <div style={{ textAlign: "center", padding: "40px", color: colors.subText }}>Loading testimonials...</div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {testimonials.map((t: Testimonial) => (
                        <div key={t.id} style={{ background: colors.card, padding: "24px", borderRadius: "16px", border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '40px', opacity: 0.2, marginBottom: '-20px' }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', flexGrow: 1, position: 'relative', zIndex: 1 }}>{t.quote}</p>
                            <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: 'bold', color: colors.accent }}>{t.name}</div>
                                    <div style={{ fontSize: '12px', color: colors.subText }}>{t.role}</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '100px', background: t.published ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: t.published ? '#4ade80' : '#f87171' }}>
                                        {t.published ? 'Published' : 'Draft'}
                                    </span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button onClick={() => handleEdit(t)} style={{ background: 'transparent', border: 'none', color: colors.subText, cursor: 'pointer', fontSize: '12px' }}>Edit</button>
                                        <button onClick={() => handleDelete(t.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '12px' }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {testimonials.length === 0 && <div style={{ color: colors.subText }}>No testimonials found. Create one to get started.</div>}
                </div>
            )}
        </div>
    );
};

export default AdminTestimonials;
