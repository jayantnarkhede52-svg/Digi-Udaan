import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Digi Udaan — Digital Marketing Agency in Mumbai",
    description = "Digi Udaan is a results-driven digital marketing agency in Mumbai. We specialize in SEO, Google Ads, Meta Ads, social media management, and web design.",
    keywords = "digital marketing agency Mumbai, SEO services, Google Ads, Meta Ads, social media management, web design",
    ogTitle,
    ogDescription,
    ogUrl = "https://digiudaan.com",
    ogType = "website"
}) => {
    const siteTitle = title.includes("Digi Udaan") ? title : `${title} | Digi Udaan`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || siteTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:url" content={ogUrl} />

            {/* Twitter */}
            <meta name="twitter:title" content={ogTitle || siteTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
        </Helmet>
    );
};

export default SEO;
