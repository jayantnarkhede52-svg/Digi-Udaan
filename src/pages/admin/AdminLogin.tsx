import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import { colors } from '../../data/colors';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await api.login(email, password);
            if (res.token) {
                localStorage.setItem('admin_token', res.token);
                navigate('/admin/dashboard');
            } else {
                setError(res.error || 'Invalid credentials');
            }
        } catch {
            setError('Server error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ background: colors.card, padding: '50px', borderRadius: '24px', border: `1px solid ${colors.border}`, width: '100%', maxWidth: '420px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', textAlign: 'center' }}>Admin Panel</h1>
                <p style={{ color: colors.subText, textAlign: 'center', marginBottom: '30px' }}>Digital Udaan Dashboard</p>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: `1px solid ${colors.border}`, background: colors.bg, color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: `1px solid ${colors.border}`, background: colors.bg, color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                        />
                    </div>

                    {error && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: colors.accent, color: 'white', fontWeight: '700', fontSize: '16px', cursor: loading ? 'wait' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'opacity 0.3s' }}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
