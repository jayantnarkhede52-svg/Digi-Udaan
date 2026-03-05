import seoIcon from "../assets/seo-icon.svg";
import adsIcon from "../assets/ads-icon.svg";
import socialIcon from "../assets/social-icon.svg";
import metaIcon from "../assets/meta-icon.svg";
import gmbIcon from "../assets/gmb-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import seoServiceImg from "../assets/seo-service.jpg";
import gmbServiceImg from "../assets/gmb-service.jpg";
import googleAdsImg from "../assets/google-ads-service.jpg";
import socialMediaImg from "../assets/social-media-service.jpg";
import webDevImg from "../assets/web-dev-service.jpg";
import { blogData } from './blogData';

export const servicesData = [
    { title: "Google SEO", icon: <img src={seoIcon} alt="SEO" style={{ width: "60px", height: "60px" }} />, gist: "We help your website show up when people search for what you do.", img: seoServiceImg, page: "google-seo" },
    { title: "Google Ads", icon: <img src={adsIcon} alt="Ads" style={{ width: "60px", height: "60px" }} />, gist: "We run ads that bring in real calls and inquiries, not just clicks.", img: googleAdsImg, page: "google-ads" },
    { title: "Meta Ads", icon: <img src={metaIcon} alt="Meta" style={{ width: "60px", height: "60px" }} />, gist: "Eye-catching ads on Instagram & Facebook that actually bring customers.", img: socialMediaImg, page: "meta-ads" },
    { title: "Social Media", icon: <img src={socialIcon} alt="Social" style={{ width: "60px", height: "60px" }} />, gist: "We post, design, and manage your social media so you don't have to.", img: socialMediaImg, page: "social-media" },
    { title: "GMB Local", icon: <img src={gmbIcon} alt="GMB" style={{ width: "60px", height: "60px" }} />, gist: "We make sure you show up on Google Maps when people search nearby.", img: gmbServiceImg, page: "gmb" },
    { title: "React Dev", icon: <img src={reactIcon} alt="React" style={{ width: "60px", height: "60px" }} />, gist: "Good-looking, super fast websites that work great on phones.", img: webDevImg, page: "web-development" }
];

export const detailedServicesData: any = {
    "google-seo": {
        title: "Search Engine Optimization (SEO)",
        desc: "We help your website rank higher on Google so more people find you. We fix the technical stuff, write helpful content, and build your site's reputation online — simple as that.",
        tags: ["On-Page Fixes", "Technical Cleanup", "Content Writing", "Reputation Building"],
        color: "#22c55e",
        img: seoServiceImg,
        benefits: ["Higher Rankings", "More Website Visitors", "Better Experience", "Long-term Results"]
    },
    "gmb": {
        title: "Google My Business (GMB) Optimization",
        desc: "When someone nearby searches for your type of business, we make sure you show up first on Google Maps. We handle your profile, respond to reviews, and keep it fresh every week.",
        tags: ["Profile Setup", "Review Replies", "Weekly Updates", "Local Visibility"],
        color: "#f97316",
        img: gmbServiceImg,
        benefits: ["Show Up Locally", "More Walk-ins", "Build Trust", "Get More Calls"]
    },
    "google-ads": {
        title: "Google Ads Management",
        desc: "We run Google Ads that bring in real customers — not just random clicks. We pick the right keywords, write clear ads, and watch your budget carefully so you get the most out of every rupee.",
        tags: ["Search Ads", "Call Tracking", "Smart Budgeting", "Keyword Research"],
        color: "#ef4444",
        img: googleAdsImg,
        benefits: ["Quick Results", "Real Customers", "Clear Reports", "Grow Steadily"]
    },
    "social-media": {
        title: "Social Media Management",
        desc: "We take care of your Instagram and Facebook — from designing good-looking posts to writing captions and replying to comments. You focus on your business, we'll handle the social media.",
        tags: ["Post Design", "Community Building", "Reels & Videos", "Caption Writing"],
        color: "#eab308",
        img: socialMediaImg,
        benefits: ["Get Noticed", "Build a Following", "Talk to Customers", "Grow Your Brand"]
    },
    "web-development": {
        title: "Web Design & Development",
        desc: "We build clean, modern websites that look great on phones and load fast. Your website will help customers understand what you do and make it easy for them to contact you or buy.",
        tags: ["Custom Design", "Mobile-Friendly", "Fast Loading", "Easy Navigation"],
        color: "#3b82f6",
        img: webDevImg,
        benefits: ["Great First Impression", "Works on All Phones", "Easy to Contact You", "Brings in Leads"]
    },
    "meta-ads": {
        title: "Meta Ads (Facebook & Instagram)",
        desc: "We run ads on Instagram and Facebook that actually bring customers. We target the right audience and create eye-catching visuals that grab attention.",
        tags: ["Targeted Ads", "Visual Creation", "Brand Awareness", "Ad Optimization"],
        color: "#eab308",
        img: socialMediaImg,
        benefits: ["Reach Buyers", "Social Presence", "High Engagement", "Fast Scaling"]
    }
};

