import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Inconsolata } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/reset.css";
import "@/styles/type.css";
import "@/styles/layout.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, seo } from "@/lib/copy";
import { siteJsonLd, SHARE_IMAGE } from "@/lib/seo";

// The only two fonts: Inter 300/400/700 and Inconsolata 300 (labels) + 500 (buttons only), display: swap.
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "700"], display: "swap", variable: "--font-inter" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["300", "500"], display: "swap", preload: false, variable: "--font-inconsolata" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: seo.home,
  openGraph: { type: "website", siteName: site.logo, locale: "en_US", title: site.title, description: seo.home, url: "/", images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", title: site.title, description: seo.home, images: [SHARE_IMAGE] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${inconsolata.variable}`} suppressHydrationWarning>
      <body>
        <JsonLd data={siteJsonLd} />
        {/* Marks that JS is running so scroll-reveal / image-fade hidden states only apply with JS. */}
        <Script id="js-flag" strategy="beforeInteractive">{`document.documentElement.classList.add("js")`}</Script>
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
