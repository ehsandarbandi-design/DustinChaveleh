// lib/copy.ts — mirrors content/copy.md word for word.
// content/copy.md is the source of truth: change text there first, then here.
// Nothing in this file may say something copy.md does not say.

import postsData from "@/content/blog/posts.json";

export type LinkItem = { label: string; href: string };

export const site = {
  url: "https://www.dustinchaveleh.com",
  title: "Dustin Chaveleh | San Francisco based REALTOR®",
  logo: "Dustin Chaveleh",
  nav: [
    { label: "Home", href: "/" },
    { label: "Meet Dustin", href: "/meetdustin" },
    { label: "Market Update", href: "/market-update" },
    { label: "Blog", href: "/blog" },
    { label: "Play Games", href: "/playrealestateiq" },
    { label: "FAQ", href: "/faq" },
  ] as LinkItem[],
  cta: { label: "Work with Dustin", href: "/work-with-dustin" } as LinkItem,
  faq: { label: "FAQ", href: "/faq" } as LinkItem,
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
  bookCall: {
    intro: "Prefer to talk it through? Pick a time for a quick call.",
    button: { label: "Book a 30-Minute Call", href: "https://calendly.com/dustinchaveleh-kw/15min" } as LinkItem,
  },
};

/** Testimonials (content/copy.md → Testimonials). Excerpts of Google reviews, cut at a full sentence. */
export const testimonials = {
  label: "CLIENT REVIEWS",
  headline: "First-time buyers, in their own words.",
  image: { src: "/images/reviews/clients.webp", alt: "An agent going over a floor plan with two buyers at a kitchen island" },
  rating: "5.0 on Google",
  button: {
    label: "Read the reviews on Google",
    href: "https://share.google/4Gu8ZNLQdxIxLXwXv"
  },
  items: [
    {
      quote: "We are grateful to have Dustin help us buy our first ever home! As first-time homebuyers, the process felt overwhelming at times, but he was very patient, supportive, and there for us every step of the way. Thank you for making this milestone in our lives even more meaningful.",
      name: "Jessie So",
      note: "First-time homebuyers"
    },
    {
      quote: "Meeting Dustin was the best part of our home-buying journey. As first-time homebuyers, my spouse and I had little to no knowledge of the process. From the very beginning, Dustin took the time to guide us every step of the way. What we appreciated most was his honesty.",
      name: "Daryl Miranda",
      note: "First-time homebuyers"
    }
  ]
};

