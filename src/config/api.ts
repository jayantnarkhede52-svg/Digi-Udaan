import type { Blog, Testimonial, Lead, SEOData } from '../types';

const API_BASE_URL = import.meta.env.PROD
    ? 'https://your-render-backend.onrender.com'  // Update with your Render URL
    : 'http://localhost:5000';

export const api = {
    // Public endpoints
    submitContact: (data: Partial<Lead>) =>
        fetch(`${API_BASE_URL}/api/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => res.json()),

    getBlogs: (): Promise<Blog[]> =>
        fetch(`${API_BASE_URL}/api/blogs`).then(res => res.json()),

    getBlog: (slug: string): Promise<Blog> =>
        fetch(`${API_BASE_URL}/api/blogs/${slug}`).then(res => res.json()),

    trackPageView: (path: string) =>
        fetch(`${API_BASE_URL}/api/analytics/pageview`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path, referrer: document.referrer, userAgent: navigator.userAgent }),
        }).catch(() => {}), // Silent fail

    createLead: (data: Partial<Lead>) =>
        fetch(`${API_BASE_URL}/api/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => res.json()).catch(() => {}),

    // Admin endpoints
    login: (email: string, password: string) =>
        fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        }).then(res => res.json()),

    verifyToken: (token: string) =>
        fetch(`${API_BASE_URL}/api/auth/verify`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    // Admin - Contacts
    getContacts: (token: string): Promise<Lead[]> =>
        fetch(`${API_BASE_URL}/api/contacts`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    updateContact: (token: string, id: string, data: Partial<Lead>) =>
        fetch(`${API_BASE_URL}/api/contacts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json()),

    // Admin - Blogs
    getAdminBlogs: (token: string): Promise<Blog[]> =>
        fetch(`${API_BASE_URL}/api/blogs/admin/all`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    createBlog: (token: string, data: Partial<Blog>) =>
        fetch(`${API_BASE_URL}/api/blogs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json()),

    updateBlog: (token: string, id: string, data: Partial<Blog>) =>
        fetch(`${API_BASE_URL}/api/blogs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json()),

    deleteBlog: (token: string, id: string) =>
        fetch(`${API_BASE_URL}/api/blogs/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    // Admin - Leads
    getLeads: (token: string): Promise<Lead[]> =>
        fetch(`${API_BASE_URL}/api/leads`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    updateLead: (token: string, id: string, data: Partial<Lead>) =>
        fetch(`${API_BASE_URL}/api/leads/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json()),

    getLeadStats: (token: string) =>
        fetch(`${API_BASE_URL}/api/leads/stats/summary`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    // Admin - Analytics
    getAnalytics: (token: string, days = 30) =>
        fetch(`${API_BASE_URL}/api/analytics/summary?days=${days}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    // --- TESTIMONIALS ---
    getTestimonials: (): Promise<Testimonial[]> =>
        fetch(`${API_BASE_URL}/api/testimonials`).then(res => res.json()),
        
    getAdminTestimonials: (token: string): Promise<Testimonial[]> =>
        fetch(`${API_BASE_URL}/api/testimonials/admin/all`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),
        
    createTestimonial: (token: string, data: Partial<Testimonial>) =>
        fetch(`${API_BASE_URL}/api/testimonials`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json()),
        
    updateTestimonial: (token: string, id: string, data: Partial<Testimonial>) =>
        fetch(`${API_BASE_URL}/api/testimonials/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json()),
        
    deleteTestimonial: (token: string, id: string) =>
        fetch(`${API_BASE_URL}/api/testimonials/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json()),

    // --- SEO MANAGEMENT ---
    getSEOSettings: () =>
        fetch(`${API_BASE_URL}/api/seo`).then(res => res.json()),
        
    updateSEO: (token: string, route: string, data: Partial<SEOData>) => {
        const routeBase64 = btoa(route);
        return fetch(`${API_BASE_URL}/api/seo/${routeBase64}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        }).then(res => res.json());
    }
};
