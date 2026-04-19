export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    category: string;
    date: string;
    img?: string;
    author?: string;
    readTime?: string;
    published?: boolean;
}

export interface Testimonial {
    id?: string;
    name: string;
    role: string;
    quote: string;
    rating?: number;
    published?: boolean;
}

export interface Service {
    title: string;
    icon: React.ReactNode;
    gist: string;
    img: string;
    page: string;
}

export interface DetailedService {
    title: string;
    desc: string;
    tags: string[];
    color: string;
    img: string;
    benefits: string[];
}

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    date: string;
    createdAt: string;
    source?: string;
    status: 'new' | 'contacted' | 'converted' | 'lost' | 'resolved';
}

export interface LeadStats {
    total: number;
    new: number;
    contacted: number;
    converted: number;
    lost: number;
    bySource: Record<string, number>;
}

export interface Analytics {
    totalViews: number;
    topPages: { path: string; count: number }[];
}

export interface SEOData {
    route: string;
    title: string;
    description: string;
    keywords: string;
}

export interface PricingPackage {
    name: string;
    price: string;
    badge?: string;
    details: string[];
}

export interface PricingCategory {
    title: string;
    icon: string;
    desc: string;
    features: string[];
    pkgs: PricingPackage[];
}
