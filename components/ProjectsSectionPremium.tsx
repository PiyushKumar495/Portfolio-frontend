'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Folder, Star, Eye, Code2 } from 'lucide-react';
import type { Project } from '@/types';
import ProjectDetailModal from '@/components/modals/ProjectDetailModal';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-4">
              <Folder className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-gray-400">Portfolio Showcase</span>
            </div>
            <h2 className="text-5xl font-bold glow-text mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Click on any project to view detailed information, tech stack, and live demos
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => handleProjectClick(project)}
                className="glass-strong rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}
                
                {/* Project Image */}
                {project.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="p-4 glass-strong rounded-full"
                      >
                        <Eye className="w-8 h-8 text-purple-400" />
                      </motion.div>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-500" />
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-600/20 text-primary-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-800">
                    {project.repoUrl && (
                      <motion.a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 text-center py-2 glass hover:bg-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 text-center py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>

                  {/* Click to view more */}
                  <div className="mt-4 text-center text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
                    Click for full details →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
