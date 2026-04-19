import seoImg from "../assets/seo-service.jpg";
import gmbImg from "../assets/gmb-service.jpg";
import adsImg from "../assets/google-ads-service.jpg";
import socialImg from "../assets/social-media-service.jpg";
import webImg from "../assets/web-dev-service.jpg";

export interface ServicePageContent {
    title: string;
    color: string;
    heroImg: string;
    tagline: string;
    content: string;
}

export const servicePagesData: Record<string, ServicePageContent> = {
    "google-seo": {
        title: "Google SEO (Search Engine Optimization)",
        color: "#22c55e",
        heroImg: seoImg,
        tagline: "Show up on Google when your customers are looking for you.",
        content: `
            <h3>What's SEO in simple words?</h3>
            <p>When someone types something like "best dentist in Mumbai" on Google, SEO is what decides whether your business shows up or not. We make sure it does.</p>
            <ul>
                <li><strong>Get found:</strong> People in Mumbai will actually see your business when they search.</li>
                <li><strong>Build trust:</strong> Showing up on page 1 makes people trust you more right away.</li>
                <li><strong>Get more calls:</strong> More people finding you = more phone calls and sales.</li>
            </ul>
            
            <h3>How we do it</h3>
            <p>We follow a simple 3-step approach. No confusing tech talk — just things that actually work.</p>
            
            <p><strong>1. Fix the basics</strong><br />
            We clean up your website — make it faster, fix any errors, and make sure it works smoothly on phones.</p>
            
            <p><strong>2. Use the right words</strong><br />
            We find out what your customers actually type into Google and use those exact words on your site.</p>
            
            <p><strong>3. Build your reputation</strong><br />
            We get other trusted websites to link to yours. This tells Google, "Hey, this business is legit."</p>

            <h3>Why it's worth it</h3>
            <p>Unlike ads, you don't pay for every click with SEO. It takes a few months to kick in, but once it does, you get a steady stream of customers without spending on ads.</p>
        `
    },
    "google-ads": {
        title: "Google Ads (Pay-Per-Click Advertising)",
        color: "#ef4444",
        heroImg: adsImg,
        tagline: "Start getting calls from real customers within 48 hours.",
        content: `
            <h3>What are Google Ads?</h3>
            <p>You know those results that show up at the very top of Google with a small "Ad" tag? That's Google Ads. And the best part? You only pay when someone actually clicks.</p>
            <ul>
                <li><strong>Reach buyers:</strong> These people are already searching for what you sell — they want to buy now.</li>
                <li><strong>Pay only for clicks:</strong> No clicks? No charge. Simple.</li>
                <li><strong>See results fast:</strong> You can start getting leads within a day or two of starting.</li>
            </ul>

            <h3>How we run your ads</h3>
            <p>We don't just throw money at Google and hope for the best. Here's what we actually do:</p>
            
            <p><strong>1. Pick the right keywords</strong><br />
            We find the words people use when they're ready to buy, and we block useless searches that waste your money.</p>
            
            <p><strong>2. Write ads people click on</strong><br />
            We write simple, clear ads that tell people exactly what you offer and why they should call you.</p>
            
            <p><strong>3. Watch the numbers</strong><br />
            Every week, we check what's working and what's not. If something isn't bringing in leads, we stop it and put that money into what is.</p>
        `
    },
    "meta-ads": {
        title: "Meta Ads (Facebook & Instagram)",
        color: "#eab308",
        heroImg: socialImg,
        tagline: "Put your business in front of the right people on Instagram and Facebook.",
        content: `
            <h3>Why advertise on Instagram and Facebook?</h3>
            <p>Your customers are already scrolling through Instagram and Facebook right now. We help you show up in their feed with ads they'll actually notice.</p>
            <ul>
                <li><strong>Target the right people:</strong> We show your ads to people based on their age, location, and what they're interested in.</li>
                <li><strong>Grab attention:</strong> We create good-looking images and short videos that make people stop and look.</li>
                <li><strong>Grow quickly:</strong> You can reach thousands of people in Mumbai within a few days.</li>
            </ul>

            <h3>Our simple 3-step approach</h3>
            <p>We don't just boost posts and hope for the best. We follow a proper plan to turn people who see your ad into actual customers.</p>
            
            <p><strong>Step 1: Catch their eye</strong><br />
            We create scroll-stopping Reels and images that grab attention in the first 3 seconds.</p>

            <p><strong>Step 2: Tell them why</strong><br />
            We write simple, honest text that explains what you do and why they should care.</p>

            <p><strong>Step 3: Remind them</strong><br />
            If someone checked you out but didn't buy, we show them a gentle reminder ad to bring them back.</p>
        `
    },
    "social-media": {
        title: "Social Media Management",
        color: "#eab308",
        heroImg: socialImg,
        tagline: "We handle your social media so you can focus on running your business.",
        content: `
            <h3>Your online first impression</h3>
            <p>When someone hears about your business, the first thing they do is check your Instagram or Facebook. If your page looks professional and active, they'll trust you more.</p>
            <ul>
                <li><strong>Stay active:</strong> Regular posts show people your business is alive and well.</li>
                <li><strong>Build a community:</strong> We don't just get you followers — we help you build real connections.</li>
                <li><strong>Show who you are:</strong> We share the human side of your business so people feel comfortable choosing you.</li>
            </ul>

            <h3>What we take care of</h3>
            <p>You won't have to worry about what to post or when. We handle everything.</p>

            <p><strong>1. Plan your content</strong><br />
            We create a full month's posting schedule so you always know what's going up and when.</p>

            <p><strong>2. Design great posts</strong><br />
            We make clean, modern visuals and edit Reels that match your brand's look and feel.</p>

            <p><strong>3. Reply to your audience</strong><br />
            We respond to comments and messages quickly so your followers feel heard and valued.</p>
        `
    },
    "gmb": {
        title: "Google My Business (Local SEO)",
        color: "#f97316",
        heroImg: gmbImg,
        tagline: "Be the first business people see when they search near your area.",
        content: `
            <h3>Why Google Maps matters</h3>
            <p>If you have a shop, clinic, or office in Mumbai, Google My Business is one of the most powerful (and free!) tools out there. It puts your business right on the map — literally.</p>
            <ul>
                <li><strong>Show up nearby:</strong> When people search "near me," you'll be in the top results.</li>
                <li><strong>One-tap calls:</strong> Customers can call you or get directions with just one tap on their phone.</li>
                <li><strong>Build local trust:</strong> Good ratings and an active profile make people choose you over competitors.</li>
            </ul>

            <h3>What we do for you</h3>
            <p>We don't just set up your profile and leave. We manage it every single week to keep you on top.</p>
            
            <p><strong>1. Set up everything properly</strong><br />
            We make sure your address, phone number, photos, and business hours are all correct and look professional.</p>

            <p><strong>2. Post updates every week</strong><br />
            We share offers, updates, and photos regularly. This tells Google your business is active and worth showing.</p>

            <p><strong>3. Help you get more reviews</strong><br />
            We help you get more 5-star reviews and reply to every one of them properly — this makes a huge difference in rankings.</p>
        `
    },
    "web-development": {
        title: "Website Design & Development",
        color: "#3b82f6",
        heroImg: webImg,
        tagline: "A website that works for you even while you sleep.",
        content: `
            <h3>Why your website matters</h3>
            <p>Think of your website as your online shop window. If it looks good and is easy to use, people will trust your business. If it's slow or confusing, they'll just leave.</p>
            <ul>
                <li><strong>Works on phones:</strong> Most people browse on their phone. Your site needs to look great on every screen size.</li>
                <li><strong>Loads fast:</strong> Nobody waits for a slow website. We make sure yours loads in a snap.</li>
                <li><strong>Easy to contact you:</strong> We put clear call buttons and WhatsApp links right where people need them.</li>
            </ul>

            <h3>What makes our websites different</h3>
            <p>We don't just make it look pretty — we make it work for your business.</p>
            
            <p><strong>1. Clear buttons everywhere</strong><br />
            We put "Call Now" and "WhatsApp Us" buttons right where visitors look so they can reach you instantly.</p>

            <p><strong>2. Simple, clear words</strong><br />
            People skim, they don't read novels. We use short sentences and clear headings so visitors instantly understand what you offer.</p>

            <p><strong>3. Google-ready from day one</strong><br />
            We build the SEO basics right into your website from the start so Google can find and show your site easily.</p>
        `
    },
};
