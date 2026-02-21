import React, { useState, useEffect, useRef } from "react";
import seoIcon from "./assets/seo-icon.svg";
import adsIcon from "./assets/ads-icon.svg";
import socialIcon from "./assets/social-icon.svg";
import metaIcon from "./assets/meta-icon.svg";
import gmbIcon from "./assets/gmb-icon.svg";
import reactIcon from "./assets/react-icon.svg";
import seoNewIcon from "./assets/icons/seo-new.png";
import adsNewIcon from "./assets/icons/ads-new.png";
import gmbNewIcon from "./assets/icons/gmb-new.png";
import icon3 from "./assets/icons/icon3.png";
import icon4 from "./assets/icons/icon4.png";
import webNewIcon from "./assets/icons/web-new.png";
import seoServiceImg from "./assets/seo-service.png";

import gmbServiceImg from "./assets/gmb-service.png";

import googleAdsImg from "./assets/google-ads-service.png";
import socialMediaImg from "./assets/social-media-service.png";
import webDevImg from "./assets/web-dev-service.png";
import servicesHeroVideo from "./assets/videos/services-hero.mp4";
import pricingHeroVideo from "./assets/videos/pricing-hero.mp4";
import homeHeroVideo from "./assets/videos/home-hero.mp4";

// --- PRICING DATA ---
const pricingData: any = {
  pricing_seo: {
    title: "Google SEO",
    icon: seoNewIcon,
    desc: "Dominate search results and drive organic traffic that converts.",
    features: ["Custom Strategy", "Keyword Research", "On-Page Optimization", "Technical Audit", "Content Strategy", "Monthly Reporting"],
    pkgs: [
      {
        name: "SEO Starter (Local Visibility)",
        price: "₹7,500/mo",
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
        price: "₹9,500/mo",
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
        price: "₹15,000/mo",
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
        price: "₹9,500/mo",
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
        price: "₹15,000/mo",
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

// --- DATA ARRAYS & CONSTANTS ---
const servicesData = [
  { title: "Google SEO", icon: <img src={seoIcon} alt="SEO" style={{ width: "60px", height: "60px" }} />, gist: "We optimize your site’s DNA to rank higher and stay there." },
  { title: "Google Ads", icon: <img src={adsIcon} alt="Ads" style={{ width: "60px", height: "60px" }} />, gist: "High-intent campaigns designed to maximize leads and ROI." },
  { title: "Meta Ads", icon: <img src={metaIcon} alt="Meta" style={{ width: "60px", height: "60px" }} />, gist: "Thumb-stopping visuals that turn likes into loyal customers." },
  { title: "Social Media", icon: <img src={socialIcon} alt="Social" style={{ width: "60px", height: "60px" }} />, gist: "Humanized content that keeps your community engaged 24/7." },
  { title: "GMB Local", icon: <img src={gmbIcon} alt="GMB" style={{ width: "60px", height: "60px" }} />, gist: "Optimize your map presence to dominate 'near me' searches." },
  { title: "React Dev", icon: <img src={reactIcon} alt="React" style={{ width: "60px", height: "60px" }} />, gist: "Sleek, fast, and SEO-friendly websites built for performance." }
];

const detailedServicesData: any = {
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

const quizQuestions = [
  { q: "If your brand was a Mumbai snack, what would it be?", a: ["Vada Pav (Reliable)", "Sushi (Premium)", "Cutting Chai (Energetic)"] },
  { q: "How do you want your customers to feel?", a: ["Safe & Secure", "Inspired & Bold", "Understood & Friendly"] },
  { q: "What's your communication style?", a: ["Professional", "Witty & Playful", "Direct Hustle"] }
];

const whyChooseUs = [
  { title: "Results Over Likes", desc: "We focus on leads and results, not just likes and traffic." },
  { title: "Transparent Process", desc: "Simple and transparent working process." },
  { title: "No Jargon", desc: "Clear communication with no technical confusion." },
  { title: "Tailored Strategy", desc: "Strategies tailored for your business goals." },
  { title: "Honest Pricing", desc: "Honest pricing with no hidden charges." },
  { title: "Growth Partner", desc: "We work like a growth partner, not just a service provider." }
];

const whoBenefits = [
  "Local service businesses",
  "Startups and small companies",
  "Real estate & construction firms",
  "Clinics, gyms, and professionals",
  "Restaurants and retail businesses"
];

const marqueeKeywords = ["GROWTH", "STRATEGY", "ROI", "LEADS", "BRANDING", "SEO", "PPC", "DIGITAL", "SCALE", "REVENUE", "MUMBAI"];

// --- NEW DATA FOR PREMIUM SECTIONS ---

const testimonials = [
  { name: "Rajesh K.", role: "CEO, TechFlow", quote: "Digi Udaan didn't just run ads; they built our entire sales pipeline. Revenue up 300% in 6 months." },
  { name: "Priya M.", role: "Founder, Glow Skincare", quote: "Finally an agency that understands brand aesthetics AND performance. Highly recommended!" },
  { name: "Amit S.", role: "Director, Urban Homes", quote: "Their SEO strategy is top-notch. We rank #1 for all our major keywords now." }
];

const processSteps = [
  { title: "Discovery", desc: "We deep dive into your business, competitors, and goals." },
  { title: "Strategy", desc: "We craft a custom roadmap to hit your revenue targets." },
  { title: "Execution", desc: "Our team launches campaigns, builds assets, and drives traffic." },
  { title: "Optimization", desc: "We constantly tweak and test to lower costs and increase leads." }
];

const faqs = [
  { q: "Do you guarantee results?", a: "We guarantee our work and strategy. While no one can control algorithms, our track record shows consistent growth for 95% of our clients." },
  { q: "What is your minimum contract period?", a: "We prefer 3-month contracts to show real results, but we also offer month-to-month options for specific services." },
  { q: "How fast will I see leads?", a: "With Google/Meta Ads, you can see leads in 48 hours. SEO takes 3-6 months to gain significant traction." },
  { q: "Do you work with small businesses?", a: "Yes! We have specific packages designed for startups and local businesses." }
];

// --- COMPONENTS ---

// @ts-expect-error - component reserved for future use
const Typewriter = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}<span className="cursor-blink">|</span></span>;
};

const Navbar = ({ colors, currentPage, setCurrentPage }: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{
        display: "flex", justifyContent: "space-between", padding: "20px 8%", position: "fixed", width: "100%", top: 0, zIndex: 1000,
        background: colors.bg, backdropFilter: "blur(10px)", boxSizing: "border-box", borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ fontWeight: "800", color: colors.accent, cursor: "pointer", fontSize: "20px" }} onClick={() => handleNav("home")}>Digi Udaan</div>
        <div className="desktop-nav">
          {navLinks.map(link => (
            <span key={link.id} style={{ cursor: "pointer", fontSize: "14px", fontWeight: "600", color: (currentPage === link.id || (link.id === 'pricing' && currentPage.startsWith('pricing'))) ? colors.accent : colors.subText }} onClick={() => handleNav(link.id)}>{link.label}</span>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <button key={link.id} className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`} onClick={() => handleNav(link.id)}>{link.label}</button>
        ))}
      </div>
    </>
  );
};

const PricingHub = ({ colors, setCurrentPage }: any) => (
  <div style={{ paddingTop: "120px" }}>

    {/* Hero Section with Video */}
    <section style={{ position: "relative", height: "60vh", minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "80px" }}>
      <video autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}>
        <source src={pricingHeroVideo} type="video/mp4" />
      </video>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 8%" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "800", marginBottom: "20px", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
          Packages & <span style={{ color: colors.accent }}>Pricing</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "0 auto", textShadow: "0 2px 10px rgba(0,0,0,0.8)", fontWeight: "500" }}>
          Transparent pricing for results-driven marketing. Choose the service that fits your growth goals.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", background: `linear-gradient(to top, ${colors.bg}, transparent)`, zIndex: 2 }} />
    </section>

    <div style={{ padding: "0 8% 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {Object.entries(pricingData).map(([key, data]: any) => (
          <div key={key} style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}`, display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center", alignItems: "center" }}>
            <div>
              <img src={data.icon} alt={data.title} style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>{data.title}</h3>
              <p style={{ color: colors.subText, marginBottom: "30px", lineHeight: "1.6" }}>{data.desc}</p>
            </div>
            <button onClick={() => { setCurrentPage(key); window.scrollTo(0, 0); }} style={{ width: "100%", padding: "15px", borderRadius: "12px", border: `1px solid ${colors.accent}`, background: "transparent", color: colors.text, fontWeight: "600", cursor: "pointer", transition: "0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.color = "white"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.text; }}>
              View Packages
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PricingDetail = ({ colors, currentPage, setCurrentPage }: any) => {
  const data = pricingData[currentPage];
  if (!data) return <div>Data not found</div>;

  const handleSelectPlan = (pkgName: string, pkgPrice: string) => {
    (window as any).__contactPrefill = `I'm interested in the "${pkgName}" plan (${pkgPrice}) from ${data.title}. Please share more details.`;
    setCurrentPage('contact');
  };

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", paddingLeft: "8%", paddingRight: "8%" }}>
      <button onClick={() => setCurrentPage("pricing")} style={{ background: "none", border: "none", color: colors.subText, cursor: "pointer", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", fontSize: "16px" }}>← Back to Pricing</button>
      <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px" }}>{data.title} <span style={{ color: colors.accent }}>Packages</span></h1>
      <p style={{ fontSize: "18px", color: colors.subText, marginBottom: "40px", maxWidth: "700px" }}>{data.desc}</p>

      <div style={{ marginBottom: "60px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>Key Features</h3>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {data.features.map((f: string, i: number) => (
            <span key={i} style={{ padding: "8px 20px", background: colors.card, borderRadius: "100px", border: `1px solid ${colors.border}`, fontSize: "14px" }}>{f}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
        {data.pkgs.map((pkg: any, i: number) => (
          <div key={i} style={{ background: i === 1 ? "rgba(139, 92, 246, 0.1)" : colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${i === 1 ? colors.accent : colors.border}`, position: "relative", display: "flex", flexDirection: "column" }}>
            {i === 1 && <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: colors.accent, padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: "700" }}>RECOMMENDED</div>}
            <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>{pkg.name}</h3>
            <div style={{ fontSize: "32px", fontWeight: "800", marginBottom: "30px", color: colors.accent }}>{pkg.price}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "30px", display: "flex", flexDirection: "column", gap: "15px", flex: 1 }}>
              {pkg.details.map((d: string, di: number) => (
                <li key={di} style={{ display: "flex", gap: "10px", alignItems: "center", color: colors.subText }}>
                  <span style={{ color: colors.accent }}>✓</span> {d}
                </li>
              ))}
            </ul>
            <button onClick={() => handleSelectPlan(pkg.name, pkg.price)} style={{ marginTop: "auto", width: "100%", padding: "15px", borderRadius: "12px", border: "none", background: i === 1 ? colors.accent : "rgba(255,255,255,0.1)", color: "white", fontWeight: "700", cursor: "pointer" }}>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const avatarColors = ["#22c55e", "#ef4444", "#3b82f6", "#eab308", "#ec4899"];

const Testimonials = ({ colors }: { colors: any }) => (
  <section style={{ padding: "80px 8%", background: colors.card }}>
    <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "60px", textAlign: "center" }}>What Our <span style={{ color: colors.accent }}>Partners Say</span></h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: `1px solid ${colors.border}` }}>
          <div style={{ fontSize: "40px", color: colors.accent, marginBottom: "20px", fontFamily: "serif" }}>"</div>
          <p style={{ fontSize: "18px", color: colors.subText, lineHeight: "1.6", marginBottom: "30px", fontStyle: "italic" }}>{t.quote}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: avatarColors[i % avatarColors.length], display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px", color: "white", flexShrink: 0 }}>
              {t.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <div style={{ fontWeight: "700", fontSize: "18px" }}>{t.name}</div>
              <div style={{ fontSize: "14px", color: colors.accent }}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ProcessTimeline = ({ colors }: { colors: any }) => (
  <section style={{ padding: "80px 8%" }}>
    <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "60px", textAlign: "center" }}>Our <span style={{ color: colors.accent }}>Process</span></h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", position: "relative" }}>
      {processSteps.map((step, i) => (
        <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ width: "60px", height: "60px", background: colors.accent, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontWeight: "800", fontSize: "24px", color: "white" }}>{i + 1}</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>{step.title}</h3>
          <p style={{ fontSize: "15px", color: colors.subText, lineHeight: "1.6" }}>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const FAQ = ({ colors }: { colors: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "80px 8%", background: "rgba(255,255,255,0.01)" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "60px", textAlign: "center" }}>Frequently Asked <span style={{ color: colors.accent }}>Questions</span></h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ background: colors.card, borderRadius: "16px", border: `1px solid ${colors.border}`, overflow: "hidden" }}>
            <div
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{ padding: "24px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "600", fontSize: "18px" }}
            >
              {f.q}
              <span style={{ color: colors.accent }}>{openIndex === i ? "−" : "+"}</span>
            </div>
            {openIndex === i && (
              <div style={{ padding: "0 24px 24px", color: colors.subText, lineHeight: "1.6" }}>
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Marquee = ({ colors }: { colors: any }) => (
  <div className="marquee-container" style={{ padding: "40px 0", background: colors.card, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
    <div className="marquee-content">
      {marqueeKeywords.concat(marqueeKeywords).concat(marqueeKeywords).concat(marqueeKeywords).map((word, i) => (
        <span key={i} className="neon-text" style={{ fontSize: "40px", fontWeight: "800", margin: "0 20px" }}>{word}</span>
      ))}
    </div>
  </div>
);

const AboutPage = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => (
  <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
    <section style={{ padding: "0 8% 80px", textAlign: "center" }}>
      <h1 style={{ fontSize: "56px", fontWeight: "800", marginBottom: "20px" }}>More Than Just a <span style={{ color: colors.accent }}>Marketing Agency.</span></h1>
      <p style={{ fontSize: "20px", color: colors.subText, maxWidth: "800px", margin: "0 auto" }}>
        We are your strategic growth partners. In a world of noise, we help your brand find its voice and its audience.
      </p>
    </section>

    <section style={{ padding: "0 8% 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
      <div>
        <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "30px" }}>Our Mission</h2>
        <p style={{ fontSize: "18px", color: colors.subText, lineHeight: "1.8", marginBottom: "20px" }}>
          At Digi Udaan, we believe that every business, regardless of its size, deserves world-class digital representation. We started with a simple goal: to bridge the gap between complex digital strategies and business owners who just want results.
        </p>
        <p style={{ fontSize: "18px", color: colors.subText, lineHeight: "1.8" }}>
          We don't believe in vanity metrics. Likes are good, but leads are better. Revenue is best. Our entire methodology is built around one thing: <strong>Growth.</strong>
        </p>
      </div>
      <div style={{ background: colors.card, padding: "40px", borderRadius: "32px", border: `1px solid ${colors.border}` }}>
        <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: colors.accent }}>The Digi Udaan Difference</h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            "We speak your language, not jargon.",
            "We are transparent about where every rupee goes.",
            "We focus on long-term brand building, not just quick wins.",
            "We treat your business like it's our own."
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px" }}>
              <span style={{ color: colors.accent }}>✓</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section style={{ padding: "80px 8%", background: colors.card }}>
      <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "60px", textAlign: "center" }}>Why Clients Trust Us</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        {[
          { title: "Data-Driven Decisions", desc: "We don't guess. We analyze, test, and optimize based on real data to ensure maximum ROI." },
          { title: "Full-Funnel Approach", desc: "From brand awareness to final conversion, we nurture your customers at every stage of their journey." },
          { title: "Creative Excellence", desc: "Strategy needs style. Our designs and copy are crafted to capture attention and inspire action." }
        ].map((item, i) => (
          <div key={i} style={{ padding: "30px", background: "rgba(255,255,255,0.02)", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px", color: colors.accent }}>{item.title}</h3>
            <p style={{ color: colors.subText, lineHeight: "1.6" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section style={{ padding: "80px 8%", textAlign: "center" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "30px" }}>Ready to write your success story?</h2>
      <button onClick={() => setCurrentPage('contact')} style={{ padding: "18px 40px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}>Let's Talk Business</button>
    </section>
  </div>
);

const blogData: any = {
  "blog_zero_click": {
    title: "The Rise of Zero-Click Searches: How to Adapt Your SEO",
    date: "Feb 6, 2026",
    category: "SEO",
    views: "1.2k",
    image: seoServiceImg, // Reusing existing assets for now
    desc: "Google's AI Overviews are changing the game. Learn why users aren't clicking and how to still get visible.",
    content: `
      <p>Search engines are evolving. With the introduction of AI Overviews (formerly SGE), Google is answering more queries directly on the search results page. This means fewer clicks to websites, a phenomenon known as "Zero-Click Searches".</p>
      <h3>Why is this happening?</h3>
      <p>Users want instant answers. AI provides summaries, definitions, and quick tips without requiring them to visit multiple sites. For businesses, this feels like a threat to organic traffic.</p>
      <h3>How to Adapt</h3>
      <ul>
        <li><strong>Optimize for Featured Snippets:</strong> Structure your content with clear headings, lists, and direct answers to common questions.</li>
        <li><strong>Focus on Brand Authority:</strong> If users see your brand mentioned in AI summaries, they are more likely to search for you directly.</li>
        <li><strong>Create "Unsummarizable" Content:</strong> AI is great at facts, but bad at unique data, personal stories, and deep dives. Create content that requires a human perspective.</li>
      </ul>
      <p>The goal isn't just traffic anymore; it's visibility and influence.</p>
    `
  },
  "blog_ai_2026": {
    title: "AI in 2026: Why Chatbots Are Your New Best Friend",
    date: "Feb 5, 2026",
    category: "Trends",
    views: "980",
    image: webDevImg,
    desc: "From customer support to personalized recommendations, AI chatbots are becoming essential for business growth.",
    content: `
      <p>Remember when chatbots were clunky and frustrating? Those days are gone. In 2026, AI chatbots are indistinguishable from human support agents in many contexts.</p>
      <h3>The 24/7 Salesperson</h3>
      <p>Modern chatbots don't just answer FAQs; they guide users through the sales funnel. They can recommend products based on browsing history, schedule appointments, and even process payments directly within the chat window.</p>
      <h3>Personalization at Scale</h3>
      <p>AI analyzes user data in real-time to tailor conversations. If a returning customer visits your site, the bot greets them by name and asks about their previous purchase. This level of personalization drives loyalty and sales.</p>
      <p>Implementing an AI chatbot is no longer a "nice-to-have"; it's a competitive necessity.</p>
    `
  },
  "blog_short_video": {
    title: "Short-Form Video: The King of Engagement",
    date: "Feb 2, 2026",
    category: "Social Media",
    views: "850",
    image: socialMediaImg,
    desc: "TikTok and Reels are dominating attention spans. Here's how to create content that stops the scroll.",
    content: `
      <p>Attention spans are shorter than ever, and short-form video is the only format keeping up. Platforms like Instagram Reels, TikTok, and YouTube Shorts are prioritized by algorithms because they keep users glued to screens.</p>
      <h3>The Hooks That Work</h3>
      <p>You have 3 seconds to capture attention. Start with a question, a shocking stat, or a visual disruption. "Stop scrolling!" isn't enough; you need to deliver value immediately.</p>
      <h3>Authenticity Wins</h3>
      <p>Highly produced videos are out; raw, authentic content is in. Users trust faces and real voices over polished corporate ads. Show behind-the-scenes footage, customer testimonials, and quick tips.</p>
      <p>If you aren't creating video content, you aren't existing on social media in 2026.</p>
    `
  },
  "blog_personalization": {
    title: "Hyper-Personalization: Beyond 'Hi [Name]'",
    date: "Jan 28, 2026",
    category: "Strategy",
    views: "720",
    image: gmbServiceImg,
    desc: "Consumers expect brands to know what they want before they do. Data analytics is the key.",
    content: `
      <p>Generic marketing is dead. Today's consumers expect brands to anticipate their needs. Hyper-personalization uses data, analytics, and AI to deliver more relevant experiences.</p>
      <h3>Predictive Analytics</h3>
      <p>By analyzing past behavior, businesses can predict what a customer will buy next. Netflix does this with shows; Amazon does it with products. You can do it with email marketing and website offers.</p>
      <h3>Dynamic Website Content</h3>
      <p>Imagine a website that changes based on who is viewing it. A first-time visitor sees a "Welcome" video, while a returning customer sees a "Welcome Back" discount code. This is possible today and dramatically increases conversion rates.</p>
      <p>Treat your customers like individuals, not segments.</p>
    `
  }
};

const BlogDetailPage = ({ colors, currentPage, setCurrentPage }: any) => {
  const blogId = currentPage;
  const data = blogData[blogId];

  if (!data) return <div style={{ paddingTop: "120px", paddingBottom: "80px", textAlign: "center", color: colors.subText }}>Article not found</div>;

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 8%" }}>
        <button
          onClick={() => setCurrentPage("blog")}
          style={{
            background: "none",
            border: "none",
            color: colors.subText,
            cursor: "pointer",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          ← Back to Blog
        </button>

        <span style={{ color: colors.accent, fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", fontSize: "14px", display: "block", marginBottom: "15px" }}>
          {data.category}
        </span>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", marginBottom: "20px", lineHeight: "1.2" }}>
          {data.title}
        </h1>

        <div style={{ display: "flex", gap: "20px", color: colors.subText, fontSize: "14px", marginBottom: "40px", borderBottom: `1px solid ${colors.border}`, paddingBottom: "30px" }}>
          <span>📅 {data.date}</span>
          <span>👁 {data.views} views</span>
        </div>

        <div style={{ marginBottom: "40px", borderRadius: "20px", overflow: "hidden", border: `1px solid ${colors.border}` }}>
          <img src={data.image} alt={data.title} style={{ width: "100%", height: "auto", display: "block", maxHeight: "400px", objectFit: "cover" }} />
        </div>

        <div
          style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.9)" }}
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="blog-content"
        />

        <style>{`
          .blog-content h3 { font-size: 24px; font-weight: 700; margin-top: 40px; margin-bottom: 20px; color: ${colors.accent}; }
          .blog-content p { margin-bottom: 20px; }
          .blog-content ul { margin-bottom: 20px; padding-left: 20px; }
          .blog-content li { margin-bottom: 10px; }
          .blog-content strong { color: white; }
        `}</style>

        <div style={{ marginTop: "60px", padding: "40px", background: colors.card, borderRadius: "24px", border: `1px solid ${colors.border}`, textAlign: "center" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>Enjoyed this article?</h3>
          <p style={{ color: colors.subText, marginBottom: "25px" }}>Subscribe to our newsletter for more insights delivered to your inbox.</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", maxWidth: "400px", margin: "0 auto" }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: "12px", borderRadius: "100px", border: "none", background: "rgba(255,255,255,0.1)", color: "white", outline: "none", paddingLeft: "20px" }} />
            <button style={{ padding: "12px 24px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}>Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  );
};


const BlogPage = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => {
  const trendingSearches = ["AI Marketing 2026", "Zero-Click SEO", "Short-Form Video ROI", "Voice Search Optimization", "Hyper-Personalization"];
  // Using blogData keys to map
  const featuredBlogs = [
    { id: "blog_zero_click", ...blogData["blog_zero_click"] },
    { id: "blog_ai_2026", ...blogData["blog_ai_2026"] },
    { id: "blog_short_video", ...blogData["blog_short_video"] },
    { id: "blog_personalization", ...blogData["blog_personalization"] }
  ];

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", paddingLeft: "8%", paddingRight: "8%", display: "flex", gap: "60px", flexDirection: "row" }}>

      {/* Sidebar - Trending Searches */}
      <div style={{ width: "300px", flexShrink: 0, display: "none", flexDirection: "column", gap: "30px" }} className="blog-sidebar">
        <div style={{ background: colors.card, padding: "30px", borderRadius: "24px", border: `1px solid ${colors.border}` }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px", color: colors.accent }}>Trending Searches 📈</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
            {trendingSearches.map((s, i) => (
              <li key={i} style={{ fontSize: "16px", color: colors.subText, cursor: "pointer", transition: "0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.accent} onMouseLeave={(e) => e.currentTarget.style.color = colors.subText}>
                #{s}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "30px", borderRadius: "24px", border: `1px solid ${colors.accent}`, textAlign: "center" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "10px" }}>Subscribe</h3>
          <p style={{ color: colors.subText, fontSize: "14px", marginBottom: "20px" }}>Get the latest digital trends delivered to your inbox.</p>
          <input type="email" placeholder="Your work email" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${colors.border}`, background: "rgba(255,255,255,0.05)", color: "white", marginBottom: "15px" }} />
          <button style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}>Join Now</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "20px" }}>Latest <span style={{ color: colors.accent }}>Insights</span></h1>
        <p style={{ fontSize: "18px", color: colors.subText, marginBottom: "60px" }}>Expert perspective on the future of digital marketing.</p>

        <div style={{ display: "grid", gap: "40px" }}>
          {featuredBlogs.map((b, i) => (
            <div key={i} style={{ padding: "40px", background: colors.card, borderRadius: "24px", border: `1px solid ${colors.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", fontSize: "14px", color: colors.subText }}>
                <span style={{ color: colors.accent, fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>{b.category}</span>
                <span>{b.date} • {b.views} views</span>
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>{b.title}</h2>
              <p style={{ fontSize: "16px", color: colors.subText, lineHeight: "1.7", marginBottom: "25px" }}>{b.desc}</p>
              <button onClick={() => { setCurrentPage(b.id); window.scrollTo(0, 0); }} style={{ background: "none", border: "none", padding: 0, color: colors.text, fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
                Read Full Article <span style={{ color: colors.accent }}>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Style needed to show sidebar on desktop */}
      <style>{`
        @media (min-width: 900px) {
          .blog-sidebar { display: flex !important; }
        }
      `}</style>

    </div>
  );
};

const ServicesPage = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => (
  <div style={{ paddingTop: "120px" }}>
    <section style={{ position: "relative", height: "80vh", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "100px" }}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}>
        <source src={servicesHeroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for Readability */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 8%" }}>
        <h1 style={{ fontSize: "72px", fontWeight: "800", marginBottom: "24px", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
          Whatever You Need, <span style={{ color: colors.accent, textShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }}>We Got You.</span>
        </h1>
        <p style={{ fontSize: "24px", color: "rgba(255,255,255,0.9)", maxWidth: "800px", margin: "0 auto", textShadow: "0 2px 10px rgba(0,0,0,0.8)", fontWeight: "500" }}>
          From getting found on Google to turning clicks into loyal customers, our full-stack digital services are designed to grow your business.
        </p>
      </div>

      {/* Gradient Fade at Bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", background: `linear-gradient(to top, ${colors.bg}, transparent)`, zIndex: 2 }} />
    </section>

    <div style={{ display: "flex", flexDirection: "column", gap: "100px", padding: "0 8% 120px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", padding: "0 8% 120px" }}>
        {Object.entries(detailedServicesData).map(([key, s]: any) => (
          <div
            key={key}
            onClick={() => { setCurrentPage(key); window.scrollTo(0, 0); }}
            style={{
              background: colors.card, borderRadius: "24px", border: `1px solid ${colors.border}`, overflow: "hidden",
              cursor: "pointer", transition: "transform 0.3s, border-color 0.3s", display: "flex", flexDirection: "column"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.borderColor = s.color; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = colors.border; }}
          >
            <div style={{ height: "200px", background: `linear-gradient(135deg, ${s.color}20, transparent)`, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
              <img src={s.img} alt={s.title} style={{ height: "100%", width: "auto", objectFit: "contain", filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.3))" }} />
            </div>
            <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>{s.title}</h2>
              <p style={{ fontSize: "16px", color: colors.subText, lineHeight: "1.6", marginBottom: "20px", flex: 1 }}>{s.desc.substring(0, 120)}...</p>
              <div style={{ display: "flex", alignItems: "center", color: s.color, fontWeight: "700", gap: "10px" }}>
                Learn More <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section style={{ padding: "80px 8%", background: colors.card, textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "30px" }}>Ready to scale?</h2>
        <button onClick={() => alert("Contact form coming soon!")} style={{ padding: "18px 40px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer" }}>Get a Proposal</button>
      </section>

      <footer style={{ padding: "40px 8%", textAlign: "center", borderTop: `1px solid ${colors.border}`, fontSize: "14px", color: colors.subText }}>© 2026 Digi Udaan Marketing Mumbai.</footer>
    </div>
  </div >
);

const ServiceDetailPage = ({ colors, currentPage, setCurrentPage }: any) => {
  const serviceId = currentPage;
  const data = detailedServicesData[serviceId];


  if (!data) return <div style={{ paddingTop: "120px", paddingBottom: "80px", textAlign: "center", color: colors.subText }}>Service not found</div>;

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ padding: "0 8% 40px" }}>
        <button
          onClick={() => setCurrentPage("services")}
          style={{
            background: "none",
            border: "none",
            color: colors.subText,
            cursor: "pointer",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          ← Back to Services
        </button>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "24px", lineHeight: "1.2" }}>
              {data.title}
            </h1>
            <p style={{ fontSize: "18px", color: colors.subText, lineHeight: "1.8", marginBottom: "32px" }}>
              {data.desc}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
              {data.tags.map((t: string, i: number) => (
                <span
                  key={i}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "100px",
                    background: colors.card,
                    border: `1px solid ${colors.border}`,
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage("contact")}
              style={{
                padding: "16px 36px",
                borderRadius: "100px",
                border: "none",
                background: colors.accent,
                color: "white",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Get a Proposal
            </button>
          </div>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "32px",
                background: `linear-gradient(135deg, ${data.color}20, transparent)`,
                border: `1px solid ${data.color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={data.img}
                alt={data.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "80px 8%", background: colors.card }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
          Key <span style={{ color: colors.accent }}>Benefits</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {data.benefits.map((benefit: string, index: number) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: "30px",
                borderRadius: "20px",
                border: `1px solid ${colors.border}`,
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: `${data.color}20`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: data.color,
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                ✓
              </div>
              <p style={{ fontSize: "18px", fontWeight: "600", margin: 0 }}>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 8%", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "30px" }}>Ready to scale?</h2>
        <button
          onClick={() => setCurrentPage('contact')}
          style={{
            padding: "18px 40px",
            borderRadius: "100px",
            border: "none",
            background: colors.accent,
            color: "white",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Let's Talk Business
        </button>
      </section>
    </div>
  );
};

// --- CHATBOT COMPONENT ---

const Chatbot = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, sender: 'bot' | 'user', options?: string[] }[]>([
    { text: "Hi! I'm DigiBot 🤖. How can I help you grow your business today?", sender: 'bot', options: ["Explore Services", "Check Pricing", "Book a Free Audit", "Talk to a Human"] }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    handleOptionClick(inputValue.trim());
    setInputValue("");
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: option, sender: 'user' }]);
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      let botResponse = { text: "", sender: 'bot' as 'bot', options: [] as string[] };
      const lowerInput = option.toLowerCase();

      // Priority: Check EXACT matches first (for button clicks)
      switch (option) {
        case "Explore Services":
          botResponse = { text: "Here is our full range of services to help you grow:", sender: 'bot', options: ["Google SEO", "Google Ads", "Meta Ads", "GMB Optimization", "Social Media Handling", "Website Designing"] };
          break;
        case "Check Pricing":
          botResponse = { text: "Here is our standard pricing range:\n\n• SEO: ₹7,500 - ₹15,000/mo\n• Google Ads Fee: ₹6,000 - ₹15,000/mo\n• Meta Ads Fee: ₹6,000 - ₹18,000/mo\n• Social Media: ₹5,500/mo\n• Web Design: ₹6,500 - ₹30,000\n\nTap below to see full package details.", sender: 'bot', options: ["SEO Packages", "Ads Packages", "Web Design Packages", "Social Media Packages"] };
          break;
        case "Book a Free Audit":
          botResponse = { text: "Excellent choice! A site audit is the first step to growth. I've noted your interest.", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "Talk to a Human":
          botResponse = { text: "You can reach our team at contact@digiudaan.com or call +91-9876543210.", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "Back to Menu":
          botResponse = { text: "How else can I help you?", sender: 'bot', options: ["Explore Services", "Check Pricing", "Book a Free Audit", "Talk to a Human"] };
          break;

        // Service specific
        case "Google SEO":
        case "SEO":
          botResponse = { text: "SEO is our specialty. We help you rank higher and get organic traffic.", sender: 'bot', options: ["View SEO Pricing", "Back to Menu"] };
          break;
        case "Google Ads":
          botResponse = { text: "Google Ads get you immediate leads. We optimize for high ROI.", sender: 'bot', options: ["View Ads Pricing", "Back to Menu"] };
          break;
        case "Meta Ads":
          botResponse = { text: "Scale your brand on Facebook & Instagram with high-converting creatives.", sender: 'bot', options: ["View Meta Ads Pricing", "Back to Menu"] };
          break;
        case "Social Media Handling":
        case "Social Media":
          botResponse = { text: "Build a brand that people love. We handle content and community.", sender: 'bot', options: ["View Social Pricing", "Back to Menu"] };
          break;
        case "Website Designing":
        case "Web Design":
          botResponse = { text: "Your website is your 24/7 salesperson. We make it look great and convert better.", sender: 'bot', options: ["View Web Pricing", "Back to Menu"] };
          break;
        case "GMB Optimization":
          botResponse = { text: "Dominate local searches and get more calls from customers nearby.", sender: 'bot', options: ["View GMB Pricing", "Back to Menu"] };
          break;

        // Navigation triggers
        case "SEO Packages":
        case "View SEO Pricing":
          setCurrentPage('pricing');
          botResponse = { text: "I've taken you to our SEO pricing page.", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "Ads Packages":
        case "View Ads Pricing":
          setCurrentPage('pricing_google_ads');
          botResponse = { text: "Our Google Ads packages range from ₹6,000 to ₹15,000. Check them out!", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "View Meta Ads Pricing":
          setCurrentPage('pricing_meta_ads');
          botResponse = { text: "Our Meta Ads packages range from ₹6,000 to ₹18,000. Check them out!", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "Web Design Packages":
        case "View Web Pricing":
          setCurrentPage('pricing_web');
          botResponse = { text: "Our Web Design packages start from ₹6,000 to ₹30,000. Check them out!", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "Social Media Packages":
        case "View Social Pricing":
          setCurrentPage('pricing_social');
          botResponse = { text: "Our Social Media package is ₹5,500/month for 12 posts & 5 reels. You can customize the number of posts & reels as needed!", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "View GMB Pricing":
          setCurrentPage('pricing_gmb');
          botResponse = { text: "For GMB Optimization:\n• First Month (Setup + Maintenance): ₹5,000\n• Ongoing Maintenance: ₹3,000/month", sender: 'bot', options: ["Back to Menu"] };
          break;
        case "Read Blog":
          setCurrentPage('blog');
          botResponse = { text: "Opening our latest blog posts for you...", sender: 'bot', options: ["Back to Menu"] };
          break;

        default:
          // Fallback to keyword matching if no exact match found
          if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("budget") || lowerInput.includes("package")) {
            botResponse = { text: "Here is a quick overview of our budget ranges:\n\n• SEO starts from ₹7,500/mo\n• Google/Meta Ads fees from ₹6,000/mo\n• Social Media from ₹5,500/mo\n• Web Design from ₹6,500\n\nWhich service details would you like to see?", sender: 'bot', options: ["SEO Packages", "Ads Packages", "Web Design Packages", "Social Media Packages"] };
          } else if (lowerInput.includes("seo") || lowerInput.includes("search") || lowerInput.includes("rank")) {
            botResponse = { text: "SEO is our specialty! We help you rank #1 on Google. Would you like to check our pricing?", sender: 'bot', options: ["View SEO Pricing", "Back to Menu"] };
          } else if (lowerInput.includes("ad") || lowerInput.includes("ppc") || lowerInput.includes("google")) {
            botResponse = { text: "Our Google Ads campaigns are designed for high ROI. Ready to turn clicks into customers?", sender: 'bot', options: ["View Ads Pricing", "Back to Menu"] };
          } else if (lowerInput.includes("social") || lowerInput.includes("insta") || lowerInput.includes("facebook")) {
            botResponse = { text: "We build brands that people love. From reels to community management, we do it all.", sender: 'bot', options: ["View Social Pricing", "Back to Menu"] };
          } else if (lowerInput.includes("web") || lowerInput.includes("design") || lowerInput.includes("site")) {
            botResponse = { text: "Your website is your digital storefront. We make it fast, beautiful, and high-converting.", sender: 'bot', options: ["View Web Pricing", "Back to Menu"] };
          } else if (lowerInput.includes("audit") || lowerInput.includes("check")) {
            botResponse = { text: "A free site audit is a great way to start! I've noted your request.", sender: 'bot', options: ["Back to Menu"] };
          } else if (lowerInput.includes("human") || lowerInput.includes("talk") || lowerInput.includes("support") || lowerInput.includes("contact")) {
            botResponse = { text: "You can reach our team at contact@digiudaan.com or call +91-9876543210.", sender: 'bot', options: ["Back to Menu"] };
          } else if (lowerInput.includes("blog") || lowerInput.includes("news") || lowerInput.includes("trend")) {
            botResponse = { text: "Check out our latest insights on AI Marketing and SEO Trends in our Blog section.", sender: 'bot', options: ["Read Blog", "Back to Menu"] };
            // Add navigation logic for "Read Blog" button if needed, but for now it's just a suggestion
          } else if (lowerInput.includes("explore services") || lowerInput.includes("service") || lowerInput === "explore services") {
            botResponse = { text: "Here is our full range of services to help you grow:", sender: 'bot', options: ["Google SEO", "Google Ads", "Meta Ads", "GMB Optimization", "Social Media Handling", "Website Designing"] };
          } else {
            botResponse = { text: "I'm still learning! You can try asking about 'price', 'seo', or 'contact'.", sender: 'bot', options: ["Back to Menu"] };
          }
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed", bottom: "30px", right: "30px", width: "60px", height: "60px",
          background: colors.accent, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)", zIndex: 1000,
          transition: "transform 0.3s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        {isOpen ? <span style={{ fontSize: "24px" }}>✕</span> : <span style={{ fontSize: "30px" }}>💬</span>}
      </div>

      {isOpen && (
        <div style={{
          position: "fixed", bottom: "100px", right: "30px", width: "350px", height: "500px",
          background: "#0a0514", backdropFilter: "blur(20px)", borderRadius: "20px",
          border: `1px solid ${colors.border}`, boxShadow: "0 20px 50px rgba(0,0,0,0.5)", zIndex: 1000,
          display: "flex", flexDirection: "column", overflow: "hidden"
        }}>
          {/* Header */}
          <div style={{ padding: "20px", background: colors.accent, color: "white", display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ width: "40px", height: "40px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🤖</div>
            <div>
              <div style={{ fontWeight: "700", fontSize: "16px" }}>DigiBot</div>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>Online • AI Assistant</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: "20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.sender === 'bot' ? 'flex-start' : 'flex-end', maxWidth: "80%" }}>
                <div style={{
                  padding: "12px 16px", borderRadius: "12px",
                  background: m.sender === 'bot' ? "rgba(255,255,255,0.1)" : colors.accent,
                  color: "white", fontSize: "14px", lineHeight: "1.5",
                  borderTopLeftRadius: m.sender === 'bot' ? "4px" : "12px",
                  borderTopRightRadius: m.sender === 'user' ? "4px" : "12px"
                }}>
                  {m.text}
                </div>
                {m.sender === 'bot' && m.options && (
                  <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {m.options.map((opt, oi) => (
                      <button
                        key={oi}
                        onClick={() => handleOptionClick(opt)}
                        style={{
                          padding: "8px 12px", background: "transparent", border: `1px solid ${colors.accent}`,
                          borderRadius: "20px", color: colors.accent, fontSize: "12px", cursor: "pointer",
                          transition: "0.2s"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.accent; }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: "flex-start", padding: "10px 15px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", fontSize: "12px", color: colors.subText }}>
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ padding: "15px", background: "rgba(0,0,0,0.3)", borderTop: `1px solid ${colors.border}`, display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              style={{ flex: 1, background: "transparent", border: "none", color: "white", outline: "none", fontSize: "14px" }}
            />
            <button onClick={handleSend} style={{ background: colors.accent, border: "none", borderRadius: "8px", width: "32px", height: "32px", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- NEW HOMEPAGE COMPONENTS ---

const FeaturedCaseStudies = ({ colors }: { colors: any }) => (
  <section style={{ padding: "80px 8%" }}>
    <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>Proven Results</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
      {[
        {
          client: "TechStart Inc.",
          industry: "SaaS",
          metric: "300% ROI",
          desc: "Scaled lead generation through targeted LinkedIn ads and SEO content strategy.",
          tags: ["B2B", "PPC", "SEO"]
        },
        {
          client: "Urban Decor",
          industry: "E-Commerce",
          metric: "10k+ Leads",
          desc: "Revamped UX/UI and implemented automated email flows to recover abandoned carts.",
          tags: ["D2C", "Web Design", "Automation"]
        },
        {
          client: "Dr. A. Singh",
          industry: "Healthcare",
          metric: "#1 Ranking",
          desc: "Dominated local search for key medical terms, increasing patient appointments by 40%.",
          tags: ["Local SEO", "GMB", "Reputation"]
        }
      ].map((study, i) => (
        <div key={i} style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}`, transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            {study.tags.map((tag, t) => (
              <span key={t} style={{ fontSize: "12px", background: "rgba(139, 92, 246, 0.1)", color: colors.accent, padding: "4px 12px", borderRadius: "100px", fontWeight: "600" }}>{tag}</span>
            ))}
          </div>
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "5px" }}>{study.client}</h3>
          <p style={{ color: colors.subText, fontSize: "14px", marginBottom: "20px" }}>{study.industry}</p>
          <div style={{ fontSize: "36px", fontWeight: "800", color: colors.text, marginBottom: "15px" }}>{study.metric}</div>
          <p style={{ color: colors.subText, lineHeight: "1.6" }}>{study.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const BlogPreview = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => {
  const recentBlogs = Object.entries(blogData).slice(0, 3);

  return (
    <section style={{ padding: "80px 8%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800" }}>Latest Insights</h2>
        <button onClick={() => setCurrentPage('blog')} style={{ background: "none", border: "none", color: colors.accent, fontWeight: "600", cursor: "pointer", fontSize: "16px" }}>View All →</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {recentBlogs.map(([key, data]: any) => (
          <div key={key} style={{ background: colors.card, borderRadius: "24px", overflow: "hidden", border: `1px solid ${colors.border}`, display: "flex", flexDirection: "column" }}>
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img src={data.image} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
            </div>
            <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "12px", color: colors.accent, fontWeight: "600", marginBottom: "10px", textTransform: "uppercase" }}>{data.category}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px", lineHeight: "1.4" }}>{data.title}</h3>
              <p style={{ color: colors.subText, fontSize: "14px", lineHeight: "1.6", marginBottom: "20px", flex: 1 }}>{data.desc}</p>
              <button onClick={() => { setCurrentPage(key); window.scrollTo(0, 0); }} style={{ background: "none", border: "none", padding: 0, color: colors.text, fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
                Read Article <span style={{ color: colors.accent }}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CallToAction = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => (
  <section style={{ padding: "80px 8%", textAlign: "center", background: `linear-gradient(180deg, ${colors.bg} 0%, rgba(139, 92, 246, 0.1) 100%)`, borderTop: `1px solid ${colors.border}` }}>
    <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px" }}>Stop Guessing. Start Growing.</h2>
    <p style={{ fontSize: "20px", color: colors.subText, maxWidth: "600px", margin: "0 auto 40px" }}>
      Your competition is already optimizing. Don't get left behind.
    </p>
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
      <button onClick={() => setCurrentPage('contact')} style={{ padding: "18px 40px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer", fontSize: "18px", boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)" }}>
        Get Your Growth Plan
      </button>
      <button onClick={() => setCurrentPage('services')} style={{ padding: "18px 40px", borderRadius: "100px", border: `1px solid ${colors.border}`, background: "rgba(255,255,255,0.05)", color: colors.text, fontWeight: "700", cursor: "pointer", fontSize: "18px" }}>
        Explore Services
      </button>
    </div>
  </section>
);


const ContactPage = ({ colors }: { colors: any }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [prefill, setPrefill] = useState('');

  useEffect(() => {
    const pf = (window as any).__contactPrefill || '';
    setPrefill(pf);
    delete (window as any).__contactPrefill;
  }, []);

  const inputStyle: any = { padding: "15px", borderRadius: "12px", border: "none", background: "rgba(255,255,255,0.05)", color: "white", outline: "none", fontFamily: "inherit", fontSize: "15px" };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { setFormStatus('success'); form.reset(); }
      else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", paddingLeft: "8%", paddingRight: "8%" }}>
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "20px" }}>Let's <span style={{ color: colors.accent }}>Talk Growth.</span></h1>
        <p style={{ fontSize: "20px", color: colors.subText, maxWidth: "600px", margin: "0 auto" }}>Ready to take your business to the next level? Fill out the form below or reach out directly.</p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
        <div style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}` }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "30px" }}>Send us a message</h2>
          {formStatus === 'success' ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>✅</div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "10px" }}>Message Sent!</h3>
              <p style={{ color: colors.subText }}>We'll get back to you within 24 hours.</p>
              <button onClick={() => setFormStatus('idle')} style={{ marginTop: "20px", padding: "12px 30px", borderRadius: "100px", border: `1px solid ${colors.border}`, background: "transparent", color: colors.text, cursor: "pointer", fontWeight: "600" }}>Send Another</button>
            </div>
          ) : (
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your Name" style={inputStyle} required />
              <input name="email" type="email" placeholder="Your Email" style={inputStyle} required />
              <input name="phone" type="tel" placeholder="Phone Number (optional)" style={inputStyle} />
              <select name="service" style={inputStyle}>
                <option value="" style={{ background: "#1a1a1a" }}>Service Interested In</option>
                <option value="seo" style={{ background: "#1a1a1a" }}>SEO</option>
                <option value="google-ads" style={{ background: "#1a1a1a" }}>Google Ads</option>
                <option value="meta-ads" style={{ background: "#1a1a1a" }}>Meta Ads</option>
                <option value="social-media" style={{ background: "#1a1a1a" }}>Social Media</option>
                <option value="web-design" style={{ background: "#1a1a1a" }}>Web Design</option>
                <option value="gmb" style={{ background: "#1a1a1a" }}>Google My Business</option>
                <option value="other" style={{ background: "#1a1a1a" }}>Other</option>
              </select>
              <textarea name="message" placeholder="Tell us about your project" rows={5} defaultValue={prefill} style={{ ...inputStyle, resize: "none" as const }} required></textarea>
              {formStatus === 'error' && <p style={{ color: "#ef4444", fontSize: "14px" }}>Something went wrong. Please try again or email us directly.</p>}
              <button id="contact-btn" type="submit" disabled={formStatus === 'sending'} style={{ padding: "18px", borderRadius: "12px", border: "none", background: formStatus === 'sending' ? colors.subText : colors.accent, color: "white", fontWeight: "700", cursor: formStatus === 'sending' ? "not-allowed" : "pointer", fontSize: "16px", marginTop: "10px", transition: "0.3s" }}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px", color: colors.accent }}>Contact Info</h3>
            <p style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px", color: colors.subText }}><span style={{ fontSize: "20px" }}>📧</span> hello@digiudaan.com</p>
            <p style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px", color: colors.subText }}><span style={{ fontSize: "20px" }}>📱</span> +91 98765 43210</p>
            <p style={{ display: "flex", alignItems: "center", gap: "15px", color: colors.subText }}><span style={{ fontSize: "20px" }}>📍</span> Bandra West, Mumbai, 400050</p>
          </div>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px", color: colors.accent }}>Office Hours</h3>
            <p style={{ color: colors.subText, marginBottom: "10px" }}>Monday - Friday: 10:00 AM - 7:00 PM</p>
            <p style={{ color: colors.subText }}>Saturday: 11:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION ---

// --- PREMIUM FOOTER ---

const SiteFooter = ({ colors, setCurrentPage }: { colors: any, setCurrentPage: any }) => (
  <footer style={{ padding: "60px 8% 30px", borderTop: `1px solid ${colors.border}`, background: "rgba(255,255,255,0.01)" }}>
    <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "60px", marginBottom: "50px" }}>
      <div>
        <div style={{ fontWeight: "800", fontSize: "24px", color: colors.accent, marginBottom: "15px" }}>Digi Udaan</div>
        <p style={{ color: colors.subText, lineHeight: "1.7", fontSize: "15px", marginBottom: "20px" }}>Results-driven digital marketing agency in Mumbai. We turn clicks into growth you can see in your bank account.</p>
        <div className="footer-social" style={{ display: "flex", gap: "15px" }}>
          {[
            { icon: "in", label: "LinkedIn", url: "#" },
            { icon: "📸", label: "Instagram", url: "#" },
            { icon: "𝕏", label: "Twitter", url: "#" },
            { icon: "f", label: "Facebook", url: "#" }
          ].map((s, i) => (
            <a key={i} href={s.url} aria-label={s.label} style={{ width: "40px", height: "40px", borderRadius: "50%", border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: colors.subText, textDecoration: "none", fontSize: "16px", fontWeight: "700", transition: "0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.subText; }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ fontWeight: "700", marginBottom: "20px", fontSize: "16px" }}>Quick Links</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {["home", "services", "pricing", "blog", "about", "contact"].map(page => (
            <span key={page} onClick={() => { setCurrentPage(page); window.scrollTo(0, 0); }} style={{ color: colors.subText, cursor: "pointer", fontSize: "15px", textTransform: "capitalize", transition: "0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.subText}
            >{page}</span>
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ fontWeight: "700", marginBottom: "20px", fontSize: "16px" }}>Services</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { label: "SEO", page: "service_seo" },
            { label: "Google Ads", page: "service_ads" },
            { label: "Meta Ads", page: "service_social" },
            { label: "Web Design", page: "service_web" },
            { label: "Social Media", page: "pricing_social" },
            { label: "GMB", page: "service_gmb" }
          ].map(s => (
            <span key={s.page} onClick={() => { setCurrentPage(s.page); window.scrollTo(0, 0); }} style={{ color: colors.subText, cursor: "pointer", fontSize: "15px", transition: "0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.subText}
            >{s.label}</span>
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ fontWeight: "700", marginBottom: "20px", fontSize: "16px" }}>Contact</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: colors.subText, fontSize: "15px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>📧 hello@digiudaan.com</p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>📱 +91 98765 43210</p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>📍 Bandra West, Mumbai</p>
          <p style={{ margin: 0, marginTop: "5px" }}>Mon-Fri: 10AM - 7PM</p>
          <p style={{ margin: 0 }}>Sat: 11AM - 4PM</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom" style={{ borderTop: `1px solid ${colors.border}`, paddingTop: "25px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px", color: colors.subText }}>
      <span>© 2026 Digi Udaan. All rights reserved.</span>
      <div style={{ display: "flex", gap: "20px" }}>
        <span onClick={() => { setCurrentPage('privacy'); window.scrollTo(0, 0); }} style={{ cursor: "pointer", transition: "0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.accent} onMouseLeave={(e) => e.currentTarget.style.color = colors.subText}>Privacy Policy</span>
        <span onClick={() => { setCurrentPage('terms'); window.scrollTo(0, 0); }} style={{ cursor: "pointer", transition: "0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.accent} onMouseLeave={(e) => e.currentTarget.style.color = colors.subText}>Terms of Service</span>
      </div>
    </div>
  </footer>
);

// --- LEGAL PAGES ---

const PrivacyPolicyPage = ({ colors }: { colors: any }) => (
  <div style={{ paddingTop: "120px", paddingBottom: "80px", paddingLeft: "8%", paddingRight: "8%", maxWidth: "900px", margin: "0 auto" }}>
    <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "20px" }}>Privacy <span style={{ color: colors.accent }}>Policy</span></h1>
    <p style={{ color: colors.subText, marginBottom: "40px" }}>Last updated: February 20, 2026</p>
    {[
      { title: "1. Information We Collect", content: "We collect information you provide directly, including your name, email address, phone number, and business details when you fill out our contact form, subscribe to our newsletter, or engage with our services. We also collect usage data such as your browser type, IP address, and pages visited through cookies and analytics tools." },
      { title: "2. How We Use Your Information", content: "We use the information collected to provide and improve our digital marketing services, respond to your inquiries, send relevant updates and marketing communications (with your consent), personalize your experience on our website, and analyze website performance for optimization." },
      { title: "3. Data Sharing", content: "We do not sell your personal information to third parties. We may share data with trusted service providers (like email and analytics platforms) who help us operate our business, strictly under confidentiality agreements. We may also share data when required by law or to protect our rights." },
      { title: "4. Cookies", content: "Our website uses cookies to enhance your browsing experience, remember your preferences, and gather analytical data. You can control cookie settings through your browser. Disabling cookies may limit some website functionality." },
      { title: "5. Data Security", content: "We implement industry-standard security measures to protect your personal data, including encryption, secure servers, and regular security audits. However, no online transmission method is 100% secure, and we cannot guarantee absolute protection." },
      { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal data. You can opt out of marketing communications at any time. To exercise these rights, contact us at hello@digiudaan.com." },
      { title: "7. Contact Us", content: "If you have questions about this Privacy Policy, contact us at hello@digiudaan.com or call +91 98765 43210." }
    ].map((section, i) => (
      <div key={i} style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px", color: colors.accent }}>{section.title}</h2>
        <p style={{ color: colors.subText, lineHeight: "1.8", fontSize: "16px" }}>{section.content}</p>
      </div>
    ))}
  </div>
);

const TermsOfServicePage = ({ colors }: { colors: any }) => (
  <div style={{ paddingTop: "120px", paddingBottom: "80px", paddingLeft: "8%", paddingRight: "8%", maxWidth: "900px", margin: "0 auto" }}>
    <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "20px" }}>Terms of <span style={{ color: colors.accent }}>Service</span></h1>
    <p style={{ color: colors.subText, marginBottom: "40px" }}>Last updated: February 20, 2026</p>
    {[
      { title: "1. Services", content: "Digi Udaan provides digital marketing services including but not limited to SEO, Google Ads management, Meta Ads management, social media management, Google My Business optimization, and website design. The specific deliverables, timelines, and pricing for each engagement are outlined in the agreed-upon proposal or service agreement." },
      { title: "2. Client Responsibilities", content: "Clients agree to provide timely access to accounts, content, and feedback necessary for service delivery. Delays in providing required assets or approvals may affect project timelines and results. Clients are responsible for the accuracy of all information and materials they provide." },
      { title: "3. Payment Terms", content: "Payments are due as outlined in the service agreement. Monthly retainer fees are billed at the beginning of each service period. One-time project fees (such as website design) require a 50% advance before work begins, with the balance due upon completion. Late payments may result in service suspension." },
      { title: "4. Results Disclaimer", content: "While we are committed to delivering high-quality work and optimized strategies, results in digital marketing depend on many external factors including market conditions, competition, platform algorithms, and client cooperation. We do not guarantee specific rankings, traffic numbers, or lead volumes." },
      { title: "5. Intellectual Property", content: "All creative assets (designs, ad copies, content) produced during the engagement become the client's property upon full payment. Our proprietary strategies, methodologies, and tools remain our intellectual property. Clients may not share or resell our strategies to third parties." },
      { title: "6. Confidentiality", content: "Both parties agree to keep all business information, strategies, and data shared during the engagement confidential. This includes analytics data, campaign performance, pricing, and business strategies. Confidentiality obligations survive the termination of services." },
      { title: "7. Termination", content: "Either party may terminate services with 15 days written notice. Upon termination, the client is responsible for payment of all services rendered up to the termination date. We will provide all login credentials and assets upon full payment of outstanding dues." },
      { title: "8. Contact", content: "For questions about these terms, reach us at hello@digiudaan.com or call +91 98765 43210." }
    ].map((section, i) => (
      <div key={i} style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px", color: colors.accent }}>{section.title}</h2>
        <p style={{ color: colors.subText, lineHeight: "1.8", fontSize: "16px" }}>{section.content}</p>
      </div>
    ))}
  </div>
);

// --- MAIN APPLICATION ---

// @ts-expect-error - component reserved for future use
const CatMascot = ({ colors }: { colors: any }) => {
  const [targetPos, setTargetPos] = useState({ top: 0, left: 0, opacity: 0 });
  const [isFlicking, setIsFlicking] = useState(false);
  const [isLooking, setIsLooking] = useState(false);

  useEffect(() => {
    const targets = ["hero-cta", "services-title", "why-us-title", "roi-title", "contact-btn"];

    const handleScroll = () => {
      let bestTarget = null;
      let minDist = Infinity;
      const viewportHeight = window.innerHeight;

      targets.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if element is roughly in view
          if (rect.top > 0 && rect.top < viewportHeight) {
            const dist = Math.abs(rect.top - viewportHeight / 2);
            if (dist < minDist) {
              minDist = dist;
              bestTarget = { el, rect };
            }
          }
        }
      });

      if (bestTarget) {
        // Position cat on top of the element
        const { rect } = bestTarget as any;
        setTargetPos({
          top: rect.top + window.scrollY - 50, // Absolute position including scroll
          left: rect.left + rect.width / 2 - 30, // Center horizontally
          opacity: 1
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Random animations
    const flickInterval = setInterval(() => {
      if (Math.random() > 0.6) setIsFlicking(true);
      setTimeout(() => setIsFlicking(false), 1000);
    }, 3000);

    const lookInterval = setInterval(() => {
      if (Math.random() > 0.7) setIsLooking(true);
      setTimeout(() => setIsLooking(false), 2000);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(flickInterval);
      clearInterval(lookInterval);
    };
  }, []);

  return (
    <div style={{
      position: "absolute", // Changed to absolute to scroll with page
      top: targetPos.top,
      left: targetPos.left,
      opacity: targetPos.opacity,
      width: "60px",
      height: "60px",
      pointerEvents: "none",
      transition: "top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27), left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.27), opacity 0.3s",
      zIndex: 998,
      filter: "drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))"
    }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style={{ transformOrigin: "80px 80px", animation: isFlicking ? "tailFlick 1s ease-in-out" : "none" }}>
          <path d="M80 80 Q 95 50 85 30" stroke={colors.accent} strokeWidth="6" strokeLinecap="round" />
        </g>
        <ellipse cx="50" cy="70" rx="30" ry="25" fill="#0f0720" stroke={colors.accent} strokeWidth="3" />
        <g style={{ transformOrigin: "50px 50px", animation: isLooking ? "headLook 2s ease-in-out" : "none" }}>
          <circle cx="50" cy="45" r="20" fill="#0f0720" stroke={colors.accent} strokeWidth="3" />
          <circle cx="42" cy="42" r="3" fill="white" className="eye-blink" />
          <circle cx="58" cy="42" r="3" fill="white" className="eye-blink" />
          <path d="M35 35 L 30 20 L 45 28 Z" fill="#0f0720" stroke={colors.accent} strokeWidth="2" />
          <path d="M65 35 L 70 20 L 55 28 Z" fill="#0f0720" stroke={colors.accent} strokeWidth="2" />
        </g>
      </svg>
      <style>{`
        @keyframes tailFlick { 0% { transform: rotate(0deg); } 25% { transform: rotate(10deg); } 75% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }
        @keyframes headLook { 0% { transform: translateX(0); } 25% { transform: translateX(-2px) rotate(-5deg); } 75% { transform: translateX(2px) rotate(5deg); } 100% { transform: translateX(0); } }
        .eye-blink { animation: blink 4s infinite; }
        @keyframes blink { 0%, 96%, 100% { transform: scaleY(1); } 98% { transform: scaleY(0.1); } }
      `}</style>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Initialize from URL hash or default to home
    const hash = window.location.hash.slice(1);
    return hash || "home";
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spend, setSpend] = useState(25000);
  const [quizStep, setQuizStep] = useState(0);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || window.location.hash.slice(1) || "home";
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update browser history when page changes
  useEffect(() => {
    if (currentPage !== window.location.hash.slice(1)) {
      window.history.pushState({ page: currentPage }, '', `#${currentPage}`);
    }
  }, [currentPage]);

  const colors = {
    bg: "#05010d",
    text: "#ffffff",
    subText: "#94a3b8",
    accent: "#8b5cf6",
    card: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.1)"
  };

  return (
    <div onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })} style={{ backgroundColor: colors.bg, minHeight: "100vh", color: colors.text, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.5s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animated-text {
          background: linear-gradient(270deg, #fff, #a78bfa, #2dd4bf, #fff);
          background-size: 300% 300%; animation: gradientMove 8s ease infinite; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .cursor-glow {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none;
          background: radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.12) 0%, transparent 45%);
          z-index: 999;
        }
      `}</style>
      <div className="cursor-glow" />

      <Navbar colors={colors} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <>

          {/* --- HERO SECTION --- */}
          <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 8%", overflow: "hidden" }}>
            {/* Video Background */}
            <video autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}>
              <source src={homeHeroVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", zIndex: 1 }} />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", textAlign: "left" }}>
              <h1 className="animated-text" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", minHeight: "150px", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
                Your business is ready for the big stage. We just provide the spotlight.
              </h1>
              <p style={{ fontSize: "22px", color: "rgba(255,255,255,0.9)", lineHeight: "1.7", maxWidth: "650px", marginBottom: "40px", textShadow: "0 2px 10px rgba(0,0,0,0.5)", fontWeight: "500" }}>
                In the heart of Mumbai, we build digital strategies that turn clicks into growth you can see in your bank account.
              </p>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <button id="hero-cta" onClick={() => setCurrentPage('services')} style={{ padding: "18px 40px", borderRadius: "100px", border: "none", background: colors.accent, color: "white", fontWeight: "700", cursor: "pointer", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}>
                  Start Your Journey
                </button>
                <button onClick={() => { (window as any).__contactPrefill = "I'd like to request a Free Site Audit for my website."; setCurrentPage('contact'); }} style={{ padding: "18px 30px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", color: "white", fontWeight: "700", cursor: "pointer", backdropFilter: "blur(10px)" }}>
                  Free Site Audit
                </button>
                <button onClick={() => { (window as any).__contactPrefill = "I'd like to request Free Keyword Research for my business."; setCurrentPage('contact'); }} style={{ padding: "18px 30px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", color: "white", fontWeight: "700", cursor: "pointer", backdropFilter: "blur(10px)" }}>
                  Free Keyword Research
                </button>
              </div>
            </div>

            {/* Gradient Fade at Bottom */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", background: `linear-gradient(to top, ${colors.bg}, transparent)`, zIndex: 2 }} />
          </section>

          <Marquee colors={colors} />

          {/* --- STATS SECTION --- */}
          <section style={{ padding: "80px 8%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              {[
                { count: "1,50,000+", label: "Ad Spend Managed", icon: "💰" },
                { count: "20+", label: "Professional Websites", icon: "💻" },
                { count: "20+", label: "Instagram Accounts", icon: "📱" }
              ].map((stat, i) => (
                <div key={i} style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}`, textAlign: "center", transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>{stat.icon}</div>
                  <div style={{ fontSize: "42px", fontWeight: "800", color: colors.accent, marginBottom: "8px" }}>{stat.count}</div>
                  <div style={{ fontSize: "18px", color: colors.subText, fontWeight: "600" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <FeaturedCaseStudies colors={colors} />

          {/* --- WHAT WE DO --- */}
          <section style={{ padding: "80px 8%" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px" }}>Our Growth Engine</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                <h3 style={{ color: colors.accent, marginBottom: "10px" }}>01. Attract</h3>
                <p>We fix the 'invisible business' problem by dominating local maps and search rankings.</p>
              </div>
              <div style={{ background: colors.card, padding: "30px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
                <h3 style={{ color: colors.accent, marginBottom: "10px" }}>02. Convert</h3>
                <p>We design high-ROI campaigns that target intent, turning queries into customers.</p>
              </div>
            </div>
          </section>

          <ProcessTimeline colors={colors} />

          <Testimonials colors={colors} />

          {/* --- WHY CHOOSE US --- */}
          <section style={{ padding: "80px 8%", background: "rgba(255,255,255,0.01)" }}>
            <h2 id="why-us-title" style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px" }}>Why Partner With Us?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
              {whyChooseUs.map((item, i) => (
                <div key={i} style={{ borderLeft: `2px solid ${colors.accent}`, paddingLeft: "20px" }}>
                  <h4 style={{ marginBottom: "10px", fontWeight: "700" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: colors.subText }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- ROI CALCULATOR (CENTERED) --- */}
          <section style={{ padding: "80px 8%", display: "flex", justifyContent: "center" }}>
            <div style={{ background: colors.card, padding: "50px", borderRadius: "40px", border: `1px solid ${colors.border}`, width: "100%", maxWidth: "700px" }}>
              <h2 id="roi-title" style={{ fontSize: "28px", marginBottom: "30px", fontWeight: "800" }}>The ROI Hustle</h2>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: colors.subText }}>Monthly Ad Budget</span>
                <span style={{ fontWeight: "700", color: colors.accent }}>₹{spend.toLocaleString('en-IN')}</span>
              </div>
              <input type="range" min="5000" max="500000" step="5000" value={spend} onChange={(e) => setSpend(Number(e.target.value))} style={{ width: "100%", accentColor: colors.accent, marginBottom: "30px" }} />
              <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: "20px" }}>
                <span style={{ fontSize: "14px", color: colors.subText }}>Estimated Revenue Growth</span>
                <div style={{ fontSize: "48px", fontWeight: "800", color: colors.text }}>₹{(spend * 3.5).toLocaleString('en-IN')}</div>
              </div>
            </div>
          </section>

          {/* --- BRAND QUIZ (CENTERED) --- */}
          <section style={{ padding: "80px 8%", display: "flex", justifyContent: "center" }}>
            <div style={{ background: colors.card, padding: "50px", borderRadius: "40px", border: `1px solid ${colors.border}`, width: "100%", maxWidth: "700px" }}>
              <h2 style={{ fontSize: "28px", marginBottom: "10px", fontWeight: "800" }}>Brand Personality Quiz</h2>
              {quizStep < 3 ? (
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>{quizQuestions[quizStep].q}</h3>
                  {quizQuestions[quizStep].a.map((ans, i) => (
                    <button key={i} onClick={() => setQuizStep(quizStep + 1)} style={{ display: "block", width: "100%", padding: "18px", marginBottom: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, color: colors.text, cursor: "pointer", textAlign: "left" }}>{ans}</button>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "36px", color: colors.accent, fontWeight: "800" }}>The Trusted Guide</h3>
                  <button onClick={() => setQuizStep(0)} style={{ marginTop: "20px", background: "none", border: `1px solid ${colors.border}`, color: colors.text, padding: "12px 30px", borderRadius: "50px", cursor: "pointer" }}>Restart Quiz</button>
                </div>
              )}
            </div>
          </section>

          {/* --- SERVICES GRID --- */}
          <section style={{ padding: "80px 8% 120px" }}>
            <h2 id="services-title" style={{ fontSize: "32px", fontWeight: "800", marginBottom: "48px" }}>Our Core Expertise</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {servicesData.map((s, i) => (
                <div key={i} style={{ background: colors.card, padding: "40px", borderRadius: "24px", border: `1px solid ${colors.border}` }}>
                  <div style={{ fontSize: "24px", marginBottom: "20px" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>{s.title}</h3>
                  <p style={{ color: colors.subText, fontSize: "15px", lineHeight: "1.6" }}>{s.gist}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- WHO CAN BENEFIT --- */}
          <section style={{ padding: "80px 8%", background: colors.card, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>Who Can Benefit from Our Services</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {whoBenefits.map((item, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)", border: `1px solid ${colors.border}`,
                  padding: "20px 30px", borderRadius: "100px", fontSize: "18px", fontWeight: "600"
                }}>
                  {item}
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: "40px", fontSize: "20px", color: colors.accent, fontWeight: "700" }}>
              If you want more customers from online platforms, we can help.
            </p>
          </section>

          <BlogPreview colors={colors} setCurrentPage={setCurrentPage} />

          <FAQ colors={colors} />

          <CallToAction colors={colors} setCurrentPage={setCurrentPage} />

          <SiteFooter colors={colors} setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'services' ? (
        <><ServicesPage colors={colors} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage.startsWith('service_') ? (
        <><ServiceDetailPage colors={colors} currentPage={currentPage} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage === 'pricing' ? (
        <><PricingHub colors={colors} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage.startsWith('pricing_') ? (
        <><PricingDetail colors={colors} currentPage={currentPage} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage === 'about' ? (
        <><AboutPage colors={colors} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage === 'blog' ? (
        <><BlogPage colors={colors} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage.startsWith('blog_') ? (
        <><BlogDetailPage colors={colors} currentPage={currentPage} setCurrentPage={setCurrentPage} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage === 'contact' ? (
        <><ContactPage colors={colors} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage === 'privacy' ? (
        <><PrivacyPolicyPage colors={colors} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : currentPage === 'terms' ? (
        <><TermsOfServicePage colors={colors} /><SiteFooter colors={colors} setCurrentPage={setCurrentPage} /></>
      ) : null}

      <Chatbot colors={colors} setCurrentPage={setCurrentPage} />
    </div>
  );
}
