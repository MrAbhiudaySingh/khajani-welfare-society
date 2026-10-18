import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

const SITE_NAME = "Khajani Welfare Society";
const DEFAULT_DOMAIN = "https://khajani.org";
const DEFAULT_OG_IMAGE = "/og-image.png";

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  breadcrumbs,
  noindex = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Determine current canonical URL
    const canonicalPath = canonical || location.pathname;
    const fullCanonicalUrl = `${DEFAULT_DOMAIN}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
    const fullOgImageUrl = ogImage.startsWith("http") ? ogImage : `${DEFAULT_DOMAIN}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: "name" | "property", attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to update or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // 2. Meta description
    setMetaTag("name", "description", description);

    // 3. Robots meta tag
    setMetaTag(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // 4. Canonical URL
    setLinkTag("canonical", fullCanonicalUrl);

    // 5. Open Graph tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullCanonicalUrl);
    setMetaTag("property", "og:image", fullOgImageUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", SITE_NAME);

    // 6. Twitter tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullOgImageUrl);
    setMetaTag("name", "twitter:site", "@khajaniwelfare");

    // 7. Structured Data (Schema.org JSON-LD)
    const scriptId = "seo-json-ld";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }

    const schemas: Array<Record<string, unknown>> = [];

    // Add breadcrumb schema if available
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: b.name,
          item: b.url.startsWith("http") ? b.url : `${DEFAULT_DOMAIN}${b.url.startsWith("/") ? b.url : `/${b.url}`}`,
        })),
      });
    }

    // Add page-specific schema if provided
    if (schema) {
      if (Array.isArray(schema)) {
        schemas.push(...schema);
      } else {
        schemas.push(schema);
      }
    }

    if (schemas.length > 0) {
      scriptEl.text = JSON.stringify(schemas.length === 1 ? schemas[0] : { "@context": "https://schema.org", "@graph": schemas });
    } else {
      scriptEl.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: fullCanonicalUrl,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: DEFAULT_DOMAIN,
          logo: `${DEFAULT_DOMAIN}/favicon.png`,
        },
      });
    }

    return () => {
      // Cleanup script tag on unmount
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [title, description, canonical, ogType, ogImage, schema, breadcrumbs, noindex, location.pathname]);

  return null;
};

export default SEO;
