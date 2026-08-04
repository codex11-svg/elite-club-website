// src/lib/data.ts

export const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Web Development in ECS",
    slug: "getting-started-web-dev",
    excerpt: "A beginner's roadmap to mastering HTML, CSS, JavaScript, and React for engineering students.",
    content: "Full guide content for ECS web developers...",
    author: {
      name: "Abdul Rehman Kalsekar",
      role: "Technical Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    },
    publishedAt: "2026-02-15",
    readTime: "5 min read",
    tags: ["Web Dev", "React", "Beginners"],
    featured: true
  }
];

export const projects = [
  {
    id: "1",
    title: "ELITE Club Portal",
    description: "Official portal for ELITE Club, ECS Department at AIKTC.",
    category: "Web",
    status: "Active",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    githubUrl: "https://github.com/codex11-svg/elite-club-website",
    liveUrl: "https://elite.aiktc.ac.in",
    featured: true
  }
];

export const events = [
  {
    id: "1",
    title: "IoT & Cloud Computing Workshop",
    description: "Hands-on session on IoT protocols, cloud integration, and microcontroller programming.",
    type: "Workshop",
    date: "Aug 21, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "ECS Computer Lab 302",
    capacity: 60,
    registered: 48,
    isPast: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: "2",
    title: "Web Tech 2-Day Bootcamp",
    description: "Intensive 2-day session covering modern frontend stacks and API development.",
    type: "Bootcamp",
    date: "Sep 16, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Main Seminar Hall",
    capacity: 100,
    registered: 85,
    isPast: false,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
  }
];

export const teamMembers = [
  {
    id: "1",
    name: "Bandanawaz Kotiyal",
    role: "Head of Department",
    department: "Electronics & Computer Science",
    generation: 2,
    bio: "HOD guiding technical innovation and academic excellence in the ECS department.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: "2",
    name: "Sayyad Umar",
    role: "President",
    department: "ECS",
    generation: 2,
    bio: "Leading ELITE Club operations, industry outreach, and student technical initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

export const stats = [
  { icon: "users", value: 250, label: "Active Members", suffix: "+" },
  { icon: "calendar", value: 45, label: "Events Conducted", suffix: "+" },
  { icon: "code", value: 80, label: "Projects Built", suffix: "+" },
  { icon: "trophy", value: 12, label: "Hackathon Wins", suffix: "" }
];

export const features = [
  {
    icon: "workshop",
    title: "Hands-on Workshops",
    description: "Practical sessions covering IoT, Cloud, AI/ML, and Web Technologies."
  },
  {
    icon: "hackathon",
    title: "Department Hackathons",
    description: "Competitive coding hackathons focused on solving real hardware/software problems."
  },
  {
    icon: "opensource",
    title: "Open Source Projects",
    description: "Collaborative project development building student portfolios."
  },
  {
    icon: "mentorship",
    title: "Peer Mentorship",
    description: "Guidance from seniors and faculty on tech stacks and career paths."
  }
];

export const faqs = [
  {
    question: "Who can join the ELITE Club?",
    answer: "All students enrolled in the Electronics & Computer Science department at AIKTC can join."
  },
  {
    question: "How do I get event certificates?",
    answer: "Certificates are unlocked immediately after attending a workshop and submitting the 30-second feedback form."
  }
];

export const sponsors = [
  { name: "AIKTC", tier: "Platinum", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&q=80" },
  { name: "ECS Department", tier: "Gold", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80" }
];

export const testimonials = [
  {
    quote: "ELITE Club helped me gain practical IoT skills alongside standard academic subjects.",
    author: "Umar Sayyad",
    role: "ECS Student Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  }
];

export const techStack = [
  "React", "Next.js", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Node.js", "PostgreSQL", "Firebase", "C++", "Arduino"
];

export const galleryItems = [
  {
    id: "1",
    title: "IoT Session 2025",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "Which tech domain interests you the most?",
    options: [
      { text: "Web & Apps", domain: "code" },
      { text: "AI & Machine Learning", domain: "ai" },
      { text: "Cyber Security", domain: "security" },
      { text: "IoT & Hardware", domain: "hardware" }
    ]
  }
];

export const domainResults: Record<string, { title: string; description: string }> = {
  code: { title: "Web & Mobile Development", description: "You love building modern interactive apps." },
  ai: { title: "AI & Machine Learning", description: "You like working with data and model training." },
  security: { title: "Cybersecurity", description: "You enjoy finding security vulnerabilities and hardening networks." },
  hardware: { title: "IoT & Embedded Systems", description: "You like microcontrollers, sensors, and hardware circuits." }
};