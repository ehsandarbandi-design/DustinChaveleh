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
import { site } from "@/lib/copy";

// The only two fonts: Inter 300/400/700 and Inconsolata 300, display: swap.
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "700"], display: "swap", variable: "--font-inter" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["300"], display: "swap", preload: false, variable: "--font-inconsolata" });

export const metadata: Metadata = {
  title: site.title,
  // description: the meta description is marked [TODO] in content/copy.md
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${inconsolata.variable}`} suppressHydrationWarning>
      <body>
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
