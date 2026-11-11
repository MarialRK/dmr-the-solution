export const site = {
  name: 'Daniel Marial Reng Kudum',
  brand: 'DMR — The Solution',
  tagline: 'The Solution',
  whatsapp: 'https://wa.me/250798619965',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-marial-reng-kudum-6b128b364' },
    { label: 'X', href: 'https://x.com/marial_reng' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1KNH3yjhAS/' },
  ],
}

export const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const selectedWork: { title: string; status: string; summary: string; href?: string }[] = [
  {
    title: 'SuddSight',
    status: 'Deployed research prototype',
    href: '/ventures/suddsight',
    summary:
      'Flood-risk prediction for South Sudan’s Sudd Wetland, using historical satellite data and machine learning that explains its reasoning.',
  },
  {
    title: 'GreenSphere',
    status: 'In development at Nile Green Packaging',
    summary: 'An environmental data platform for plastic tracking and forest monitoring.',
  },
  {
    title: 'NG-Collect',
    status: 'In development at Nile Green Packaging',
    summary: 'Automated waste classification, built in-house.',
  },
  {
    title: 'Four brand identities',
    status: 'In use',
    summary: 'Logos created for DMR, Nile Green Group, Nile Green Packaging and Nile Vertex Properties.',
  },
]

export const holdingCompany = {
  name: 'Nile Green Group',
  logo: '/logos/nile-green-group.jpg',
  width: 1080,
  height: 590,
  role: 'Founder',
  summary: 'The Kigali-based holding company that owns and invests in the businesses below.',
}

export const ventures = [
  {
    name: 'Nile Green Packaging',
    logo: '/logos/nile-green-packaging.jpg',
    width: 1024,
    height: 1024,
    role: 'Founder. Part of Nile Green Group.',
    summary:
      'Biodegradable paper packaging from Juba, South Sudan, moving from pilot production to automated manufacturing. Winner of ALU Ventures Lab Demo Day in December 2025, with a US$30,000 prize.',
  },
  {
    name: 'Nile Vertex Properties',
    logo: '/logos/nile-vertex-properties.jpg',
    width: 906,
    height: 1080,
    role: 'Part of Nile Green Group.',
    summary: 'Property rentals, sales and investment in Kigali.',
  },
]
