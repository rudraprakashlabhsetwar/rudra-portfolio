import type { ExperienceItem, SkillCategory, ProjectContribution, EventItem, EducationItem } from '../types';

export const personalInfo = {
  name: "Rudra Labhasetwar",
  shortName: "Rudra",
  handle: "0xRudrax",
  title: "Web3 Business Development & Ecosystem Growth",
  tagline: "Connecting protocols, scaling communities, and driving blockchain adoption through strategic partnerships and on-ground ecosystem advocacy.",
  location: "Wardha, Maharashtra, India",
  email: "rudraprakashlabhasetwar@gmail.com",
  phone: "+91 89752 14076",
  phoneRaw: "918975214076",
  resumePath: "/Rudra_Labhasetwar_Resume.pdf",
  photoPath: "/rudra-devcon.jpg",
  availabilityStatus: "Open for Web3 BD & Ecosystem Roles",
  socials: {
    x: "https://x.com/0xRudrax",
    xHandle: "@0xRudrax",
    linkedin: "https://www.linkedin.com/in/rudra-labhasetwar",
    github: "https://github.com/0xRudrax",
    telegram: "https://t.me/0xRudrax",
  },
  bioSummary: `Web3 business development and community growth professional with hands-on experience in ecosystem growth, partnership development, and user acquisition across X, Telegram, and Instagram. Owns social growth and user onboarding at Cryptonix, represented TokenScape as a brand ambassador, and builds partnerships with regional blockchain communities and institutions as a VidarbhaDAO member. Volunteered at India Blockchain Week, ETH Mumbai, and Devcon 8, with experience in event coordination and stakeholder engagement. B.Tech Computer Engineering student with the technical fluency to engage developers and protocol teams.`,
  corePillars: [
    {
      title: "Partnership Development",
      description: "Securing strategic alliances, MoUs, and joint initiatives between protocols, DAOs, builder hubs, and academic institutions.",
      icon: "Handshake"
    },
    {
      title: "Ecosystem Growth & Acquisition",
      description: "Driving user sign-ups, wallet connections, and community expansion through targeted campaigns, AMAs, and quests.",
      icon: "TrendingUp"
    },
    {
      title: "Community & Content Strategy",
      description: "Owning content cadences, high-retention community engagement, and strategic KOL partnerships across X and Telegram.",
      icon: "Users"
    },
    {
      title: "Technical Engineering Fluency",
      description: "Pursuing B.Tech in Computer Engineering (2023–2027) with deep architectural fluency to communicate natively with protocol developers.",
      icon: "Code"
    }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "cryptonix",
    role: "Social Media Lead",
    organization: "Cryptonix",
    period: "2025 - Present",
    badge: "Current Role",
    description: "Owning content strategy, user onboarding funnels, and multi-platform social growth across decentralized networks.",
    keyResponsibilities: [
      "Grew X, Instagram, and Telegram audiences by owning end-to-end content strategy, posting cadence, and daily community engagement.",
      "Drove user sign-ups and onboardings through targeted campaigns, AMAs, and quests funneling social traffic directly to product conversion.",
      "Raised average engagement rate by tracking post performance and KPIs in analytics tools and iterating on high-performing content formats.",
      "Expanded community reach through strategic co-marketing partnerships with KOLs, Web3 projects, and developer communities."
    ],
    skillsGained: [
      "Social Media Strategy",
      "User Acquisition & Onboarding",
      "Content Strategy",
      "KOL Partnerships",
      "Engagement Analytics"
    ],
    impactTags: ["X Growth", "Telegram Communities", "Campaigns & AMAs", "User Onboarding", "KOL Partnerships"]
  },
  {
    id: "tokenscape",
    role: "Ambassador",
    organization: "TokenScape",
    period: "Jan 2025 - Mar 2025",
    badge: "Ambassador Role",
    description: "Spearheaded brand ambassadorship, community growth, and bidirectional market feedback between users and core engineers.",
    keyResponsibilities: [
      "Onboarded active users to TokenScape by representing the project across social platforms and at Web3 ecosystem events.",
      "Delivered structured rounds of market feedback to the core team, driving informed enhancements in product messaging, UX, and outreach.",
      "Promoted key ecosystem initiatives through targeted engagement with active decentralized communities and token holders.",
      "Organized community discussions to clarify protocol mechanics and foster ecosystem adoption."
    ],
    skillsGained: [
      "Ecosystem Outreach",
      "Brand Ambassadorship",
      "User Onboarding",
      "Market Feedback Analysis",
      "Stakeholder Engagement"
    ],
    impactTags: ["Ambassadorship", "Ecosystem Outreach", "Product Feedback", "User Onboarding"]
  },
  {
    id: "vidarbhadao",
    role: "Member, Partnerships & Ecosystem Growth",
    organization: "VidarbhaDAO",
    period: "2025 - Present",
    badge: "Ecosystem Builder",
    description: "Driving regional blockchain alliances, institutional collaborations, and grassroots Web3 builder growth.",
    keyResponsibilities: [
      "Secured partnerships with regional blockchain communities and educational institutions through systematic outreach and stakeholder alignment.",
      "Increased regional Web3 awareness and builder participation by co-organizing community meetups, workshops, and hackathons.",
      "Established pipelines connecting regional engineering talent with national hackathons, builder grants, and protocol opportunities.",
      "Facilitated educational initiatives demystifying decentralized technologies and governance for university students."
    ],
    skillsGained: [
      "Partnership Development",
      "Lead Generation",
      "Institutional Alliances",
      "Event Coordination",
      "Stakeholder Engagement"
    ],
    impactTags: ["DAO Partnerships", "Regional Web3 Hub", "Institutional Alliances", "Grassroots Growth"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Business Development",
    description: "Strategic expansion, deal flow, and ecosystem partnership building.",
    skills: [
      {
        name: "Partnership Development",
        level: "Specialist",
        description: "Structuring collaborative agreements, joint initiatives, and institutional alignments.",
        iconName: "Handshake"
      },
      {
        name: "Ecosystem Growth",
        level: "Specialist",
        description: "Formulating organic acquisition funnels, builder onboarding, and adoption playbooks.",
        iconName: "Globe"
      },
      {
        name: "Stakeholder Engagement",
        level: "Advanced",
        description: "Nurturing relationships across founders, DAO governors, investors, and developer teams.",
        iconName: "Share2"
      },
      {
        name: "Lead Generation & Outreach",
        level: "Advanced",
        description: "Proactive identification and qualification of high-value collaboration targets.",
        iconName: "Briefcase"
      }
    ]
  },
  {
    title: "Growth & Community",
    description: "Community building, user acquisition funnels, and multi-channel marketing.",
    skills: [
      {
        name: "Community Management",
        level: "Advanced",
        description: "Cultivating high-retention Telegram, Discord, and X communities with structured onboarding.",
        iconName: "Users"
      },
      {
        name: "User Acquisition & Onboarding",
        level: "Advanced",
        description: "Designing quests, AMAs, and campaigns to convert social engagement into active users.",
        iconName: "TrendingUp"
      },
      {
        name: "Social Media & Content Strategy",
        level: "Advanced",
        description: "Crafting narratives, posting cadences, and high-engagement content across X and Instagram.",
        iconName: "Megaphone"
      },
      {
        name: "Event Coordination",
        level: "Proficient",
        description: "Managing on-site logistics, registration, and attendee experience at major conferences.",
        iconName: "Calendar"
      }
    ]
  },
  {
    title: "Web3 Ecosystems",
    description: "Protocol literacy and decentralized network mechanisms.",
    skills: [
      {
        name: "Blockchain Fundamentals",
        level: "Core Strength",
        description: "Deep understanding of consensus, distributed ledgers, and layer-1/layer-2 primitives.",
        iconName: "Layers"
      },
      {
        name: "DAOs & Governance",
        level: "Core Strength",
        description: "Hands-on participation in decentralized governance, proposals, and community treasury models.",
        iconName: "Compass"
      },
      {
        name: "Ethereum Ecosystem",
        level: "Core Strength",
        description: "Familiarity with EVM standards, rollups, DeFi protocols, and smart contract flows.",
        iconName: "Zap"
      },
      {
        name: "Token Communities",
        level: "Core Strength",
        description: "Managing community dynamics, token incentives, and ecosystem advocacy.",
        iconName: "Lightbulb"
      }
    ]
  },
  {
    title: "Analytics & Tools",
    description: "Data-driven optimization and execution platforms.",
    skills: [
      {
        name: "Engagement Analytics & KPIs",
        level: "Core Strength",
        description: "Tracking follower retention, conversion funnels, and post impressions to iterate strategy.",
        iconName: "BarChart3"
      },
      {
        name: "X (Twitter) & Telegram Tools",
        level: "Core Strength",
        description: "Expert utilization of native analytics, bots, broadcast channels, and community suites.",
        iconName: "MessageSquare"
      },
      {
        name: "Notion & Discord",
        level: "Core Strength",
        description: "Workflow organization, documentation, channel architecture, and team syncs.",
        iconName: "FileText"
      },
      {
        name: "Canva & Visual Assets",
        level: "Core Strength",
        description: "Producing eye-catching graphics, event banners, and social collateral for campaigns.",
        iconName: "Zap"
      }
    ]
  }
];

export const projectsAndContributions: ProjectContribution[] = [
  {
    id: "vidarbhadao-network",
    title: "Regional Web3 Ecosystem & Institutional Alliance",
    role: "Member & Partnership Driver",
    organization: "VidarbhaDAO",
    period: "2025 - Present",
    summary: "Initiative to establish structured partnerships between grassroots regional developer communities, universities, and broader Web3 ecosystems.",
    details: [
      "Secured collaborations and MoUs with regional engineering institutions and student tech clubs.",
      "Co-organized meetups, workshops, and hackathons to expand regional builder onboarding.",
      "Connected local developer talent with national hackathons and Web3 grant pipelines."
    ],
    tags: ["DAO Partnerships", "Ecosystem Growth", "Grassroots", "Institutional Outreach"],
    featured: true
  },
  {
    id: "cryptonix-growth",
    title: "Multi-Platform Social Growth & Community Onboarding Engine",
    role: "Social Media Lead",
    organization: "Cryptonix",
    period: "2025 - Present",
    summary: "Strategic management of social communication channels across X, Telegram, and Instagram to support organic user onboarding.",
    details: [
      "Designed and executed regular content calendars targeting Web3 enthusiasts and potential users.",
      "Conducted AMAs, community quests, and campaigns that funneled social audiences into active product users.",
      "Analyzed engagement metrics and KPIs to continually iterate on high-converting content formats."
    ],
    tags: ["Social Media Strategy", "User Onboarding", "Telegram Growth", "X Engagement"],
    featured: true
  },
  {
    id: "tokenscape-advocacy",
    title: "Ambassador Outreach & Market Intelligence Loop",
    role: "Ambassador",
    organization: "TokenScape",
    period: "Jan 2025 - Mar 2025",
    summary: "Ecosystem representation and direct market feedback program connecting end-users with the core project roadmap.",
    details: [
      "Represented TokenScape across social platforms and Web3 community hubs to drive user onboarding.",
      "Gathered and structured qualitative market feedback to guide product, messaging, and outreach optimizations.",
      "Promoted ecosystem campaigns and features to boost decentralized community engagement."
    ],
    tags: ["Ambassadorship", "Ecosystem Outreach", "Market Research", "User Feedback"],
    featured: true
  },
  {
    id: "event-field-operations",
    title: "Global Web3 Conference Operations & On-Ground Coordination",
    role: "Volunteer & Representative",
    organization: "Devcon 8 • ETH Mumbai • IBW",
    period: "2025 - 2026",
    summary: "Active on-ground field involvement supporting major international and national Ethereum and Web3 conferences.",
    details: [
      "Supported event operations for high-attendance summits by coordinating registration, logistics, and speaker/sponsor needs at Devcon 8.",
      "Volunteered at ETH Mumbai, supporting hackathon builders, mentors, and community attendees.",
      "Generated qualified connections with founders, protocols, and investors during India Blockchain Week (IBW 2025 & 2026)."
    ],
    tags: ["Devcon 8", "ETH Mumbai", "IBW", "Event Operations", "On-Ground Networking"]
  }
];

export const eventsList: EventItem[] = [
  {
    id: "devcon-8",
    title: "Devcon 8 (Devcon VIII)",
    role: "Conference Volunteer & Ecosystem Participant",
    location: "Southeast Asia",
    year: "2024 / 2025",
    description: "The flagship global gathering for the Ethereum ecosystem. Volunteered on-site, assisted international attendees and developers, and engaged with Ethereum researchers, core developers, and infrastructure teams.",
    badge: "Global Ethereum Conference",
    highlight: true
  },
  {
    id: "eth-mumbai",
    title: "ETH Mumbai",
    role: "Event Volunteer",
    location: "Mumbai, India",
    year: "2025",
    description: "Supported India's premier Ethereum community event. Facilitated hackathon logistics, guided builders, and connected with regional builders and protocols.",
    badge: "Flagship Indian Hackathon"
  },
  {
    id: "ibw-2025",
    title: "India Blockchain Week (IBW 2025)",
    role: "Event Representative",
    location: "Bangalore, India",
    year: "2025",
    description: "Represented ecosystem initiatives, interacted with international Web3 founders, venture funds, and protocol BD leads during India's flagship blockchain week.",
    badge: "Industry Summit"
  },
  {
    id: "ibw-2026",
    title: "India Blockchain Week (IBW 2026)",
    role: "Event Representative",
    location: "Bangalore, India",
    year: "2026",
    description: "Continuing active ecosystem presence, strengthening institutional relationships, and expanding Web3 partnerships across key stakeholder groups.",
    badge: "Upcoming & Continuous Presence"
  }
];

export const educationData: EducationItem = {
  institution: "Bajaj Institute of Technology, Wardha",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Engineering",
  status: "Class of 2023 – 2027 (Expected)",
  period: "2023 – 2027",
  location: "Wardha, Maharashtra, India",
  highlights: [
    "Rigorous curriculum covering Data Structures, Algorithms, Computer Networks, Database Systems, and Distributed Computing.",
    "Applying technical fluency to evaluate smart contracts, protocol architectures, and decentralized developer workflows.",
    "Active participant in technical student clubs, hackathons, and regional blockchain awareness drives."
  ]
};

export const achievements = [
  {
    title: "Devcon 8 Volunteer",
    organization: "Ethereum Foundation",
    description: "Selected to volunteer and support operations at Devcon VIII, connecting directly with global Web3 researchers and builders.",
    category: "Global Conference",
    icon: "Award"
  },
  {
    title: "ETH Mumbai Volunteer",
    organization: "ETH India / Local Community",
    description: "Contributed to on-ground execution of ETH Mumbai, assisting hackers and community leads.",
    category: "Community Hackathon",
    icon: "ShieldCheck"
  },
  {
    title: "Tokenscape Ambassador",
    organization: "TokenScape",
    description: "Recognized ambassador driving user onboarding, ecosystem outreach, and community feedback loops.",
    category: "Ambassadorship",
    icon: "Star"
  },
  {
    title: "VidarbhaDAO Strategic Partnership Builder",
    organization: "VidarbhaDAO",
    description: "Spearheading regional partnerships to bring Web3 awareness and developer opportunities to Central India.",
    category: "Ecosystem Leadership",
    icon: "Zap"
  }
];
