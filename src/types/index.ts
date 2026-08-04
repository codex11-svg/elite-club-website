export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue?: string;
  location?: string;
  type: string;
  description: string;
  registrationLink?: string;
  image: string;
  spots?: number;
  capacity?: number;
  registered: number;
  isPast: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  year: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  gradient: string;
  isLead: boolean;
  generation: number;
}

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  date: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Sponsor {
  id: number;
  name: string;
  tier: "Platinum" | "Gold" | "Silver";
  logo: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface DomainResult {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
}

// Legacy types for old components still on GitHub
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  stars: number;
  forks: number;
  category: string;
  contributors: string[];
  status: string;
}