export type FaqItem = { q: string; a: string[]; link?: LinkItem };
/** FAQ (content/copy.md → FAQ). DRAFT: written Sep 28, 2026 for Dustin to approve. */
export const faq: { label: string; headline: string; intro: string; groups: { title: string; items: FaqItem[] }[] } = {
  label: "FAQ",
  headline: "Before you make your move.",
  intro: "The questions I hear most from buyers and sellers, with straight answers. If yours isn't here, ask me.",
  groups: [
    {
      title: "Getting started",
      items: [
        {
          q: "I'm thinking about buying in San Francisco. Where do I start?",
          a: [
            "Start with a conversation, not a listing. We'll talk through your budget, your timing and what you want your days to look like: the commute, the space, the kind of block you want to come home to.",
            "Next, get fully underwritten pre-approval, not just pre-qualification, so your offer holds up when it counts. Then we start touring."
          ],
          link: {
            label: "Book a 30-Minute Call",
            href: "https://calendly.com/dustinchaveleh-kw/15min"
          }
        },
        {
          q: "Do I really need 20% down?",
          a: [
            "No. Plenty of buyers put down less, and San Francisco has programs built for first-time buyers. The city's Downpayment Assistance Loan Program offers up to $500,000 in deferred down payment help on market-rate homes, awarded by lottery.",
            "There are also programs for SFUSD teachers and a mortgage credit certificate that turns part of your interest into a tax credit. I broke them all down in one post."
          ],
          link: {
            label: "Read the post",
            href: "/blog/home-buyers-and-sellers-generational-trends"
          }
        },
        {
          q: "How long does it take to buy a home here?",
          a: [
            "The search itself averages about ten weeks. Once your offer is accepted, escrow usually takes around a month.",
            "Well-priced homes still move fast in this city, so being ready to act matters more than having time to wait."
          ],
          link: {
            label: "See the latest market numbers",
            href: "/market-update"
          }
        },
        {
          q: "Can I see homes before they show up on Zillow or Redfin?",
          a: [
            "Yes. I set my clients up on Zenlist, which pulls straight from the local MLS, including Coming Soon listings, often hours or days before the big portals have them.",
            "Request access through my link and I'll approve you."
          ],
          link: {
            label: "Start Your Property Search",
            href: "https://zenlist.com/a/dustin.chaveleh"
          }
        },
        {
          q: "Does the neighborhood decide which school my kids go to?",
          a: [
            "Not in San Francisco. The whole city is one school district, SFUSD, and families apply and rank schools through its assignment process. Buying on a certain street doesn't lock in a certain school.",
            "So pick where to live for the commute, the housing and the feel of the block, and plan school enrollment as its own timeline. Check SFUSD for the current rules before you apply."
          ],
          link: {
            label: "Read the post",
            href: "/blog/schools-in-san-francisco"
          }
        }
      ]
    },
    {
      title: "Working with Dustin",
      items: [
        {
          q: "What does it cost to work with you as a buyer?",
          a: [
            "Before we tour homes together, we sign a short buyer agreement that spells out how I'm paid. That's now standard across California.",
            "In many deals the seller covers it. We'll go over how it works for your situation on our first call, before you commit to anything."
          ]
        },
        {
          q: "I'm selling. What should I do first?",
          a: [
            "Get clear on what a good outcome looks like for you: the highest price, a specific move date, or lining the sale up with your next purchase. That shapes the pricing, the prep and the marketing.",
            "One cost San Francisco sellers often don't expect is the city's transfer tax. The seller usually pays it, and the rate climbs with the sale price."
          ],
          link: {
            label: "Read the post",
            href: "/blog/san-francisco-transfer-taxes"
          }
        },
        {
          q: "Which neighborhoods do you cover?",
          a: [
            "All of San Francisco. I've lived in Russian Hill, Mission Dolores, Corona Heights, the Castro and Rincon Hill, so I bring a local's read on each part of the city, not just the listing data.",
            "Not sure where you'd fit? That's a good first conversation."
          ],
          link: {
            label: "Browse the neighborhood guides",
            href: "/blog/tag/Neighborhoods"
          }
        },
        {
          q: "I'm moving to San Francisco from out of state. Can you help?",
          a: [
            "That's how I got here. I moved from Texas in 2019, sight unseen.",
            "Tell me where you'll be working and how you like to live, and I'll help you narrow the city down to a few neighborhoods before you start touring."
          ]
        },
        {
          q: "Do you work with investors?",
          a: [
            "Yes. I came to real estate through building my own portfolio, and I still invest.",
            "In San Francisco the numbers depend heavily on rent control and tenant rules, so we look at those before we look at returns."
          ],
          link: {
            label: "Read the post",
            href: "/blog/rent-control-in-san-francisco"
          }
        }
      ]
    }
  ]
};

