import type { Metadata } from "next";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/Testimonials";
import { workWithDustin, site, seo } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: `${workWithDustin.headline} — ${site.logo}`, description: seo.workWithDustin, path: "/work-with-dustin" });

/** /work-with-dustin (Figma 704:2482): the home page's Get In Touch section with the page's H1 over the form and the
 *  P2 paragraph above the contact details, then the client reviews. */
export default function WorkWithDustinPage() {
  return (
    <main className="below-header">
      <Contact headingAs="h1" body={workWithDustin.body} id="work-with-dustin" />
      <Testimonials />
    </main>
  );
}
