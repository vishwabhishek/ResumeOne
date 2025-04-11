import Head from "next/head";
import { useEffect, useState } from "react";

const Meta = ({ title, keywords, description }) => {
    const logo = "/assets/logo.png";
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "ResumeOne",
                "description": ${description},
                "image": ${logo},
                "url": "${origin}",
                "applicationCategory": "Resume Builder",
                "offers": {
                    "@type": "Offer",
                    "price": "0"
                }
            }`
        }
    }

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="author" content="ResumeOne" />
            
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={origin} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={logo} />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={logo} />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}

export default Meta;
