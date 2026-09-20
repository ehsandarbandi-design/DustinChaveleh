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

// Buyer's Guide (/buyers-guide) and Seller's Guide (/sellers-guide)
export type GuideStep = { number: string; title: string; subtitle: string; body?: string };
export type Guide = { label: string; headline: string; subheadline: string; image: string; steps: GuideStep[] };

export const guides: { buyers: Guide; sellers: Guide } = {
  buyers: {
    label: "Your Journey Starts Here",
    headline: "Buyer's Guide",
    subheadline: "9 steps to find your Dream Home",
    image: "/images/guides/for-buyers.webp",
    steps: [
      { number: "01", title: "Our First Meeting", subtitle: "Setting the Foundation", body: "Having a clear understanding and vision of your goals, needs, and financial capacity when it comes to buying a home is a great way to start your journey. Whether you're sick of paying rent or are in a place to settle down and have more control of your living space, homeownership is also a great investment that also allows you to build equity over time. In addition, the tax benefits of homeownership can provide a considerable advantage over renting." },
      { number: "02", title: "Financial Preparation", subtitle: "Establishing Leverage", body: "In a competitive market, strong financing is essential. A skilled loan officer will not only help you secure the best loan structure, but also strengthen your position in negotiations to improve your chances of getting your offer accepted. I can connect you with trusted lenders who will provide the financial guidance and resources needed to move forward with confidence." },
      { number: "03", title: "Determining Where to Live", subtitle: "Strategic Exploration", body: "Let's start narrowing down the areas you want to live in. Consider what you'd like to be close to, whether that's work, schools, parks, or neighborhood amenities. Every area has its own character and lifestyle, and the right fit plays a big role in your overall experience. We'll help you identify the communities that best align with your goals and lifestyle." },
      { number: "04", title: "Finding the Perfect Home", subtitle: "The Curated Search", body: "For every home you tour, make sure to also pay attention to the neighborhood. Imagine yourself walking around the neighborhood and getting a sense of what it would be like to live there every day. Ensuring you are in close proximity to whatever is important for you to live a happy and healthy lifestyle." },
      { number: "05", title: "Making an Offer", subtitle: "Securing the Asset", body: "Building strong relationships and staying organized helps ensure smooth, professional communication with other agents and strengthens our position in negotiations. After reviewing comparable sales, we'll develop a strategic offer tailored to the property and current market conditions. In a competitive environment, presenting a well-structured and confident offer is key. We'll work closely with you to position your offer effectively and maximize your chances of securing the right home." },
      { number: "06", title: "Title Company & Escrow Holder", subtitle: "The Formal Process", body: "Once your offer is accepted, we open escrow to begin the formal closing process. This is when your deposit and any required funds are placed into a secure third-party account, showing your commitment to the purchase. Those funds are held in escrow and are only released once all terms are satisfied and the transaction successfully closes. While this stage involves several steps and moving parts, we'll guide you through the process, keep you informed, and ensure everything progresses smoothly through closing." },
      { number: "07", title: "Inspection of the Property", subtitle: "Total Clarity", body: "You definitely want to know what you're getting yourself into. Make sure you take the time to complete any necessary inspections to understand the condition of the home before purchasing. Being able to know if there are any challenges with the property ahead of time will allow you to remedy the situation, whether it be through negotiating with the seller or adding to your to-do list." },
      { number: "08", title: "Closing — Almost There!", subtitle: "Final Transition", body: "You're at the finish line. I'll guide you through the final walkthrough, confirm that all terms of the purchase agreement have been completed, and coordinate with escrow to ensure a smooth closing. Once the closing documents are signed and recorded with the county, the transaction is complete—and the home is officially yours." },
      { number: "09", title: "Moving In", subtitle: "Welcome Home", body: "Now that you have your dream home, it's time to move in! We can help you with the details of your move, as well as the process of settling in. We have a large network of trusted experts to provide everything from movers, to home designers, painters, electricians, and more. You're going to love your new home!" },
    ],
  },
  sellers: {
    label: "Your Journey Starts Here",
    headline: "Seller's Guide",
    subheadline: "6 Steps to Sell Your Home",
    image: "/images/guides/for-sellers.webp",
    steps: [
      { number: "01", title: "Analyze & Position", subtitle: "Setting the Strategy", body: "Having a clear understanding of your goals, timeline, and financial objectives is the foundation of a successful sale. Every property and situation is different, and defining what success looks like—whether it's maximizing price, timing a move, or coordinating your next purchase—guides the entire strategy. From pricing to presentation to negotiation, each step builds from this initial alignment. We'll work closely with you to position your home effectively in today's market and achieve the strongest possible outcome." },
      { number: "02", title: "Marketing Plan", subtitle: "Maximum Exposure", body: "Now it's time to maximize exposure by mapping out all possible platforms to market your property. With the backing of Keller Williams, I have the resources you need to help you sell your home at the highest price in the shortest amount of time. We will also be the first point of contact to every internet inquiry so you can add that to the list of things you don't have to worry about." },
      { number: "03", title: "Staging & Professional Photography", subtitle: "Visual Storytelling", body: "Letting your potential prospect's imagination soar is key. Allowing your home to speak for itself means having photos that allow prospects to start writing the newest chapter of their life before they buy. Making sure your photos show the essence of every room will help strengthen your buyer's ability to imagine themselves living in your home." },
      { number: "04", title: "Print Marketing / Online Advertising & Social Media", subtitle: "Amplified Reach", body: "The more avenues a home has the higher the opportunity for buyers to see it. We will give your property the undivided attention it deserves to ensure maximum exposure via multiple outlets. In addition to our in-house graphic design professional who will customize and bring your home to life on paper, we will create an individualized online and social media strategy to amplify buyers' interest." },
      // Step 05 text is missing in content/copy.md (the current site repeats step 04 by mistake)
      { number: "05", title: "Show Your Property", subtitle: "The Experience" },
      { number: "06", title: "Negotiate & Close", subtitle: "Sealing the Deal", body: "This is where having multiple cooks in the kitchen may be in your best interest. At this point, you've been able to work and build a team of professionals dedicated to helping you sell your home. Now is the time to buckle down, negotiate terms that work for you, and close down a deal. We will continue to be there for you throughout the selling process as well as the final home inspection, so you never have to worry about doing anything alone." },
    ],
  },
};

