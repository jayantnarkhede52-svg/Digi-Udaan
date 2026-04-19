import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { api } from '../config/api';
import type { SEOData } from '../types';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogType?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title: propsTitle,
    description: propsDesc,
    keywords: propsKeywords,
    image = "/og-image.jpg",
    ogTitle,
    ogDescription,
    ogUrl = "https://digitaludaan.com",
    ogType = "website"
}) => {
    const location = useLocation();
    const [dbSeo, setDbSeo] = useState<SEOData | null>(null);

    useEffect(() => {
        // Fetch dynamic SEO settings
        api.getSEOSettings().then(data => {
            if (data && data[location.pathname]) {
                setDbSeo(data[location.pathname]);
            } else {
                setDbSeo(null);
            }
        }).catch(() => setDbSeo(null));
    }, [location.pathname]);

    // Use DB data if available, otherwise fallback to props, then fallback to defaults
    const finalTitle = dbSeo?.title || propsTitle || "Digital Udaan — Digital Marketing Agency in Mumbai";
    const finalDesc = dbSeo?.description || propsDesc || "Digital Udaan is a results-driven digital marketing agency in Mumbai. We specialize in SEO, Google Ads, Meta Ads, social media management, and web design.";
    const finalKeywords = dbSeo?.keywords || propsKeywords || "digital marketing agency Mumbai, SEO, Google Ads, Meta Ads, social media marketing, web design";

    const siteTitle = finalTitle.includes("Digital Udaan") ? finalTitle : `${finalTitle} | Digital Udaan`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={finalDesc} />
            <meta name="keywords" content={finalKeywords} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={ogTitle || siteTitle} />
            <meta property="og:description" content={ogDescription || finalDesc} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content={ogType} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || siteTitle} />
            <meta name="twitter:description" content={ogDescription || finalDesc} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