/** Meta descriptions (content/copy.md → SEO). */
export const seo = {
  home: "San Francisco REALTOR® Dustin Chaveleh helps first-time buyers, professionals and relocators buy and sell in SF with a finance-and-data mindset.",
  meetDustin: "Texas roots, San Francisco hustle. Dustin came to SF for finance and tech at Bloomberg and Goldman Sachs. Now he helps people buy and sell across the city.",
  marketUpdate: "A monthly read on the San Francisco market: median price, days on market, sale-to-list and inventory, plus Dustin's honest take on what it means for you.",
  blog: "Dustin's blog on buying and selling in San Francisco. Transfer taxes, rent control, schools, neighborhoods and where the market is headed, in plain English.",
  blogCategory: (category: string) => `Everything filed under ${category} on Dustin Chaveleh's San Francisco real estate blog.`,
  workWithDustin: "Buying or selling in San Francisco? Book a 30-minute call with Dustin or send him a message. Clear guidance and straightforward communication, start to finish.",
  faq: "Straight answers to what San Francisco buyers and sellers ask most: down payments, timelines, schools, early listing access and what working with Dustin costs.",
  realEstateIQ: "See a real San Francisco listing and guess what it sold for. Nail it within 10% and score 1,000 points a home. Harder than it sounds.",
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
    button: { label: "View all blogs", href: "/blog" } as LinkItem,
  },
  iq: {
    label: "REAL ESTATE IQ",
    headline: ["Think You Know", "the San Francisco Market?"],
    subheadline: "Play Real Estate IQ and test your market knowledge.",
    screens: [
      { src: "/images/game/game-screen.webp", alt: "Real Estate IQ game screen: guess what a single-family home in the Castro sold for" },
      { src: "/images/game/results-screen.webp", alt: "Real Estate IQ results screen: Legend level, 36,000 points, and the round breakdown" },
    ],
    button: { label: "Play Real Estate IQ", href: "/playrealestateiq" } as LinkItem,
  },
  neighborhoods: {
    label: "NEIGHBORHOODS",
    items: [
      { name: "Nob Hill", slug: "nob-hill", image: "/images/neighborhoods/nob-hill.webp", description: "An elevated, historic neighborhood known for grand hotels, cable car views, and classic San Francisco elegance overlooking the city." },
      { name: "Embarcadero Waterfront", slug: "embarcadero", image: "/images/neighborhoods/embarcadero.webp", description: "San Francisco's iconic waterfront corridor, defined by bay views, Ferry Building energy, and a seamless blend of transit, dining, and open-air city life." },
      { name: "Twin Peaks", slug: "twin-peaks", image: "/images/neighborhoods/twin-peaks.webp", description: "A dramatic hillside landmark offering some of the best panoramic views in San Francisco, from the Bay to the Pacific, above the city's fog line." },
      { name: "The Mission District", slug: "mission", image: "/images/neighborhoods/mission.webp", description: "Vibrant murals, incredible food, and a neighborhood that never stops moving. The Mission is SF's cultural heartbeat." },
      { name: "The Marina", slug: "marina", image: "/images/neighborhoods/marina.webp", description: "Waterfront living with energetic nightlife, young professional buzz, and postcard views of the Golden Gate." },
      { name: "North Beach", slug: "north-beach", image: "/images/neighborhoods/north-beach.webp", description: "San Francisco's \"Little Italy,\" filled with historic cafés, iconic bookstores, and a lively mix of old-school charm and nightlife." },
      { name: "The Castro", slug: "castro", image: "/images/neighborhoods/castro.webp", description: "A vibrant, historic neighborhood known for its iconic LGBTQ+ culture, colorful energy, and a mix of nightlife, cafes, and classic Victorian homes." },
      { name: "Duboce Triangle", slug: "duboce-triangle", image: "/images/neighborhoods/duboce-triangle.webp", description: "A tucked-away San Francisco pocket where tree-lined streets, charming Victorians, and easy access to transit meet a calm, central city vibe." },
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
      { label: "Phone", value: "(512) 391-9306", href: "sms:5123919306" },
      { label: "E-mail", value: "dustinchaveleh@kw.com", href: "mailto:dustinchaveleh@kw.com" },
      { label: "Office", value: "1624 California Street, San Francisco, CA 94109" },
      { label: "CA License", value: "DRE # 02368948" },
    ],
  },
};

// Contact form (used on Home and Work with Dustin)
export const contactForm = {
  fields: {
    firstName: { label: "First Name", required: true },
    lastName: { label: "Last Name", required: true },
    email: { label: "Email", required: true },
    newsletter: { label: "Sign up for news and updates" },
    phone: { label: "Phone", required: false },
    message: { label: "Message", required: true, placeholder: "Tell Dustin a bit about what you're looking for..." },
  },
  button: "Send Message",
  // Success and error messages are [TODO] in content/copy.md — visible markers until the text exists.
  // Where submissions go is also [TODO]: set CONTACT_FORM_ENDPOINT (see .env.example).
  messages: { success: "[ SUCCESS MESSAGE NEEDED ]", error: "[ ERROR MESSAGE NEEDED ]" },
  // Validation messages, worded like the reference form (Squarespace)
  errors: {
    summary: "Form submission failed. Review the following information:",
    required: "is required.",   // "First Name is required."
    email: "Email is not valid. Email addresses should follow the format user@domain.com.",
    phone: "Phone is not valid. Phone numbers should have 10 to 15 digits, for example (415) 555-0123.",
  },
};