// Meet Dustin (/meetdustin)
export const meetDustin = {
  headline: "Meet Dustin Chaveleh",
  subheadline: "San Francisco REALTOR®",
  image: "/images/portrait/dustin-2.webp",
  body: [
    "Originally from Texas, I moved to San Francisco in 2019—sight unseen—and have since built my career across finance and tech, with experience at Bloomberg, Goldman Sachs, and other technology companies. Along the way, I developed a strong interest in real estate investing and built my own portfolio, which led me to pursue a residential sales license in San Francisco.",
    "Having lived in Russian Hill, Mission Dolores, Corona Heights, Castro, and Rincon Hill, I bring a hyper-local perspective and use my experience around the city to navigate the complex San Francisco market for my clients. I'm passionate about helping people find not just a home, but a smart investment in one of the most dynamic cities in the world.",
    "Beyond real estate, I take full advantage of everything the Bay Area has to offer—from the walkability of San Francisco to exploring Northern California, Tahoe, and Mammoth. I also share market insights and city trends across TikTok, YouTube, and Instagram.",
    "First-time buyer. Upsizing. Relocating. Investor. Wherever you are in the journey, I'll meet you there with expertise, transparency, and a long-term mindset. Let's connect!",
  ],
  button: { label: "Work with Dustin", href: "/work-with-dustin" } as LinkItem,
  featured: {
    label: "AS FEATURED IN",
    publication: "BUSINESS INSIDER",
    // alt text for the three images is [TODO] in content/copy.md
    images: ["/images/press/business-insider-1.webp", "/images/press/business-insider-2.webp", "/images/press/business-insider-3.webp"],
    body: [
      "In August 2026, Business Insider featured my fitness transformation as part of their longevity series, The Long-Term Investment. The short version: I rebuilt my training and nutrition from the ground up, and it ended up reshaping more than my physique — it gave me the confidence and consistency that helped me close my first deal less than a year later.",
      "The habits weren't complicated. Show up, track progress, trust the process. Turns out that's a pretty good blueprint for building a business too.",
    ],
    button: { label: "Read the full article on Business Insider", href: "" } as LinkItem, // article URL is [TODO] in content/copy.md
  },
  quote: {
    text: "I got into real estate in 2019, just before the pandemic reshaped the market. Through my own experience, I saw how powerful real estate can be as a tool for building wealth, creating stability, and planning for the future. Now, my goal is to share that perspective with others—helping them understand the true power of real estate while making the home buying process feel approachable, clear, and far less overwhelming.",
    attribution: "— Dustin Chaveleh, REALTOR®",
  },
  resources: {
    label: "RESOURCES",
    headline: "Use my resources, skip the Guesswork.",
    items: [
      { title: "Buyer & Seller Guides", text: "Buying in SF is unlike anywhere else. I've put together a guide that walks you through the process, start to finish — what to expect, what to watch out for, and how to move confidently in a competitive market. Reach out, and I'll send it your way." },
      { title: "Trusted Vendors List", text: "These are the people I call. Lenders, insurance brokers, inspectors, contractors — vetted through years of deals and real relationships. Especially for financing nuances like TICs, having the right team makes all the difference. Get in touch, and I'll connect you directly." },
      { title: "Neighborhood Breakdowns", text: "SF has dozens of micro-neighborhoods, and the right one depends on your lifestyle, budget, and goals. I've put together a breakdown that goes beyond the headlines so you can find the pocket of the city that actually fits. Reach out and let's talk through it." },
    ],
  },
};

