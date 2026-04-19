import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import { colors } from '../../data/colors';
import type { Blog } from '../../types';

const AdminBlogs = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('admin_token') || '';
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [showEditor, setShowEditor] = useState(false);
    const [editing, setEditing] = useState<Blog | null>(null);
    const [form, setForm] = useState({ title: '', slug: '', category: '', content: '', author: 'Digital Udaan Team', readTime: '5 min read', img: '', excerpt: '', published: true });

    const fetchBlogs = useCallback(async () => {
        try {
            const data = await api.getAdminBlogs(token);
            setBlogs(data);
        } catch { navigate('/admin'); }
        finally { setLoading(false); }
    }, [token, navigate]);

    useEffect(() => {
        if (!token) { navigate('/admin'); return; }
        fetchBlogs();
    }, [token, navigate, fetchBlogs]);

    const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = { ...form, slug: form.slug || generateSlug(form.title) };

        if (editing) {
            await api.updateBlog(token, editing.id, data);
        } else {
            await api.createBlog(token, data);
        }

        setShowEditor(false);
        setEditing(null);
        setForm({ title: '', slug: '', category: '', content: '', author: 'Digital Udaan Team', readTime: '5 min read', img: '', excerpt: '', published: true });
        fetchBlogs();
    };

    const handleEdit = (blog: Blog) => {
        setEditing(blog);
        setForm({
            title: blog.title || '',
            slug: blog.slug || '',
            category: blog.category || '',
            content: blog.content || '',
            author: blog.author || 'Digital Udaan Team',
            readTime: blog.readTime || '5 min read',
            img: blog.img || '',
            excerpt: blog.excerpt || '',
            published: blog.published !== false,
        });
        setShowEditor(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            await api.deleteBlog(token, id);
            fetchBlogs();
        }
    };

    const inputStyle = { width: '100%', padding: '12px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: colors.bg, color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' as const, marginBottom: '16px' };

    if (loading) return <div style={{ padding: '120px 8%', textAlign: 'center', color: colors.subText }}>Loading blogs...</div>;

    return (
        <div style={{ padding: '100px 4% 60px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '12px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: '800' }}>📝 Blog Manager</h1>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => navigate('/admin/dashboard')} style={{ padding: '10px 20px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: '600' }}>← Dashboard</button>
                    <button onClick={() => { setEditing(null); setForm({ title: '', slug: '', category: '', content: '', author: 'Digital Udaan Team', readTime: '5 min read', img: '', excerpt: '', published: true }); setShowEditor(true); }} style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', background: colors.accent, color: 'white', cursor: 'pointer', fontWeight: '600' }}>+ New Post</button>
                </div>
            </div>

            {/* Blog Editor Modal */}
            {showEditor && (
                <div style={{ background: colors.card, padding: '30px', borderRadius: '20px', border: `1px solid ${colors.border}`, marginBottom: '30px' }}>
                    <h2 style={{ fontWeight: '700', marginBottom: '24px' }}>{editing ? 'Edit Post' : 'Create New Post'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Title *</label>
                                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })} required style={inputStyle} placeholder="Blog post title" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Slug</label>
                                <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} style={inputStyle} placeholder="auto-generated-slug" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Category</label>
                                <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={inputStyle} placeholder="e.g., SEO, Ads, Web Dev" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Read Time</label>
                                <input value={form.readTime} onChange={e => setForm({ ...form, readTime: e.target.value })} style={inputStyle} placeholder="5 min read" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Author</label>
                                <input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} style={inputStyle} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Image URL</label>
                                <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} style={inputStyle} placeholder="https://..." />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Excerpt</label>
                            <input value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} style={inputStyle} placeholder="Short description for the blog card" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Content (HTML) *</label>
                            <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required style={{ ...inputStyle, minHeight: '250px', resize: 'vertical', fontFamily: 'monospace' }} placeholder="<h3>Section Title</h3><p>Your content here...</p>" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" checked={form.published} onChange={e => setForm({ ...form, published: e.target.checked })} />
                                <span style={{ fontSize: '14px', fontWeight: '600' }}>Published</span>
                            </label>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button type="submit" style={{ padding: '12px 28px', borderRadius: '10px', border: 'none', background: colors.accent, color: 'white', fontWeight: '700', cursor: 'pointer' }}>{editing ? 'Save Changes' : 'Create Post'}</button>
                            <button type="button" onClick={() => { setShowEditor(false); setEditing(null); }} style={{ padding: '12px 28px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Blog list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {blogs.length === 0 ? (
                    <div style={{ background: colors.card, padding: '40px', borderRadius: '20px', textAlign: 'center', color: colors.subText }}>No blog posts yet. Click "+ New Post" to create one.</div>
                ) : blogs.map((blog: Blog) => (
                    <div key={blog.id} style={{ background: colors.card, padding: '20px 24px', borderRadius: '16px', border: `1px solid ${colors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                                <h3 style={{ fontWeight: '700', fontSize: '16px' }}>{blog.title}</h3>
                                <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '20px', background: blog.published ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)', color: blog.published ? '#22c55e' : '#ef4444' }}>{blog.published ? 'Published' : 'Draft'}</span>
                            </div>
                            <div style={{ fontSize: '13px', color: colors.subText }}>{blog.category} • {blog.date} • {blog.author}</div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={() => handleEdit(blog)} style={{ padding: '8px 16px', borderRadius: '8px', border: `1px solid ${colors.border}`, background: 'transparent', color: 'white', cursor: 'pointer', fontSize: '13px' }}>Edit</button>
                            <button onClick={() => handleDelete(blog.id)} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: 'rgba(239,68,68,0.2)', color: '#ef4444', cursor: 'pointer', fontSize: '13px' }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminBlogs;
