// lib/copy.ts — mirrors content/copy.md word for word.
// content/copy.md is the source of truth: change text there first, then here.
// Nothing in this file may say something copy.md does not say.

export type LinkItem = { label: string; href: string };

export const site = {
  title: "Dustin Chaveleh | San Francisco based REALTOR®",
  // metaDescription: marked [TODO] in content/copy.md
  logo: "Dustin Chaveleh",
  nav: [
    { label: "Home", href: "/" },
    { label: "Meet Dustin", href: "/meetdustin" },
    { label: "Market Update", href: "/market-update" },
    { label: "Blog", href: "/blog" },
    { label: "Play Games", href: "/playrealestateiq" },
  ] as LinkItem[],
  cta: { label: "Work with Dustin", href: "/work-with-dustin" } as LinkItem,
  license: "CA DRE #02368948",
  phone: { label: "(512) 391-9306", href: "sms:5123919306" } as LinkItem,
  email: "dustinchaveleh@kw.com",
  office: "1624 California Street, San Francisco, CA 94109",
  brokerage: { label: "Keller Williams", href: "https://www.kwasf.com/" } as LinkItem,
  social: [
    { label: "Instagram", href: "https://instagram.com/dust_in_sf" },
    { label: "TikTok", href: "https://www.tiktok.com/@dust_in_sf" },
    { label: "YouTube", href: "https://www.youtube.com/@Dust_in_SF" },
    { label: "Google", href: "https://share.google/4Gu8ZNLQdxIxLXwXv" },
  ] as LinkItem[],
  propertySearch: "https://zenlist.com/a/dustin.chaveleh",
};

export type Neighborhood = { name: string; slug: string; description: string; image?: string };

