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

export const servicesData = [
    { title: "Google SEO", icon: <img src={seoIcon} alt="SEO" style={{ width: "60px", height: "60px" }} />, gist: "We optimize your site's DNA to rank higher and stay there.", img: seoServiceImg, page: "service_seo" },
    { title: "Google Ads", icon: <img src={adsIcon} alt="Ads" style={{ width: "60px", height: "60px" }} />, gist: "High-intent campaigns designed to maximize leads and ROI.", img: googleAdsImg, page: "service_ads" },
    { title: "Meta Ads", icon: <img src={metaIcon} alt="Meta" style={{ width: "60px", height: "60px" }} />, gist: "Thumb-stopping visuals that turn likes into loyal customers.", img: socialMediaImg, page: "service_social" },
    { title: "Social Media", icon: <img src={socialIcon} alt="Social" style={{ width: "60px", height: "60px" }} />, gist: "Humanized content that keeps your community engaged 24/7.", img: socialMediaImg, page: "service_social" },
    { title: "GMB Local", icon: <img src={gmbIcon} alt="GMB" style={{ width: "60px", height: "60px" }} />, gist: "Optimize your map presence to dominate 'near me' searches.", img: gmbServiceImg, page: "service_gmb" },
    { title: "React Dev", icon: <img src={reactIcon} alt="React" style={{ width: "60px", height: "60px" }} />, gist: "Sleek, fast, and SEO-friendly websites built for performance.", img: webDevImg, page: "service_web" }
];

export const detailedServicesData: any = {
    "service_seo": {
        title: "Search Engine Optimization (SEO)",
        desc: "We don't just optimize for algorithms; we optimize for people who are searching for exactly what you offer. Our approach goes beyond basic keyword stuffing. We build a comprehensive strategy that includes technical audits to speed up your site, high-quality content that establishes your authority, and a backlink profile that signals trust to Google. The result? Sustainable, long-term organic traffic that doesn't disappear when you stop paying for ads.",
        tags: ["On-Page Excellence", "Technical SEO Audits", "Content Strategy", "Authority Building"],
        color: "#22c55e",
        img: seoServiceImg,
        benefits: ["Higher Rankings", "More Organic Traffic", "Better User Experience", "Long-term ROI"]
    },
    "service_gmb": {
        title: "Google My Business (GMB) Optimization",
        desc: "For local businesses, your GMB profile is your new storefront. We take complete ownership of your presence on Google Maps. From setting up and verifying your profile to managing reviews and posting weekly updates, we ensure you dominate local search results. We help you turn 'near me' searches into phone calls and foot traffic, keeping your business visible and trustworthy in your local community.",
        tags: ["Profile Setup & Verification", "Review Management", "Weekly Posts & Updates", "Local SEO Dominance"],
        color: "#f97316",
        img: gmbServiceImg,
        benefits: ["Local Visibility", "More Walk-ins", "Trust Building", "Direct Calls"]
    },
    "service_ads": {
        title: "Performance Marketing (Google Ads)",
        desc: "Stop hoping for leads and start demanding them. Our Google Ads campaigns are precision-engineered to capture high-intent traffic—people who are ready to buy right now. We manage your budget like it's our own, constantly refining keywords, ad copy, and bidding strategies to lower your cost-per-acquisition. Whether it's Search, Display, or Shopping, we ensure every rupee spent contributes to your bottom line.",
        tags: ["Search & Display Ads", "Conversion Tracking", "ROI-Focused Bidding", "Negative Keyword Management"],
        color: "#ef4444",
        img: googleAdsImg,
        benefits: ["Instant Traffic", "High Intent Leads", "Measurable ROI", "Scalable Growth"]
    },
    "service_social": {
        title: "Social Media Branding & Management",
        desc: "Your brand needs to be more than just a logo; it needs a personality. We help you build a loyal community on platforms like Instagram and Facebook. Our team handles everything from crafting a stunning visual identity to writing engaging captions that spark conversations. We create content that resonates with your audience, turning passive scrollers into active followers and brand advocates.",
        tags: ["Visual Identity Design", "Community Engagement", "Reels & Content Creation", "Caption Writing"],
        color: "#eab308",
        img: socialMediaImg,
        benefits: ["Brand Awareness", "Community Loyalty", "Direct Engagement", "Viral Potential"]
    },
    "service_web": {
        title: "Web Design & Development",
        desc: "Your website is often the first interaction a customer has with your business. Make it count. We design and build custom websites that are not only visually striking but also lightning-fast and mobile-responsive. We focus on user experience (UX) to guide visitors seamlessly from their first click to a final purchase or inquiry. Your site will be your 24/7 digital salesperson, working tirelessly to convert traffic into leads.",
        tags: ["Custom UI/UX Design", "Mobile-first Development", "Speed Optimization", "Conversion Rate Optimization"],
        color: "#3b82f6",
        img: webDevImg,
        benefits: ["First Impressions", "24/7 Sales", "Mobile Ready", "Conversion Machine"]
    }
};

export const quizQuestions = [
    { q: "If your brand was a Mumbai snack, what would it be?", a: ["Vada Pav (Reliable)", "Sushi (Premium)", "Cutting Chai (Energetic)"] },
    { q: "How do you want your customers to feel?", a: ["Safe & Secure", "Inspired & Bold", "Understood & Friendly"] },
    { q: "What's your communication style?", a: ["Professional", "Witty & Playful", "Direct Hustle"] }
];

export const whyChooseUs = [
    { title: "Results Over Likes", desc: "We focus on leads and results, not just likes and traffic." },
    { title: "Transparent Process", desc: "Simple and transparent working process." },
    { title: "No Jargon", desc: "Clear communication with no technical confusion." },
    { title: "Tailored Strategy", desc: "Strategies tailored for your business goals." },
    { title: "Honest Pricing", desc: "Honest pricing with no hidden charges." },
    { title: "Growth Partner", desc: "We work like a growth partner, not just a service provider." }
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
    { name: "Rajesh K.", role: "CEO, TechFlow", quote: "Digi Udaan didn't just run ads; they built our entire sales pipeline. Revenue up 300% in 6 months." },
    { name: "Priya M.", role: "Founder, Glow Skincare", quote: "Finally an agency that understands brand aesthetics AND performance. Highly recommended!" },
    { name: "Amit S.", role: "Director, Urban Homes", quote: "Their SEO strategy is top-notch. We rank #1 for all our major keywords now." }
];

export const processSteps = [
    { title: "Discovery", desc: "We deep dive into your business, competitors, and goals." },
    { title: "Strategy", desc: "We craft a custom roadmap to hit your revenue targets." },
    { title: "Execution", desc: "Our team launches campaigns, builds assets, and drives traffic." },
    { title: "Optimization", desc: "We constantly tweak and test to lower costs and increase leads." }
];

export const faqs = [
    { q: "Do you guarantee results?", a: "We guarantee our work and strategy. While no one can control algorithms, our track record shows consistent growth for 95% of our clients." },
    { q: "What is your minimum contract period?", a: "We prefer 3-month contracts to show real results, but we also offer month-to-month options for specific services." },
    { q: "How fast will I see leads?", a: "With Google/Meta Ads, you can see leads in 48 hours. SEO takes 3-6 months to gain significant traction." },
    { q: "Do you work with small businesses?", a: "Yes! We have specific packages designed for startups and local businesses." }
];
