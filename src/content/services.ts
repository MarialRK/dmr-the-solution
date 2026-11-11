export type Service = {
  slug: string
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
}

export const groups = ['Creative and communication', 'Digital and technology', 'Business and advisory']

export const services: Service[] = [
  {
    slug: 'graphic-design-branding',
    name: 'Graphic design and branding',
    group: groups[0],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Logos, identities and materials that make an organisation or person recognisable.',
    description: 'Visual identity and materials that give an organisation or person a clear, consistent appearance.',
    problem: 'A visual presence that is missing, inconsistent or does not match the ambition behind it.',
    scope: [
      'Logo design',
      'Corporate identity development',
      'Corporate and business branding',
      'Brand guidelines',
      'Business cards and stationery',
      'Marketing and promotional materials',
      'Digital graphics',
      'Visual communication',
    ],
    receives: 'Agreed design files in the formats specified in the project scope.',
    examples: [
      'Logos for DMR, Nile Green Group, Nile Green Packaging and Nile Vertex Properties',
      'Nile Vertex sales and rental property catalogues',
      'DMR business card and matching digital card',
    ],
    visuals: [
      { src: '/logos/dmr-logo-black.svg', alt: 'DMR The Solution logo', width: 3766, height: 1112, caption: 'DMR — The Solution' },
      { src: '/logos/nile-green-group.jpg', alt: 'Nile Green Group logo', width: 1080, height: 590, caption: 'Nile Green Group' },
      { src: '/logos/nile-green-packaging.jpg', alt: 'Nile Green Packaging logo', width: 1024, height: 1024, caption: 'Nile Green Packaging' },
      { src: '/logos/nile-vertex-properties.jpg', alt: 'Nile Vertex Properties logo', width: 906, height: 1080, caption: 'Nile Vertex Properties' },
      { src: '/work/dmr-business-card.jpg', alt: 'DMR business card beside a phone showing the matching digital card', width: 1600, height: 1000, caption: 'DMR business card and digital card' },
      { src: '/work/nvp-sales-cover.jpg', alt: 'Cover of the Kigali Property Sales and Investment Collection catalogue', width: 906, height: 1280, caption: 'Nile Vertex sales catalogue cover' },
      { src: '/work/nvp-property-kibagabaga.jpg', alt: 'Catalogue property page for a villa in Kibagabaga', width: 890, height: 1280, caption: 'Nile Vertex catalogue property page' },
    ],
  },
  {
    slug: 'social-media-management',
    name: 'Social media management and digital communication',
    group: groups[0],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Planning, creating and running a consistent presence for people and organisations.',
    description:
      'Planning, creating and managing a consistent social media presence, for individuals building a personal brand and organisations strengthening their digital presence.',
    problem:
      'Accounts that are inactive, inconsistent or disconnected from what the person or organisation wants to be known for.',
    scope: [
      'Social media account management',
      'Social media strategy and planning',
      'Content creation and scheduling',
      'Management of Facebook, Instagram, LinkedIn, X and other relevant platforms',
      'Graphic design for social media',
      'Copywriting, captions and content development',
      'Personal and corporate brand positioning',
      'Page optimisation and profile development',
      'Audience engagement and community management',
      'Social media campaigns and promotional content',
      'Digital presence development and consistency',
      'Performance monitoring and reporting',
    ],
    receives:
      'As agreed in the scope: a plan or content calendar, the agreed posts and graphics, scheduling and publishing, community management within agreed limits, and periodic performance reports.',
    limits: [
      'No promise of specific audience growth, engagement rates or commercial results.',
      'No purchased followers or artificial engagement.',
    ],
  },
  {
    slug: 'ai-video-production',
    name: 'AI-powered video production and campaign content',
    group: groups[0],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Complete videos, from the message and script through to the finished film.',
    description:
      'Turning ideas, information and messages into complete videos through concept development, scriptwriting, AI tools and digital production.',
    problem: 'An important message with no practical way of turning it into engaging video.',
    audience:
      'Individuals and personal brands, businesses and entrepreneurs, NGOs and civil society organisations, development organisations, institutions, campaign teams, and public-awareness and advocacy programmes.',
    scope: [
      'AI-generated promotional videos',
      'Campaign videos for social, business and public-awareness initiatives',
      'Advocacy and awareness videos',
      'Educational and informational videos',
      'Corporate and institutional communication videos',
      'Social media video content',
      'Animated explainer videos',
      'AI-assisted storytelling and visual narratives',
      'Product and service promotional videos',
      'Digital campaign advertisements',
      'Video scripts and storyboarding',
      'AI-generated voiceovers and narration',
      'Subtitles, captions and multilingual video adaptations',
      'Short-form videos for TikTok, Instagram Reels, Facebook and YouTube Shorts',
      'Video content for public messaging and institutional communication',
    ],
    process: [
      'Understand your message and objective.',
      'Develop the creative concept.',
      'Write the script.',
      'Create the storyboard.',
      'Generate or source appropriate visual material.',
      'Produce the video using suitable AI and editing tools.',
      'Add narration, music, subtitles and branding where appropriate.',
      'Deliver the final video in the formats you need.',
    ],
    receives: 'The script, a storyboard if in scope, and the final video in the agreed formats and languages.',
    standards: [
      'AI-generated content is clearly distinguished from real documentary footage.',
      'No fabricated real events, endorsements, people or evidence.',
      'A real person’s face or voice is used only with that person’s consent.',
      'Music and visual material must be licensed for your use.',
    ],
    limits: ['No promise of views, reach or campaign outcomes.'],
    examples: ['A personal awareness video for World Breast Cancer Awareness Month, recorded by me and edited with AI tools'],
    visuals: [
      { src: '/images/awareness-video-still.jpg', alt: 'Still from an awareness video: Daniel speaking to camera with the Nile Green Packaging logo', width: 330, height: 484, caption: 'Breast Cancer Awareness Month video, October 2026' },
    ],
  },
  {
    slug: 'website-design-development',
    name: 'Website design and development',
    group: groups[1],
    availability: 'Available now, with defined project scopes',
    action: 'Request a quote',
    summary: 'Websites with an agreed scope, built around what the site needs to do.',
    description: 'Websites with an agreed scope, designed around what you need the site to do.',
    problem: 'Being hard to find online, or having a website that does not reflect the quality of your work.',
    scope: [
      'Business and corporate websites',
      'Personal and professional websites',
      'Portfolio websites',
      'Landing pages',
      'Website redesign and improvement',
      'Maintenance and updates on an agreed plan',
    ],
    receives:
      'A written scope, a tested responsive website, deployment and handover notes. I am responsible for delivery, testing and any maintenance you agree.',
    limits: ['Complex systems are not offered under this service.'],
    visuals: [
      { src: '/images/dmr-site-home.jpg', alt: 'The DMR — The Solution homepage', width: 1440, height: 900, caption: 'This website' },
    ],
  },
  {
    slug: 'software-digital-solutions',
    name: 'Software and digital solutions',
    group: groups[1],
    availability: 'By enquiry only',
    action: 'Start an enquiry',
    summary: 'A conversation first, to establish whether a digital tool is the right answer.',
    description:
      'A conversation first, to establish whether a digital tool is the right answer and whether it can be delivered and supported responsibly.',
    problem: 'Manual or disconnected processes that may benefit from a simple digital solution.',
    scope: [
      'Smaller web-based tools and systems',
      'Digital platforms',
      'Business process digitalisation',
      'Software development',
      'Digital product development',
      'Technical consultation and digital product support',
    ],
    receives: 'An initial assessment. Any build proceeds only under a separately agreed scope.',
    limits: ['Complex custom systems are not currently offered.'],
    examples: ['SuddSight, a flood-risk prediction research prototype'],
  },
  {
    slug: 'business-documentation',
    name: 'Business documentation and development',
    group: groups[2],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Plans, proposals, profiles and pitch decks for the people who need to say yes.',
    description: 'Documents that explain a business or project clearly to the people who need to say yes.',
    problem: 'Good ideas and real businesses held back by weak or missing documentation.',
    scope: [
      'Business plans',
      'Business profiles',
      'Company profiles',
      'Project proposals',
      'Concept notes',
      'Project concepts',
      'Investment presentations',
      'Pitch decks',
      'Business development documentation and support',
    ],
    receives: 'A finished document in an agreed format, with revision rounds agreed in advance.',
    limits: ['No promise of funding, approval or investment.'],
    examples: ['The pitch materials for Nile Green Packaging, winner of ALU Ventures Lab Demo Day in December 2025'],
    visuals: [
      { src: '/images/demo-day-pitch.jpg', alt: 'Daniel presenting a pitch deck slide titled Solution', width: 994, height: 1280, caption: 'Pitching Nile Green Packaging at ALU Ventures Lab Demo Day, where it won' },
      { src: '/work/nvp-sales-intro.jpg', alt: 'Introduction page of the Nile Vertex sales catalogue', width: 990, height: 1280, caption: 'Company presentation for Nile Vertex Properties' },
    ],
  },
  {
    slug: 'professional-writing',
    name: 'Professional writing and presentations',
    group: groups[2],
    availability: 'Available now',
    action: 'Request a quote',
    summary: 'Reports, documents and presentations that are ready for their audience.',
    description: 'Clear professional writing and presentations for business and institutional audiences.',
    problem: 'Important information that is hard to read, poorly structured or not ready for its audience.',
    scope: [
      'Professional reports',
      'Institutional documents',
      'Business correspondence',
      'Research and project documentation',
      'PowerPoint and professional presentations',
      'Strategic communication materials',
      'Digital content',
    ],
    receives: 'A finished document or presentation, with revision rounds agreed in advance.',
    visuals: [
      { src: '/work/repos-masterclass-title.jpg', alt: 'Title slide of a masterclass on waste management in solar PV systems', width: 1280, height: 728, caption: 'Masterclass presentation for the REPOS Training of Trainers Programme' },
      { src: '/work/nvp-sales-intro.jpg', alt: 'Introduction page of the Nile Vertex sales catalogue', width: 990, height: 1280, caption: 'Catalogue writing for Nile Vertex Properties' },
    ],
  },
  {
    slug: 'consultancy',
    name: 'Technology and business consultancy',
    group: groups[2],
    availability: 'Available in defined areas',
    action: 'Request a quote',
    summary: 'Practical guidance drawn from what I have actually built.',
    description:
      'Practical guidance drawn from what I have actually built, not general expertise across every technology or discipline.',
    problem: 'Needing a practical second opinion before committing time or money.',
    scope: [
      'Starting and structuring an early-stage venture',
      'Preparing for competitive funding and pitching',
      'Sustainable packaging and circular-economy ventures at an early stage',
      'Turning a business or project idea into a defined concept',
      'Digital strategy and choosing a sensible approach for a website or simple digital product',
    ],
    receives: 'Agreed consultation sessions and written recommendations.',
    examples: ['Founding Nile Green Packaging and taking it from pilot production towards automated manufacturing'],
    limits: ['If your request falls outside these areas, I will tell you.'],
    visuals: [
      { src: '/images/demo-day-prize.jpg', alt: 'Daniel on stage with a US$30,000 prize cheque made out to Nile Green Packaging', width: 1280, height: 960, caption: 'Winning competitive funding for Nile Green Packaging, December 2025' },
    ],
  },
  {
    slug: 'esg-advisory',
    name: 'ESG and sustainability advisory',
    group: groups[2],
    availability: 'Available for early-stage work',
    action: 'Request a quote',
    summary: 'A practical starting point for smaller organisations beginning ESG and carbon work.',
    description:
      'A practical starting point for smaller organisations beginning to take ESG and carbon seriously. I completed the Carbon and ESG Analysis programme with University of Cambridge Online.',
    problem: 'Being asked about sustainability by funders or partners, without knowing where to begin.',
    scope: [
      'ESG starting-point review',
      'Introductory carbon analysis: an estimate from your own data, with methods and assumptions stated',
      'ESG and sustainability action plans',
      'ESG and sustainability sections for proposals, profiles and reports',
    ],
    receives: 'A written review, estimate or plan, stating what it can and cannot be relied upon for.',
    limits: [
      'No audit, assurance or verification.',
      'No certification or formal ratings.',
      'No verified carbon credits or offset validation.',
      'No signed-off statutory or regulatory disclosures.',
      'No legal or investment advice.',
    ],
  },
]
