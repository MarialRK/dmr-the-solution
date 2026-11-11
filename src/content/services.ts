export type Service = {
  slug: string
  number: string
  name: string
  group: string
  availability: string
  action: string
  summary: string
  description: string
  problem: string
  scope: string[]
  receives: string
  audience?: string
  process?: string[]
  standards?: string[]
  limits?: string[]
  examples?: string[]
  visuals?: { src: string; alt: string; width: number; height: number; caption: string }[]
  visualsNote?: string
}

export const groups = ['Creative and communication', 'Digital and technology', 'Business and advisory']

/** Old service addresses, sent to the service that now covers them. */
export const formerServices: Record<string, string> = {
  'business-cards': 'graphic-design-branding',
  'social-media-management': 'digital-branding-communication',
  'ai-video-production': 'digital-branding-communication',
  'software-digital-solutions': 'software-technology-solutions',
  'business-documentation': 'business-presentations-documentation',
  'professional-writing': 'professional-writing-editing',
  consultancy: 'digital-business-consultancy',
  'esg-advisory': 'digital-business-consultancy',
}

export const services: Service[] = [
  {
    slug: 'graphic-design-branding',
    number: '01',
    name: 'Graphic design and branding',
    group: groups[0],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Logos, identities, business cards and printed materials that make people remember you.',
    description:
      'A strong identity makes a business look established from the first glance. I design logos, brand identities, business cards and materials that stay consistent everywhere they appear, from a signboard to a social media profile.',
    problem:
      'Many good businesses look smaller than they are: a logo made in a hurry, colours that change from one document to the next, cards and materials that do not match. Clients notice, even when they do not say so.',
    process: [
      'You tell me about your business, your customers and what you want to be known for.',
      'I develop design directions and share them with you.',
      'We refine the chosen direction together.',
      'I prepare the final logo, colours and materials.',
      'You receive every file you need, ready for print and screen.',
    ],
    audience: 'New businesses that need an identity from scratch, and established ones whose look no longer matches the quality of their work.',
    scope: [
      'Logo design',
      'Corporate identity and brand guidelines',
      'Business cards in every format: classic printed, foil, embossed and letterpress, metal, frosted, recycled kraft, square and vertical',
      'Smart NFC and QR code cards, digital business card pages and phone wallet passes',
      'Letterheads and corporate stationery',
      'Brochures, flyers and posters',
      'Company profile and catalogue design',
      'Social media graphics',
    ],
    receives:
      'Final design files in every format you need for print and screen, with simple guidelines so your brand stays consistent. Business cards come as print-ready files for your printer, and a live digital card when it is included.',
    limits: ['Printing, special card materials and NFC chips are priced separately, so you only pay for what you choose.'],
    examples: [
      'Logos for DMR, Nile Green Group, Nile Green Packaging and Nile Vertex Properties',
      'Nile Vertex sales and rental property catalogues',
      'DMR business card and matching digital card',
    ],
    visualsNote: 'The logos, catalogues and DMR card are my own work in use. Cards marked as sample designs show each format; their brand names are illustrative.',
    visuals: [
      { src: '/logos/dmr-logo-black.svg', alt: 'DMR The Solution logo', width: 3766, height: 1112, caption: 'DMR — The Solution' },
      { src: '/logos/nile-green-group.jpg', alt: 'Nile Green Group logo', width: 1080, height: 590, caption: 'Nile Green Group' },
      { src: '/logos/nile-green-packaging.jpg', alt: 'Nile Green Packaging logo', width: 1024, height: 1024, caption: 'Nile Green Packaging' },
      { src: '/logos/nile-vertex-properties.jpg', alt: 'Nile Vertex Properties logo', width: 906, height: 1080, caption: 'Nile Vertex Properties' },
      { src: '/work/nvp-sales-cover.jpg', alt: 'Cover of the Kigali Property Sales and Investment Collection catalogue', width: 906, height: 1280, caption: 'Nile Vertex sales catalogue cover' },
      { src: '/work/nvp-property-kibagabaga.jpg', alt: 'Catalogue property page for a villa in Kibagabaga', width: 890, height: 1280, caption: 'Nile Vertex catalogue property page' },
      { src: '/work/dmr-business-card.jpg', alt: 'DMR business card beside a phone showing the matching digital card', width: 1600, height: 1000, caption: 'My own DMR card and digital card' },
      { src: '/work/card-concept-dmr-wallet.jpg', alt: 'DMR phone wallet pass and digital profile', width: 1600, height: 1000, caption: 'DMR wallet pass and digital profile' },
      { src: '/work/card-concept-smart.jpg', alt: 'Concept smart NFC card with a digital profile on a phone', width: 1600, height: 1000, caption: 'Smart NFC card (sample design)' },
      { src: '/work/card-concept-premium.jpg', alt: 'Concept black card with gold foil lettering', width: 1600, height: 1000, caption: 'Premium gold foil card (sample design)' },
      { src: '/work/card-concept-metal.jpg', alt: 'Concept brushed metal and matte black cards', width: 1600, height: 1000, caption: 'Metal card (sample design)' },
      { src: '/work/card-concept-frosted.jpg', alt: 'Concept frosted transparent cards', width: 1600, height: 1000, caption: 'Frosted transparent card (sample design)' },
      { src: '/work/card-concept-letterpress.jpg', alt: 'Concept letterpress card with embossed monogram', width: 1600, height: 1000, caption: 'Letterpress and embossed card (sample design)' },
      { src: '/work/card-concept-recycled.jpg', alt: 'Concept recycled kraft paper cards', width: 1600, height: 1000, caption: 'Recycled kraft card (sample design)' },
      { src: '/work/card-concept-classic.jpg', alt: 'Concept classic two-sided printed card', width: 1600, height: 1000, caption: 'Classic two-sided card (sample design)' },
      { src: '/work/card-concept-vertical.jpg', alt: 'Concept vertical two-sided cards', width: 1600, height: 1000, caption: 'Vertical card (sample design)' },
      { src: '/work/card-concept-square.jpg', alt: 'Concept square mini card set', width: 1600, height: 1000, caption: 'Square mini card set (sample design)' },
    ],
  },
  {
    slug: 'website-design-development',
    number: '02',
    name: 'Website design and development',
    group: groups[1],
    availability: 'Available now, with defined project scopes',
    action: 'Request a quote',
    summary: 'Professional websites with a clear scope, built and looked after properly.',
    description:
      'I design and build websites that present you or your organisation well and are easy for visitors to use, with a clear scope agreed before any work begins.',
    problem:
      'For many clients, your website is the first and only place they decide whether to get in touch. If it is hard to find, slow or out of date, they quietly move on.',
    process: [
      'We agree what the site needs to do and write it into a clear scope.',
      'I design the pages and share them for your review.',
      'I build the site and test it on computers and phones.',
      'The site goes live on your domain.',
      'You receive handover notes, and ongoing maintenance if you want it.',
    ],
    audience: 'Professionals, personal brands, startups, small and medium-sized businesses and organisations.',
    scope: [
      'Personal and portfolio websites',
      'Startup and small business websites',
      'Corporate and organisation websites',
      'Landing pages',
      'Online shops, scoped carefully around what you sell',
      'Website redesign and improvement',
      'Maintenance and updates on an agreed plan',
    ],
    receives:
      'A tested website that works on computers and phones, live on your domain, with handover notes. I remain responsible for delivery, testing and any maintenance we agree.',
    limits: ['Hosting, domain names and paid plugins are separate costs, listed clearly in your quotation.'],
  },
  {
    slug: 'business-presentations-documentation',
    number: '03',
    name: 'Business presentations and documentation',
    group: groups[2],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Pitch decks, proposals and company profiles that help people say yes.',
    description:
      'The right document can open doors that a conversation alone cannot. I write and design pitch decks, proposals, company profiles and business plans that explain your business clearly to the people you need to convince.',
    problem:
      'Good ideas and real businesses are often held back by documents that are unclear, too long or unconvincing, at exactly the moment a funder, partner or client is deciding.',
    process: [
      'You share your business, your audience and what the document needs to achieve.',
      'I structure the content and agree the outline with you.',
      'I write and design the full document or presentation.',
      'We refine it through agreed revision rounds.',
      'You receive the final version, ready to send or present.',
    ],
    audience: 'Founders, small businesses, NGOs and organisations preparing to approach funders, partners, government or clients.',
    scope: [
      'Pitch decks and investor presentations',
      'Business proposals and project proposals',
      'Company profiles and business profiles',
      'Executive profiles',
      'Business plans and concept notes',
      'Reports and professional presentations',
    ],
    receives: 'A finished, professionally designed document or presentation in the format you need, with revision rounds agreed in advance.',
    limits: ['A strong document improves your chances, but no one can guarantee funding, approval or investment.'],
    visuals: [
      { src: '/work/repos-masterclass-title.jpg', alt: 'Title slide of a masterclass on waste management in solar PV systems', width: 1280, height: 728, caption: 'Masterclass presentation for the REPOS Training of Trainers Programme' },
      { src: '/images/demo-day-prize.jpg', alt: 'Daniel on stage with a US$30,000 prize cheque made out to Nile Green Packaging', width: 1280, height: 960, caption: 'The pitch that won ALU Ventures Lab Demo Day for Nile Green Packaging, December 2025' },
    ],
  },
  {
    slug: 'digital-branding-communication',
    number: '04',
    name: 'Digital branding and communication',
    group: groups[0],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'A consistent, professional presence on the platforms your audience actually uses.',
    description:
      'I design and manage how organisations and personal brands appear online, so your accounts say clearly who you are and what you do, and keep saying it.',
    problem:
      'Accounts that post in bursts and then go quiet, look different on every platform, or never quite say what the business does. People judge a business by its page long before they make contact.',
    process: [
      'We agree your goals, your audience and the platforms that matter.',
      'I prepare a plan and content calendar for your approval.',
      'I create and schedule the posts and graphics.',
      'I manage engagement within the limits we agree.',
      'You receive regular reports on how your accounts are performing.',
    ],
    audience: 'Businesses, NGOs and institutions that need a steady, credible presence, and professionals building a personal brand.',
    scope: [
      'Social media design and branding kits',
      'Profile and page optimisation',
      'Social media management on Facebook, Instagram, LinkedIn, X and other relevant platforms',
      'Content planning, captions and scheduling',
      'Digital campaigns and promotional content',
      'Community management',
      'Performance monitoring and reporting',
    ],
    receives:
      'As agreed in your plan: a branding kit, a content calendar, posts and graphics, scheduling and publishing, community management, and regular performance reports.',
    limits: [
      'Growth comes from consistent, genuine work, so I do not promise specific follower numbers, engagement rates or sales.',
      'I never use purchased followers or artificial engagement.',
    ],
  },
  {
    slug: 'software-technology-solutions',
    number: '05',
    name: 'Software and technology solutions',
    group: groups[1],
    availability: 'By enquiry',
    action: 'Start an enquiry',
    summary: 'Digital tools for real problems, starting with a conversation.',
    description:
      'Sometimes a well-built digital tool can save hours of manual work every week. Sometimes it cannot. We start with a conversation to find out which is true for you, and whether a solution can be delivered and supported properly.',
    problem: 'Processes that depend on paper, spreadsheets passed around by hand, or information that lives in too many places.',
    process: [
      'You describe the process or problem.',
      'I assess honestly whether a digital tool is the right answer.',
      'If it is, we agree a written scope before anything is built.',
      'I build and test it in stages, so you see progress early.',
      'You receive the working system, documentation and agreed support.',
    ],
    audience: 'Businesses and organisations with a clear process that costs them time, money or accuracy.',
    scope: [
      'Web applications',
      'Business systems and databases',
      'Process automation',
      'Data dashboards',
      'Technical support for systems I build',
    ],
    receives: 'An honest initial assessment. Any build goes ahead only under a separately agreed scope, with documentation and the support we agree.',
    limits: ['Larger systems are scoped in stages and taken on only when they can be delivered and supported properly.'],
    examples: ['SuddSight, a flood-risk prediction research prototype'],
  },
  {
    slug: 'professional-writing-editing',
    number: '06',
    name: 'Professional writing and editing',
    group: groups[2],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'CVs, biographies, letters and reports that are clear, credible and ready to use.',
    description:
      'Good writing makes people take you seriously. I write, edit and format professional documents so they say exactly what you mean, in a way your reader can follow.',
    problem: 'Important opportunities are lost to a CV that undersells, a letter that rambles or a report that buries its main point.',
    process: [
      'You share the material, the reader and the purpose.',
      'I agree the structure with you.',
      'I write or edit the document and format it properly.',
      'You review it, and I make the agreed revisions.',
    ],
    audience: 'Professionals, job seekers, executives, businesses, NGOs and institutions.',
    scope: [
      'CVs and cover letters',
      'Professional biographies',
      'Business and institutional correspondence',
      'Reports and project documentation',
      'Proposal writing',
      'Editing and proofreading',
      'Document formatting',
    ],
    receives: 'A finished document, edited and formatted, ready for its reader, with revision rounds agreed in advance.',
    visuals: [
      { src: '/work/nvp-sales-intro.jpg', alt: 'Introduction page of the Nile Vertex sales catalogue', width: 990, height: 1280, caption: 'Catalogue writing for Nile Vertex Properties' },
    ],
  },
  {
    slug: 'digital-business-consultancy',
    number: '07',
    name: 'Digital and business consultancy',
    group: groups[2],
    availability: 'Available in defined areas',
    action: 'Request a quote',
    summary: 'Practical advice from someone who has built things himself.',
    description:
      'Practical advice drawn from building Nile Green Packaging and SuddSight, not from theory. I work in the areas where I have real experience, and I will tell you if your question falls outside them.',
    problem:
      'Founders and organisations often need a practical second opinion before committing time or money, from someone who has faced similar decisions.',
    process: [
      'You explain the decision or challenge you are facing.',
      'We agree the questions the consultation should answer.',
      'We meet for the agreed sessions.',
      'You receive written recommendations you can act on.',
    ],
    audience: 'Early-stage founders, small businesses and organisations planning a new venture, product, system or funding application.',
    scope: [
      'Technology planning: choosing a sensible approach for a website, system or digital product',
      'Moving a business process from paper to digital',
      'Starting and structuring an early-stage venture',
      'Turning a business or project idea into a defined concept',
      'Preparing for competitive funding and pitching',
      'Sustainable and circular-economy ventures at an early stage',
    ],
    receives: 'Agreed consultation sessions and written recommendations.',
    examples: ['Founding Nile Green Packaging and taking it from pilot production towards automated manufacturing'],
    limits: ['If your request falls outside these areas, I will tell you.'],
  },
  {
    slug: 'personal-executive-branding',
    number: '08',
    name: 'Personal and executive branding',
    group: groups[0],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'A professional identity that matches who you are and where you are going.',
    description:
      'People look you up before they meet you. I help professionals, founders and executives present themselves consistently, from their LinkedIn profile and biography to their card and personal website.',
    problem:
      'Capable people are often hard to find online, or appear differently everywhere they are found: an old photo here, an outdated title there, no clear sense of what they do.',
    process: [
      'We talk about your work, your goals and who needs to find you.',
      'I review how you currently appear and agree what to change.',
      'I write and design the materials.',
      'We refine them together until they sound like you.',
    ],
    audience: 'Professionals, founders, executives, consultants and people moving into a new role or market.',
    scope: [
      'Personal brand positioning',
      'LinkedIn profile development',
      'Professional biographies and executive profiles',
      'Personal logos and monograms',
      'Personal business cards and digital cards',
      'Personal websites',
      'Presentation materials for talks and meetings',
    ],
    receives: 'A consistent set of materials, from profile text to card and website, in the formats you need.',
    examples: ['DMR — The Solution itself: my own logo, business card, digital card and this website'],
    limits: ['I present you accurately. I do not write claims, titles or achievements you cannot support.'],
    visuals: [
      { src: '/logos/dmr-logo-black.svg', alt: 'DMR The Solution logo', width: 3766, height: 1112, caption: 'My personal brand mark' },
      { src: '/work/dmr-business-card.jpg', alt: 'DMR business card beside a phone showing the matching digital card', width: 1600, height: 1000, caption: 'My own card and digital card' },
    ],
  },
]
