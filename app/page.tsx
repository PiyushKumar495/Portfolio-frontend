'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioApi } from '@/lib/api';
import type { Profile, Experience, Project, Skill, Achievement, Certification, Education } from '@/types';
import Navbar from '@/components/Navbar';
import HeroPremium from '@/components/HeroPremium';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSectionPremium from '@/components/ProjectsSectionPremium';
import SkillsSectionPremium from '@/components/SkillsSectionPremium';
import AchievementsSection from '@/components/AchievementsSection';
import CertificationsSection from '@/components/CertificationsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, expRes, projRes, skillsRes, achRes, certRes, eduRes] = await Promise.all([
          portfolioApi.getProfile(),
          portfolioApi.getExperiences(),
          portfolioApi.getProjects(1, 9, undefined, true),
          portfolioApi.getSkills(),
          portfolioApi.getAchievements(),
          portfolioApi.getCertifications(),
          portfolioApi.getEducation(),
        ]);

        setProfile(profileRes.data);
        setExperiences(expRes.data.items);
        setProjects(projRes.data.items);
        setSkills(skillsRes.data);
        setAchievements(achRes.data);
        setCertifications(certRes.data);
        setEducation(eduRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      {profile && <HeroPremium profile={profile} />}
      <ExperienceSection experiences={experiences} />
      <ProjectsSectionPremium projects={projects} />
      <SkillsSectionPremium skills={skills} />
      <AchievementsSection achievements={achievements} />
      <CertificationsSection certifications={certifications} />
      <EducationSection education={education} />
      <ContactSection />
      <Footer profile={profile} />
    </main>
  );
}
