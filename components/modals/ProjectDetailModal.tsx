'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Code2 } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/types';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 glass-strong rounded-full hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Image */}
              {project.imageUrl && (
                <div className="relative h-64 w-full rounded-t-2xl overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Featured Project
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4 text-gradient">{project.title}</h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-500" />
                    Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.tech.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="glass p-3 rounded-lg text-center"
                      >
                        <p className="text-sm font-medium text-purple-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-gray-800">
                  {project.repoUrl && (
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 glass-strong hover:bg-white/15 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-purple-500/30"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