export type Post = { date: string; dateLabel: string; title: string; href: string; excerpt: string; image?: string; tags?: string[] };

// Every blog post, newest first: title, date, URL, excerpt, cover and tags (content/blog/posts.json).
// Bodies are content/blog/<slug>.mdx. Tags use the seven categories in blog.categories.
export const posts: Post[] = postsData as Post[];

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
  label: "ABOUT",
  headline: "Meet Dustin Chaveleh",
  subheadline: "San Francisco REALTOR®",
  smallPrint: "CA DRE # 02368948",
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
    publication: "Business Insider",
    // alt text for the three images is [TODO] in content/copy.md
    images: ["/images/press/business-insider-card.webp", "/images/press/business-insider-2.webp", "/images/press/business-insider-3.webp"],
    body: [
      "In August 2026, Business Insider featured my fitness transformation as part of their longevity series, The Long-Term Investment. The short version: I rebuilt my training and nutrition from the ground up, and it ended up reshaping more than my physique — it gave me the confidence and consistency that helped me close my first deal less than a year later.",
      "The habits weren't complicated. Show up, track progress, trust the process. Turns out that's a pretty good blueprint for building a business too.",
    ],
    button: { label: "Read the full article on Business Insider", href: "https://www.businessinsider.com/fitness-transformation-burned-fat-built-muscle-launched-real-estate-career-2026-8" } as LinkItem,
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
    { title: "Home Price Appreciation Over Time — San Francisco vs California" }, // data, legend and sources: content/market-charts.json
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
    links: [
      { label: "Keller Williams Market Report", href: "/s/KW-Advisors-San-Francisco-Market-Report-June-2026.pdf" },
      { label: "SF City Data Portal", href: "https://data.sfgov.org/browse?sortBy=relevance&page=1&pageSize=20" },
    ] as LinkItem[],
    button: { label: "Start Your Property Search", href: "https://zenlist.com/a/dustin.chaveleh" } as LinkItem,
  },
};

// Property search (Home and Market Update) — DRAFT from Dustin's post "Ranking the Best Platforms for Home
// Searching (2026 Guide)", awaiting his approval (content/copy.md → Property search)
export const propertySearch = {
  label: "PROPERTY SEARCH",
  headline: "Zenlist is what I use when it's time to hunt.",
  body: "Public portals are fine for window shopping. Zenlist pulls straight from the local MLS, so new listings reach you when they reach me, not a day or two later.",
  points: [
    { title: "“Coming Soon” access", text: "Listings appear on your feed hours or days before Zillow and Redfin pull them in." },
    { title: "Chat on the listing", text: "No more emailing Zillow links or texting screenshots. We talk right on the listing card." },
    { title: "Filters that matter", text: "Architectural style, HOA fee caps, exact school borders. And no ads." },
  ],
  note: "Access is by invite from a licensed agent. Request it and I'll approve you.",
  button: { label: "Start Your Property Search", href: "https://zenlist.com/a/dustin.chaveleh" } as LinkItem,
};

// Blog (/blog)
export const blog = {
  headline: "The San Francisco Real Estate Blog",
  categories: ["Buyer Resources", "condo", "Home Ownership", "Listings", "Market News", "Neighborhoods", "Things to Do"],
  /** /blog/tag/Neighborhoods: every neighborhood from the home rail above the neighborhood posts */
  neighborhoodsPage: { all: "All neighborhoods", posts: "Neighborhood posts", guide: "Read the guide" },
  button: { label: "Read the blog", href: "/blog" } as LinkItem,
};


// Work with Dustin (/work-with-dustin)
export const workWithDustin = {
  label: "GET IN TOUCH",
  headline: "Ready to make your move?",
  body: "Whether you're just starting to think about buying or you've already found a place you love, Dustin is here to help you figure out the next step. Clear guidance, straightforward communication, and support at every stage of the process.",
  details: home.contact.details,
};

// Play Real Estate IQ (/playrealestateiq) — the existing game is embedded, not rebuilt; the hero copy lives inside it
export const realEstateIQ = {
  title: "Real Estate IQ — Guess SF Home Prices",
};
