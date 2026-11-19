export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge?: string;
  description: string;
  keyResponsibilities: string[];
  skillsGained: string[];
  impactTags: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    iconName?: string;
  }[];
}

export interface ProjectContribution {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  details: string[];
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  role: string;
  location?: string;
  year: string;
  description: string;
  badge: string;
  highlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  status: string;
  period: string;
  location: string;
  highlights: string[];
}
