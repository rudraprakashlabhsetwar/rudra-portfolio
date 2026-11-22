import type { ExperienceItem, SkillCategory, ProjectContribution, EventItem, EducationItem } from '../types';

export const personalInfo = {
  name: "Rudra Labhasetwar",
  shortName: "Rudra",
  handle: "0xRudrax",
  title: "Web3 Business Development & Ecosystem Growth",
  tagline: "Connecting ecosystems, driving protocol adoption, and scaling Web3 communities through strategic partnerships.",
  location: "Wardha, Maharashtra, India",
  email: "rudraprakashlabhasetwar@gmail.com",
  phone: "+91 8975214076",
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
  bioSummary: `Web3 Business Development professional with hands-on experience in ecosystem growth, community building, and strategic outreach as a Tokenscape Ambassador. Skilled in identifying growth opportunities, building strategic partnerships, engaging blockchain communities, and driving user acquisition and adoption. Experienced in event coordination, stakeholder engagement, and digital marketing. I bring a relationship-driven approach, strong communication skills, and a genuine passion for helping Web3 projects expand their reach, strengthen their ecosystems, and achieve sustainable business growth.`,
  corePillars: [
    {
      title: "Strategic Partnerships",
      description: "Identifying high-synergy collaboration opportunities between Web3 protocols, DAOs, developer hubs, and academic institutions.",
      icon: "Handshake"
    },
    {
      title: "Ecosystem Growth",
      description: "Accelerating user onboarding, community footprint, and grassroots adoption across key channels including Telegram, X, and on-ground activations.",
      icon: "TrendingUp"
    },
    {
      title: "Community Management",
      description: "Fostering engaged builder and user communities, organizing campaigns, gathering product feedback, and bridging core teams with users.",
      icon: "Users"
    },
    {
      title: "Technical Background",
      description: "Pursuing a B.Tech in Computer Engineering, providing an authentic technical foundation to understand protocols, talk developer language, and evaluate Web3 architectures.",
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
    description: "Leading strategic social media growth, cross-platform engagement, and user onboarding pipelines.",
    keyResponsibilities: [
      "Owned and scaled social media presence and engagement across key Web3 platforms including X (Twitter), Telegram, and Instagram.",
      "Architected targeted growth and engagement campaigns to support new user onboarding and community expansion.",
      "Collaborated with cross-functional stakeholders to align content strategy with broader project growth milestones.",
      "Monitored ecosystem trends and analytics to continuously refine outreach and retention mechanisms."
    ],
    skillsGained: [
      "Social Media Marketing",
      "Community Expansion",
      "User Onboarding",
      "Digital Marketing",
      "Analytics"
    ],
    impactTags: ["X Growth", "Telegram Communities", "User Retention", "Web3 Marketing"]
  },
  {
    id: "tokenscape",
    role: "Ambassador",
    organization: "TokenScape",
    period: "Jan 2025 - Mar 2025",
    badge: "Ambassador Role",
    description: "Spearheaded community advocacy, event representation, and feedback loops between active users and core developers.",
    keyResponsibilities: [
      "Contributed to community growth and user onboarding by representing TokenScape across diverse social platforms and industry events.",
      "Supported ecosystem outreach by proactively engaging users, promoting core initiatives, and driving awareness of features.",
      "Gathered qualitative market feedback and community sentiment, relaying actionable insights back to the core team for product improvement.",
      "Facilitated direct discussions with prospective community members to boost understanding of the protocol."
    ],
    skillsGained: [
      "Ecosystem Outreach",
      "Ambassador Leadership",
      "User Onboarding",
      "Market Feedback Analysis",
      "Stakeholder Engagement"
    ],
    impactTags: ["Ambassadorship", "Ecosystem Outreach", "Product Feedback", "Community Representation"]
  },
  {
    id: "vidarbhadao",
    role: "Member - Strategic Partnerships",
    organization: "VidarbhaDAO",
    period: "2025 - Present",
    badge: "Ecosystem Builder",
    description: "Driving regional blockchain adoption, institutional alliances, and builder empowerment in Central India.",
    keyResponsibilities: [
      "Building strategic partnerships with regional blockchain communities, developer clubs, and educational institutions.",
      "Championing Web3 innovation, local hackathons, and builder onboarding to expand the regional decentralized tech ecosystem.",
      "Facilitating collaboration channels to connect emerging builders with national and global Web3 opportunities.",
      "Organizing grassroots meetups and educational sessions to demystify blockchain technology."
    ],
    skillsGained: [
      "Strategic Partnerships",
      "Grassroots Growth",
      "Institutional Outreach",
      "Event Organization",
      "Relationship Management"
    ],
    impactTags: ["DAO Partnerships", "Regional Web3 Hub", "Institutional Alliances", "Grassroots Growth"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Web3 Business Development",
    description: "Primary competencies driving protocol expansion, user acquisition, and ecosystem scale.",
    skills: [
      {
        name: "Business Development",
        level: "Specialist",
        description: "Identifying growth avenues, structuring collaborative opportunities, and expanding protocol footprint.",
        iconName: "Briefcase"
      },
      {
        name: "Strategic Partnerships",
        level: "Specialist",
        description: "Aligning mutual incentives across DAOs, protocols, communities, and institutional partners.",
        iconName: "Handshake"
      },
      {
        name: "Web3 Ecosystem Growth",
        level: "Advanced",
        description: "Formulating user acquisition funnels, retention tactics, and grassroots builder onboarding.",
        iconName: "Globe"
      },
      {
        name: "Outreach & Networking",
        level: "Advanced",
        description: "High-touch relationship building with founders, researchers, ecosystem leads, and developers.",
        iconName: "Share2"
      }
    ]
  },
  {
    title: "Community & Growth Marketing",
    description: "Multi-channel community orchestration and targeted digital engagement.",
    skills: [
      {
        name: "Community Management",
        level: "Advanced",
        description: "Building thriving, high-retention Telegram, X, and Discord communities with active moderation and support.",
        iconName: "Users"
      },
      {
        name: "Social Media Marketing",
        level: "Advanced",
        description: "Content strategy, audience engagement, and campaign execution tailored to Web3 dynamics.",
        iconName: "Megaphone"
      },
      {
        name: "Event Management",
        level: "Proficient",
        description: "On-ground logistics, volunteer coordination, and participant experience at major blockchain summits.",
        iconName: "Calendar"
      },
      {
        name: "Technical Writing",
        level: "Proficient",
        description: "Distilling complex decentralized mechanisms into accessible guides, announcements, and documentation.",
        iconName: "FileText"
      }
    ]
  },
  {
    title: "Professional & Execution Competencies",
    description: "Foundational attributes reinforcing strategic execution and team impact.",
    skills: [
      {
        name: "Leadership",
        level: "Core Strength",
        description: "Taking ownership of initiatives, leading social channels, and mobilizing volunteers.",
        iconName: "Compass"
      },
      {
        name: "Analytics & Insights",
        level: "Core Strength",
        description: "Evaluating platform metrics, engagement rates, and community growth trends.",
        iconName: "BarChart3"
      },
      {
        name: "Digital Marketing",
        level: "Core Strength",
        description: "Cross-platform campaigns, messaging optimization, and conversion-focused outreach.",
        iconName: "Zap"
      },
      {
        name: "Problem Solving & Innovation",
        level: "Core Strength",
        description: "Navigating fast-evolving Web3 landscapes and developing creative growth playbooks.",
        iconName: "Lightbulb"
      },
      {
        name: "Collaboration & Teamwork",
        level: "Core Strength",
        description: "Seamless coordination with distributed remote teams, core developers, and community leaders.",
        iconName: "Layers"
      },
      {
        name: "Communication",
        level: "Core Strength",
        description: "Clear, persuasive, and relationship-driven communication across virtual and physical settings.",
        iconName: "MessageSquare"
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
      "Formed bridges between university student bodies and active blockchain developers.",
      "Facilitated educational meetups and workshops to demystify decentralized technologies.",
      "Connected local engineering talent with national hackathons and developer grants."
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
      "Maintained active interaction loops across Telegram and X to resolve queries and welcome newcomers.",
      "Analyzed audience engagement patterns to refine community announcements and drive higher retention."
    ],
    tags: ["Social Media Marketing", "User Onboarding", "Telegram Growth", "X Engagement"],
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
      "Represented TokenScape across multiple social platforms and digital community hangouts.",
      "Onboarded new participants into the ecosystem through structured guidance and initiative highlights.",
      "Documented user feedback, queries, and friction points, delivering distilled reports to core engineers."
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
      "Assisted in coordinating participant flow, attendee support, and speaker/session logistical needs at Devcon 8.",
      "Volunteered at ETH Mumbai, supporting hackathon builders, mentors, and community attendees.",
      "Engaged with founders, protocol teams, and developers across India Blockchain Week (IBW)."
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
  institution: "Bajaj Institute of Technology",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Engineering",
  status: "Currently pursuing 3rd year of study",
  period: "2023 - Present",
  location: "Wardha, Maharashtra",
  highlights: [
    "Core curriculum covering Data Structures, Algorithms, Computer Networks, Database Systems, and Distributed Computing fundamentals.",
    "Applying engineering problem-solving and software architectural literacy directly to Web3 protocols and decentralized application workflows.",
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