export const home = {
  hero: {
    headline: "Dustin Chaveleh",
    subheadline: "Your home-buying journey starts here",
    cta: { label: "Work with Dustin", href: "/work-with-dustin" } as LinkItem,
  },
  about: {
    label: "ABOUT",
    headline: ["Texas roots.", "San Francisco hustle."],
    body: [
      "Dustin moved to San Francisco from Texas after graduating from the University of Texas at Austin. He came here for a career in finance and tech — he worked at Bloomberg and Goldman Sachs and quickly found himself obsessed with real estate.",
      "That obsession turned into action. He started investing personally, acquiring out-of-state properties, and getting his license — all while building the chops to read a deal before most people even see the listing.",
      "Today, Dustin brings that same finance-and-data mindset to his clients — helping first-time buyers, professionals, and relocators navigate San Francisco with clarity and confidence.",
    ],
    smallPrint: "CA DRE # 02368948",
    link: { label: "Learn more about Dustin", href: "/meetdustin" } as LinkItem,
  },
  journal: {
    label: "JOURNAL",
    headline: "Read About Your Neighborhood, Your Move",
    cardLink: "Read more →",
    button: { label: "Read the blog", href: "/blog" } as LinkItem,
  },
  iq: {
    label: "TEST YOURSELF",
    headline: "Think You Know the San Francisco Market?",
    subheadline: "Test your local market expertise.",
    button: { label: "Play Real Estate IQ", href: "/playrealestateiq" } as LinkItem,
  },
  neighborhoods: {
    label: "NEIGHBORHOODS",
    items: [
      { name: "The Mission District", slug: "mission", image: "/images/neighborhoods/mission.webp", description: "Vibrant murals, incredible food, and a neighborhood that never stops moving. The Mission is SF's cultural heartbeat." },
      { name: "The Marina", slug: "marina", image: "/images/neighborhoods/marina.webp", description: "Waterfront living with energetic nightlife, young professional buzz, and postcard views of the Golden Gate." },
      { name: "North Beach", slug: "north-beach", image: "/images/neighborhoods/north-beach.webp", description: "San Francisco's \"Little Italy,\" filled with historic cafés, iconic bookstores, and a lively mix of old-school charm and nightlife." },
      { name: "The Castro", slug: "castro", image: "/images/neighborhoods/castro.webp", description: "A vibrant, historic neighborhood known for its iconic LGBTQ+ culture, colorful energy, and a mix of nightlife, cafes, and classic Victorian homes." },
      { name: "Duboce Triangle", slug: "duboce-triangle", image: "/images/neighborhoods/duboce-triangle.webp", description: "A tucked-away San Francisco pocket where tree-lined streets, charming Victorians, and easy access to transit meet a calm, central city vibe." },
      { name: "Nob Hill", slug: "nob-hill", image: "/images/neighborhoods/nob-hill.webp", description: "An elevated, historic neighborhood known for grand hotels, cable car views, and classic San Francisco elegance overlooking the city." },
      { name: "Embarcadero Waterfront", slug: "embarcadero", image: "/images/neighborhoods/embarcadero.webp", description: "San Francisco's iconic waterfront corridor, defined by bay views, Ferry Building energy, and a seamless blend of transit, dining, and open-air city life." },
      { name: "Twin Peaks", slug: "twin-peaks", image: "/images/neighborhoods/twin-peaks.webp", description: "A dramatic hillside landmark offering some of the best panoramic views in San Francisco, from the Bay to the Pacific, above the city's fog line." },
      { name: "Haight Ashbury", slug: "haight-ashbury", image: "/images/neighborhoods/haight-ashbury.webp", description: "A colorful, counterculture-rooted neighborhood known for its vintage shops, eclectic Victorian homes, and enduring 1960s free-spirited energy." },
      { name: "Noe Valley", slug: "noe-valley", image: "/images/neighborhoods/noe-valley.webp", description: "A sunny, quiet residential enclave known for its charming Victorian homes, family-friendly streets, and relaxed village-like feel in the heart of the city." },
      { name: "The Excelsior", slug: "excelsior", image: "/images/neighborhoods/excelsior.webp", description: "Right below Bernal Heights, The Excelsior features McLaren Park to the East, and Geneva Avenue to the south. It is in the SFAR's District 10." },
    ] as Neighborhood[],
    link: { label: "View the Neighborhood Guide", href: "/blog/tag/Neighborhoods" } as LinkItem,
  },
  nextStep: {
    label: "THE NEXT STEP",
    headline: "Taking the Next Step",
    sellers: {
      title: "For Sellers",
      body: "Selling in San Francisco takes more than a listing. Pricing it right, timing it well, and presenting it strategically — these things separate a smooth sale from a frustrating one.",
      link: { label: "How the Process Works for Selling", href: "/sellers-guide" } as LinkItem,
    },
    buyers: {
      title: "For Buyers",
      body: "Buying in SF is unlike anywhere else. It has its own rules — different contract structures, competitive offer dynamics, and neighborhood quirks that catch first-time buyers off guard.",
      link: { label: "How the Process Works for Buying", href: "/buyers-guide" } as LinkItem,
    },
  },
  contact: {
    label: "GET IN TOUCH",
    headline: ["Ready to make", "your move?"],
    details: [
      { label: "CA License", value: "DRE # 02368948" },
      { label: "Phone", value: "(512) 391-9306", href: "sms:5123919306" },
      { label: "E-mail", value: "dustinchaveleh@kw.com", href: "mailto:dustinchaveleh@kw.com" },
      { label: "Office", value: "1624 California Street, San Francisco, CA 94109" },
    ],
  },
};

// Contact form (used on Home and Work with Dustin)
export const contactForm = {
  fields: {
    firstName: { label: "First Name", required: true },
    lastName: { label: "Last Name", required: false },
    email: { label: "Email", required: true },
    newsletter: { label: "Sign up for news and updates" },
    phone: { label: "Phone", required: false },
    message: { label: "Message", required: true, placeholder: "Tell Dustin a bit about what you're looking for..." },
  },
  button: "Send Message",
  // success message, error message and the submit endpoint are [TODO] in content/copy.md
};

export type Post = { date: string; dateLabel: string; title: string; href: string; excerpt: string; image?: string; tags?: string[] };

