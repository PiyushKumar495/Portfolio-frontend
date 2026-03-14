export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  phone?: string;
  gitHub: string;
  linkedIn: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
