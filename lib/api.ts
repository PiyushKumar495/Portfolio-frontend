import axios from 'axios';
import type { Profile, Experience, Project, Skill, Achievement, Certification, Education, ContactMessage, PaginatedResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const portfolioApi = {
  getProfile: () => api.get<Profile>('/profile'),
  getExperiences: (page = 1, pageSize = 10) => 
    api.get<PaginatedResponse<Experience>>('/experience', { params: { page, pageSize } }),
  getProjects: (page = 1, pageSize = 9, tag?: string, featured?: boolean) => 
    api.get<PaginatedResponse<Project>>('/projects', { params: { page, pageSize, tag, featured } }),
  getSkills: () => api.get<Skill[]>('/skills'),
  getAchievements: () => api.get<Achievement[]>('/achievements'),
  getCertifications: () => api.get<Certification[]>('/certifications'),
  getEducation: () => api.get<Education[]>('/education'),
  sendContact: (data: ContactMessage) => api.post('/contact', data),
};