// Blog posts, newest first (links only — bodies stay on the current site until migrated)
export const posts: Post[] = [
  { date: "2026-08-31", dateLabel: "Aug 31, 2026", title: "San Francisco Property Transfer Taxes 2026 Guide", href: "/blog/san-francisco-transfer-taxes", image: "/images/blog/san-francisco-transfer-taxes.webp", excerpt: "Real estate transfer taxes are rarely a fun topic to discuss, but they are a closing cost that adds up quickly if you aren't paying attention. In this guide, I break down how the home price you are targeting translates directly into your tax liability, and why crossing specific threshold lines can instantly triple your tax rate and cost you tens of thousands of dollars." },
  { date: "2026-08-19", dateLabel: "Aug 19, 2026", title: "Rent Control in San Francisco", href: "/blog/rent-control-in-san-francisco", image: "/images/blog/rent-control-in-san-francisco.webp", excerpt: "The market that makes you want to sell is the market that makes your tenant want to stay. When rents are climbing there is nowhere cheaper for them to go, and when they are finally ready to move, prices have usually softened too. Here is the Rent control 101 for San Francisco sellers." },
  { date: "2026-08-14", dateLabel: "Aug 14, 2026", title: "Ranking the Best Platforms for Home Searching (2026 Guide)", href: "/blog/i0ccwm3gm435y9qc8i31gw5zbbqd88", image: "/images/blog/i0ccwm3gm435y9qc8i31gw5zbbqd88.webp", excerpt: "Thinking about buying a home? Relying on just one app like Zillow or Redfin means you might be missing out on exclusive and \"Coming Soon\" listings. Discover why a multi-app setup—and private MLS access—is essential for seeing the full picture of inventory in today's market." },
  { date: "2026-08-03", dateLabel: "Aug 3, 2026", title: "Tenant Buyout Costs in San Francisco", href: "/blog/tenantbuyouts", image: "/images/blog/tenantbuyouts.webp", excerpt: "Rent buyouts — landlords paying tenants cash to voluntarily give up a rent-controlled unit — are happening in San Francisco at a pace not seen since before the pandemic. Here's the quick version: what's driving it, where it's happening, and what the city does (and doesn't) tell you about the price tag." },
  { date: "2026-07-29", dateLabel: "Jul 29, 2026", title: "Schools in San Francisco", href: "/blog/schools-in-san-francisco", image: "/images/blog/schools-in-san-francisco.webp", excerpt: "San Francisco is a single unified school district — which means there's no \"good school\" neighborhood to buy into, and moving across the city won't automatically change your kid's assigned school. Here's why the suburban playbook doesn't apply here, and how to plan your home search and school enrollment as two separate timelines." },
  { date: "2026-07-28", dateLabel: "Jul 28, 2026", title: "Home Buyers and Sellers Generational Trends", href: "/blog/home-buyers-and-sellers-generational-trends", image: "/images/blog/home-buyers-and-sellers-generational-trends.webp", excerpt: "This post breaks down key findings from the National Association of REALTORS® (NAR) Generational Trends Report, exploring how younger buyers are navigating today's competitive housing market." },
  { date: "2026-07-24", dateLabel: "Jul 24, 2026", title: "Why Real Estate Deals Fall Through", href: "/blog/why-real-estate-deals-fall-through", image: "/images/blog/why-real-estate-deals-fall-through.webp", excerpt: "Most real estate deals don't die from one big dramatic thing — they die from inspection surprises, financing hiccups, and timing that doesn't line up. Here's the actual breakdown by category and percentage, using the latest 2026 NAR and Redfin data, plus what SF buyers and sellers can do to keep their deal off the list." },
  { date: "2026-07-22", dateLabel: "Jul 22, 2026", title: "Before You Buy in the Sunset, Know Its History", href: "/blog/before-you-buy-in-the-sunset-know-its-history", image: "/images/blog/before-you-buy-in-the-sunset-know-its-history.webp", excerpt: "Ever notice how every block in the Sunset looks like a variation on the same house? That's not a coincidence — it's the legacy of a 1930s building boom that put up two houses a day. Here's the real story behind the stucco, the narrow lots, and the little style flourishes that make each one unique." },
  { date: "2026-07-16", dateLabel: "Jul 16, 2026", title: "Which Neighborhoods Are Selling the Furthest Over Asking Right Now", href: "/blog/6w1tfsq3p6nott2rnyo1o4i7ue56e4", excerpt: "Inner Sunset and Outer Sunset single-family homes are now closing over 141% of list price, while Bernal Heights leads all neighborhoods in year-over-year gains. Here's where San Francisco's 2026 market is running hottest — and the one neighborhood where condos are still going for less than asking." },
  { date: "2026-07-16", dateLabel: "Jul 16, 2026", title: "Why San Francisco Duplexes Sell for Less Than Single-Family Homes", href: "/blog/why-san-francisco-duplexes-sell-for-less-than-single-family-homes", excerpt: "Over half of SF duplexes sell with a tenant in place, and that tenant costs sellers 44% per square foot. Here's why rent control makes vacancy the real premium — and how savvy buyers are closing the gap to single-family pricing." },
];