// Market Update (/market-update) — the stats live in content/market-stats.json
export const marketUpdate = {
  label: "MARKET UPDATE",
  headline: "The San Francisco Real Estate Market— Today",
  intro: "A monthly read for buyers, sellers, and anyone curious about where the SF market is headed. No fluff. Just data, context, and Dustin's honest take on what it means for you.",
  charts: [
    { title: "Median Sale Prices in SF for SFH, Condos & TICs Over the Last Ten Years" },
    { title: "Percentage of Asking Price in SF for SFH, Condos & TICs Over the Last Ten Years" },
    {
      title: "Home Price Appreciation Over Time — San Francisco vs California",
      legend: ["+15%+", "+5–14%", "+1–4%", "Flat", "−1–9%", "−10%+"],
      source: "Sources: Case-Shiller SF MSA Index, FHFA All-Transactions HPI, CAR · Approximate annual figures · Not investment advice",
    },
  ],
  take: {
    label: "DUSTIN'S TAKE 2026",
    body: [
      "San Francisco entered 2026 with renewed momentum. After the post-COVID slowdown, the city is showing clear signs of recovery — businesses are returning, new leadership is focused on revitalization, and buyer confidence is steadily rebuilding.",
      "In the housing market, demand has returned, but inventory remains tight — and that imbalance is creating real opportunity on well-positioned homes. Across the city, properties are attracting multiple offers, with buyers pushing prices beyond the list in the most desirable segments.",
      "For buyers, the advantage is being prepared — having financing in place and the ability to act decisively when the right home hits the market. For sellers, the advantage is timing and pricing correctly, as serious buyers are active and competition can quickly drive strong outcomes when a property is positioned well.",
    ],
  },
  wantMore: {
    label: "WANT MORE?",
    body: "View the latest housing market statistics, including home prices, inventory levels, and trends affecting buyers and sellers.",
    // both report URLs are [TODO] in content/copy.md
    links: [
      { label: "Keller Williams Market Report", href: "" },
      { label: "SF City Data Portal", href: "" },
    ] as LinkItem[],
    button: { label: "Start Your Property Search", href: "https://zenlist.com/a/dustin.chaveleh" } as LinkItem,
  },
};
