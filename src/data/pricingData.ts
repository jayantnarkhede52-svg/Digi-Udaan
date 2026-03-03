import seoNewIcon from "../assets/icons/seo-new.png";
import adsNewIcon from "../assets/icons/ads-new.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import gmbNewIcon from "../assets/icons/gmb-new.png";
import webNewIcon from "../assets/icons/web-new.png";

export const pricingData: any = {
    pricing_seo: {
        title: "Google SEO",
        icon: seoNewIcon,
        desc: "Dominate search results and drive organic traffic that converts.",
        features: ["Custom Strategy", "Keyword Research", "On-Page Optimization", "Technical Audit", "Content Strategy", "Monthly Reporting"],
        pkgs: [
            {
                name: "SEO Starter (Local Visibility)",
                price: "₹6,000/mo",
                details: [
                    "Website SEO Audit (Basic)",
                    "Keyword Research (10–12 Local Keywords)",
                    "On-Page SEO (Up to 5 Pages)",
                    "Title & Meta Description Optimization",
                    "Header Tags (H1–H3) & Image Alt Tags",
                    "Google Business Profile Optimization",
                    "Local SEO Setup (NAP Consistency)",
                    "Basic Technical Fixes (Speed, Mobile-Friendly)",
                    "Monthly Performance Report",
                    "Best For: Small Local Businesses, Shops, Clinics"
                ]
            },
            {
                name: "SEO Growth (Business Expansion)",
                price: "₹9,000/mo",
                details: [
                    "Everything in Starter +",
                    "Detailed SEO Audit (Technical + Content)",
                    "Keyword Research (25–40 Keywords)",
                    "On-Page SEO (Up to 10–12 Pages)",
                    "Content Optimization (2 SEO Blogs/Mo)",
                    "Internal Linking Strategy & Technical Fixes",
                    "Page Speed Optimization & Crawl Fixes",
                    "Backlink Building (5–10 Quality Links/Mo)",
                    "Google Search Console & Analytics Tracking",
                    "Monthly Ranking + Traffic Report",
                    "Best For: Growing Businesses, Startups"
                ]
            },
            {
                name: "SEO Authority (Brand & Leads)",
                price: "₹12,000/mo",
                details: [
                    "Everything in Growth +",
                    "Advanced Competitor Analysis",
                    "Keyword Research (50 Keywords)",
                    "Full Website On-Page SEO",
                    "Content Strategy & 4 SEO Blogs/Landing Pages",
                    "High-Quality Backlink Building (15–25 Links/Mo)",
                    "Local + National SEO Targeting",
                    "Schema Markup (FAQ, Reviews, Business)",
                    "Conversion Optimization Suggestions",
                    "Weekly Performance Tracking & Priority Support",
                    "Best For: Competitive Niches, E-commerce, Brands"
                ]
            }
        ]
    },
    pricing_google_ads: {
        title: "Google Ads",
        icon: adsNewIcon,
        desc: "High-intent traffic instantly. Pay only when they click.",
        features: ["Campaign Setup", "Keyword Bidding", "Ad Copywriting", "Conversion Tracking", "A/B Testing", "ROI Analysis"],
        pkgs: [
            {
                name: "Starter Ads Package",
                price: "₹6,000/mo",
                details: [
                    "Google Ads Budget: ₹3,500 (paid to Google)",
                    "Google Search Ads Setup",
                    "Keyword Research & Selection",
                    "1 Campaign with Focused Ad Groups",
                    "Ad Copy Writing (Conversion-Focused)",
                    "Location & Audience Targeting",
                    "Call / Lead Extension Setup",
                    "Conversion Tracking Setup & Basic Optimization",
                    "Monthly Performance Report",
                    "Best For: Small Businesses & Local Services",
                    "Expected Conversions: 25+"
                ]
            },
            {
                name: "Growth Ads Package",
                price: "₹9,000/mo",
                details: [
                    "Google Ads Budget: ₹6,500 (paid to Google)",
                    "Advanced Keyword & Competitor Research",
                    "2–3 Ad Campaigns with A/B Testing",
                    "Search + Display Ads",
                    "Enhanced Location & Device Targeting",
                    "Conversion Tracking & Goal Setup",
                    "Weekly Optimization & Bid Adjustments",
                    "Negative Keyword Management",
                    "Detailed Monthly Report",
                    "Best For: Growing Businesses",
                    "Expected Conversion: 45+"
                ]
            },
            {
                name: "Scale Ads Package",
                price: "₹12,000/mo",
                details: [
                    "Google Ads Budget: ₹10,500 (paid to Google)",
                    "Full-Funnel Google Ads Strategy",
                    "Multiple Campaigns & Ad Groups",
                    "Search + Display + Remarketing Ads",
                    "High-Intent Keyword Domination",
                    "Advanced Audience & Remarketing Setup",
                    "Landing Page Optimization Suggestions",
                    "Daily Monitoring & Priority Support",
                    "Comprehensive Performance Report",
                    "Best For: Competitive Niches",
                    "Expected Conversion: 65+"
                ]
            }
        ]
    },
    pricing_meta_ads: {
        title: "Meta Ads (FB/Insta)",
        icon: icon3,
        desc: "Reach your ideal customer where they spend their time.",
        features: ["Audience Targeting", "Creative Strategy", "Pixel Setup", "Retargeting", "Ad Copy", "Performance Analysis"],
        pkgs: [
            {
                name: "Starter Meta Ads",
                price: "₹6,000/mo",
                details: [
                    "Recommended Ad Budget: ₹3,500 (paid directly to Meta)",
                    "Meta Business Manager Setup",
                    "Facebook & Instagram Ads Setup",
                    "1 Ad Campaign (Lead/Traffic/Messages)",
                    "Audience Targeting & Ad Copy Writing",
                    "Basic Creative Guidance",
                    "Conversion Tracking Setup",
                    "Weekly Optimization & Monthly Report",
                    "Best For: Small businesses & first-time advertisers",
                    "Expected Quality Leads: 10+"
                ]
            },
            {
                name: "Growth Meta Ads",
                price: "₹12,000/mo",
                details: [
                    "Recommended Ad Budget: ₹8,000",
                    "2–3 Ad Campaigns",
                    "Advanced Audience Targeting (Custom + Interest)",
                    "A/B Testing (Ads & Audiences)",
                    "Lead / WhatsApp / Website Traffic Ads",
                    "Creative Direction for Reels & Images",
                    "Conversion & Event Tracking",
                    "Weekly Optimization & Detailed Monthly Report",
                    "Best For: Businesses looking for consistent leads",
                    "Expected Highly Qualified Leads: 20+"
                ]
            },
            {
                name: "Scale Meta Ads",
                price: "₹18,000/mo",
                details: [
                    "Recommended Ad Budget: ₹13,000",
                    "Full-Funnel Ad Strategy (Awareness → Leads → Retargeting)",
                    "Multiple Campaigns & Ad Sets",
                    "Advanced Custom & Lookalike Audiences",
                    "Retargeting & Remarketing Ads",
                    "Creative Strategy for High-Conversion Ads",
                    "Landing Page & Funnel Suggestions",
                    "Daily Monitoring & Optimization & Priority Support",
                    "In-Depth Performance Report",
                    "Best For: Competitive Niches & Aggressive Growth",
                    "Expected Quality Leads: 30+"
                ]
            }
        ]
    },
    pricing_social: {
        title: "Social Media Management",
        icon: icon4,
        desc: "Build a loyal community and engaging brand presence.",
        features: ["Content Calendar", "Graphic Design", "Caption Writing", "Hashtag Strategy", "Community Management", "Analytics"],
        pkgs: [
            {
                name: "Social Media Handling Package (Monthly)",
                price: "₹5,500/mo",
                details: [
                    "12 Custom Posts / Month (Static & Carousel)",
                    "5 High-Quality Reels / Month (Custom Concepts)",
                    "100% Customized Content (No Templates)",
                    "Premium Visual Quality & Modern Layouts",
                    "Caption Writing + Hashtags for Reach",
                    "Data-Driven Posting & Scheduling",
                    "Basic Page Optimization (Bio & Profile)",
                    "Monthly Performance Report (Reach & Growth)",
                    "Best For: Small Businesses & Personal Brands",
                    "Focus: Consistent Activity & Quality"
                ]
            }
        ]
    },
    pricing_gmb: {
        title: "Google My Business",
        icon: gmbNewIcon,
        desc: "Be the top choice for local customers in your area.",
        features: ["Profile Setup", "Verification Assist", "Review Management", "Post Updates", "Q&A Management", "Photo Uploads"],
        pkgs: [
            {
                name: "Active Local Growth Plan",
                price: "₹5,000/mo",
                details: [
                    "Includes: Profile Setup & Verification Support",
                    "Business Info Optimization (Name, Category, Area)",
                    "12–15 GMB Posts/mo (Updates, Offers, Highlights)",
                    "Review Management & Growth Strategy (Replies)",
                    "Local SEO: Service Area & Keyword Optimization",
                    "Competitor Activity Monitoring",
                    "Insights: Calls, Directions, Clicks Tracking",
                    "Monthly Performance Report & Suggestions",
                    "Best For: Shops, Clinics, Salons, Real Estate",
                    "Quality Promise: Active Profile & Safe Practices"
                ]
            }
        ]
    },
    pricing_web: {
        title: "Website Designing",
        icon: webNewIcon,
        desc: "Your 24/7 digital salesperson. Fast, secure, and beautiful.",
        features: ["Custom Design", "Mobile Optimization", "SEO Structure", "Fast Loading", "Conversion Focused", "Premium Support"],
        pkgs: [
            {
                name: "Single Page Package",
                price: "₹6,500",
                details: [
                    "1 Custom-Designed Landing Page",
                    "Mobile-Friendly & Responsive Layout",
                    "Clean Modern Design",
                    "Conversion-Focused Structure",
                    "Contact Form, WhatsApp & Call Integration",
                    "Basic On-Page SEO Setup",
                    "Fast Loading & Optimized Performance",
                    "Best For: Ads, Campaigns, Quick Launches"
                ]
            },
            {
                name: "Multi-Page Static Package",
                price: "₹12,000",
                details: [
                    "Up to 5 Static Pages (Home, About, Services, etc.)",
                    "Responsive Design for All Devices",
                    "Simple Professional Layout",
                    "SEO-Friendly Page Structure",
                    "Contact Form with Email Integration",
                    "Basic Speed Optimization",
                    "Secure & Reliable Setup",
                    "Best For: SMBs, Consultants, Startups"
                ]
            },
            {
                name: "Advanced Conversion Package",
                price: "₹20,000",
                details: [
                    "Up to 8-10 Custom Static Pages",
                    "High-Quality UI Design (Brand Identity)",
                    "Mobile-First Conversion Layouts",
                    "Advanced SEO Structure",
                    "Dedicated Landing Pages for Ads",
                    "Advanced Speed Optimization",
                    "Google Analytics & Search Console Setup",
                    "Best For: Lead Generation & Long-Term Marketing"
                ]
            },
            {
                name: "Signature Experience Package",
                price: "₹30,000",
                details: [
                    "Up to 10 Custom Static Pages",
                    "Premium UI/UX with Unique Layouts",
                    "Advanced Frontend Animations & Effects",
                    "Creative Storytelling Sections",
                    "High-Performance Frontend Optimization",
                    "Multiple Conversion Landing Sections",
                    "Advanced On-Page SEO Structure",
                    "Google Analytics & Schema Implementation",
                    "Best For: Premium Brands & High-End Startups"
                ]
            }
        ]
    }
};