export const quizQuestions = [
    { q: "If your brand was a Mumbai snack, what would it be?", a: ["Vada Pav (Reliable)", "Sushi (Premium)", "Cutting Chai (Energetic)"] },
    { q: "How do you want your customers to feel?", a: ["Safe & Secure", "Inspired & Bold", "Understood & Friendly"] },
    { q: "What's your communication style?", a: ["Professional", "Witty & Playful", "Direct Hustle"] }
];

export const whyChooseUs = [
    { title: "We Care About Results", desc: "We don't chase likes. We chase calls, leads, and real business growth." },
    { title: "No Surprises", desc: "You'll always know what we're doing and why. No confusing reports." },
    { title: "We Speak Your Language", desc: "No fancy marketing words. We explain things simply and clearly." },
    { title: "Made for You", desc: "Every plan is built around your specific business and budget." },
    { title: "Fair Pricing", desc: "What you see is what you pay. No hidden fees, ever." },
    { title: "We're On Your Team", desc: "We think of your business like our own. Your win is our win." }
];

export const whoBenefits = [
    "Local service businesses",
    "Startups and small companies",
    "Real estate & construction firms",
    "Clinics, gyms, and professionals",
    "Restaurants and retail businesses"
];

export const marqueeKeywords = ["GROWTH", "STRATEGY", "ROI", "LEADS", "BRANDING", "SEO", "PPC", "DIGITAL", "SCALE", "REVENUE", "MUMBAI"];

export const testimonials = [
    { name: "Rajesh K.", role: "CEO, TechFlow", quote: "These guys actually care about results. Our business grew 3x in 6 months — I still can't believe it." },
    { name: "Priya M.", role: "Founder, Glow Skincare", quote: "They understand both good design and getting sales. Best decision we made for our brand." },
    { name: "Amit S.", role: "Director, Urban Homes", quote: "We used to be nowhere on Google. Now we show up first. The phone hasn't stopped ringing." }
];

export const processSteps = [
    { title: "Discovery", desc: "First, we sit down and understand your business, your customers, and what you want to achieve." },
    { title: "Strategy", desc: "Then we create a clear plan — what we'll do, when, and what results to expect." },
    { title: "Execution", desc: "Our team gets to work — running ads, posting content, building your website, whatever's needed." },
    { title: "Optimization", desc: "We keep an eye on the numbers and make things better every week so your money works harder." }
];

export const faqs = [
    { q: "Do you guarantee results?", a: "Honestly, no one can guarantee exact numbers — anyone who does is not being truthful. But we've helped 95% of our clients grow, and we'll show you exactly what we're doing every step of the way." },
    { q: "How long do I need to sign up for?", a: "We usually suggest 3 months so we can show you real results. But if you'd rather go month-by-month, that works too." },
    { q: "How soon will I start getting leads?", a: "With ads, you can start getting calls within 2 days. SEO takes longer — usually 3 to 6 months — but the results last much longer." },
    { q: "Is this only for big companies?", a: "Not at all! We love working with small businesses and startups. We have packages made just for you." }
];


export const latestBlogs = blogData;
