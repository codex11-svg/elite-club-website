export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  type: "Hackathon" | "Workshop" | "Bootcamp" | "Seminar" | "Competition" | "Meeting" | "Visit";
  description: string;
  registrationLink: string;
  image: string;
  spots: number;
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
  generation: number; // 0 = founders, 1 = first batch, 2 = second batch, etc.
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
  category: "Web" | "Mobile" | "AI/ML" | "Bot" | "Other";
  contributors: string[];
  status: "Active" | "Completed" | "In Progress";
}

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
