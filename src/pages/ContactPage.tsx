import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { colors } from '../data/colors';
import { api } from '../config/api';

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: typeof window !== 'undefined' ? (window.__contactPrefill || '') : ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Clear prefill after it's been used for initial state
        if (typeof window !== 'undefined' && window.__contactPrefill) {
            window.__contactPrefill = undefined;
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await api.submitContact(form);
            if (res.id) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputStyle = {
        width: '100%', padding: '16px', borderRadius: '14px',
        border: `1px solid ${colors.border}`, background: 'rgba(255,255,255,0.05)',
        color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box' as const,
        transition: 'border-color 0.3s',
    };

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
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                            <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
                            <h2 style={{ fontWeight: '800', fontSize: '24px', marginBottom: '12px' }}>Message Sent!</h2>
                            <p style={{ color: colors.subText, marginBottom: '24px' }}>We'll get back to you within 24 hours.</p>
                            <button onClick={() => setStatus('idle')} style={{ padding: '12px 28px', borderRadius: '100px', border: `1px solid ${colors.accent}`, background: 'transparent', color: colors.accent, fontWeight: '700', cursor: 'pointer' }}>Send Another Message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <h2 style={{ fontWeight: '800', fontSize: '22px', marginBottom: '28px' }}>Send us a message</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <input
                                    type="text" placeholder="Your Name *" required
                                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                    style={inputStyle}
                                />
                                <input
                                    type="email" placeholder="Email Address *" required
                                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <input
                                    type="tel" placeholder="Phone Number"
                                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                    style={inputStyle}
                                />
                                <select
                                    value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                                >
                                    <option value="" style={{ background: colors.bg }}>Select Service</option>
                                    <option value="SEO" style={{ background: colors.bg }}>Google SEO</option>
                                    <option value="Google Ads" style={{ background: colors.bg }}>Google Ads</option>
                                    <option value="Meta Ads" style={{ background: colors.bg }}>Meta Ads</option>
                                    <option value="Social Media" style={{ background: colors.bg }}>Social Media</option>
                                    <option value="Web Development" style={{ background: colors.bg }}>Web Development</option>
                                    <option value="GMB" style={{ background: colors.bg }}>GMB Local</option>
                                    <option value="Other" style={{ background: colors.bg }}>Other</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Tell us about your project *" required rows={5}
                                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                style={{ ...inputStyle, resize: 'vertical', marginBottom: '24px' }}
                            />
                            {status === 'error' && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px' }}>Something went wrong. Please try again.</p>}
                            <button
                                type="submit" disabled={status === 'sending'}
                                style={{ width: '100%', padding: '16px', borderRadius: '100px', border: 'none', background: colors.accent, color: 'white', fontWeight: '700', fontSize: '16px', cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message →'}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
};

export default ContactPage;
