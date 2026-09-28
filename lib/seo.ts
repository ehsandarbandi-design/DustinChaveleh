import type { Metadata } from "next";
import { site, type FaqItem } from "@/lib/copy";

/** Default link-preview image (1200×630, from the About section). Blog posts use their own cover. */
export const SHARE_IMAGE = { url: "/og.jpg", width: 1200, height: 630, alt: "Dustin Chaveleh, San Francisco REALTOR®" };

/** Dustin's Google Business Profile (the Knowledge Graph entity the footer's Google share link resolves to). */
const GOOGLE_PROFILE = "https://www.google.com/search?kgmid=/g/11z72v49hs";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path from the site root, e.g. "/meetdustin"; becomes the canonical URL on site.url. */
  path: string;
  /** Blog posts: Open Graph "article" with its publish date and cover image. */
  article?: { publishedTime: string; image?: string };
};

/** Title, meta description, canonical URL, Open Graph and Twitter card for one page. */
export function pageMeta({ title, description, path, article }: PageMetaInput): Metadata {
  const images = article?.image ? [article.image] : [SHARE_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: article
      ? { type: "article", title, description, url: path, siteName: site.logo, locale: "en_US", publishedTime: article.publishedTime, images }
      : { type: "website", title, description, url: path, siteName: site.logo, locale: "en_US", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

const AGENT_ID = `${site.url}/#agent`;

/** Site-wide structured data: Dustin as a RealEstateAgent (license, contact, office, service area,
 *  profiles) and the WebSite, which gives search results the site name. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": AGENT_ID,
      name: site.logo,
      url: site.url,
      image: `${site.url}/images/portrait/dustin-2.webp`,
      telephone: "+1-512-391-9306",
      email: site.email,
      identifier: { "@type": "PropertyValue", propertyID: "CA DRE", value: "02368948" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1624 California Street",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94109",
        addressCountry: "US",
      },
      areaServed: { "@type": "City", name: "San Francisco" },
      memberOf: { "@type": "Organization", name: site.brokerage.label, url: site.brokerage.href },
      sameAs: [...site.social.filter((s) => s.label !== "Google").map((s) => s.href), GOOGLE_PROFILE, site.propertySearch],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.logo, url: site.url, publisher: { "@id": AGENT_ID } },
  ],
};

/** Structured data for one blog post. */
export function postJsonLd(post: { title: string; excerpt: string; date: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${site.url}${post.path}`,
    mainEntityOfPage: `${site.url}${post.path}`,
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
    author: { "@type": "Person", name: site.logo, url: `${site.url}/meetdustin` },
    publisher: { "@id": AGENT_ID },
  };
}

/** Structured data for the FAQ page (answers as plain text). */
export function faqJsonLd(faq: { groups: { items: FaqItem[] }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.groups.flatMap((g) =>
      g.items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") } })),
    ),
  };
}
