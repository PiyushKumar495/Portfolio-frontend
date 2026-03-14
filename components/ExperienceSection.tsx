'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import type { Experience } from '@/types';

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4"
          >
            <Briefcase className="w-5 h-5 text-accent-500" />
            <span className="text-sm text-gray-400">Professional Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-3">Work Experience</h2>
          <p className="text-gray-400">Building innovative solutions with cutting-edge technologies</p>
        </motion.div>
        
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-strong p-8 rounded-2xl relative overflow-hidden border border-gray-700/50 hover:border-accent-500/50 transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-2.5 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl shadow-lg shadow-accent-500/30"
                        >
                          <Briefcase className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gradient group-hover:scale-105 transition-transform inline-block">
                            {exp.role}
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ml-14">
                        <p className="text-xl text-white font-semibold">{exp.company}</p>
                        <span className="hidden sm:block text-gray-600">•</span>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Date badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-500/30 rounded-xl backdrop-blur-sm"
                    >
                      <Calendar className="w-4 h-4 text-accent-400" />
                      <span className="text-sm font-medium text-accent-300">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-3 mb-6 ml-14">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 90 }}
                          className="mt-1.5 flex-shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4 text-accent-500" />
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="ml-14 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-accent-500" />
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.03 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-accent-600/20 to-primary-600/20 border border-accent-500/30 text-accent-300 rounded-lg text-sm font-medium hover:border-accent-500/60 hover:shadow-lg hover:shadow-accent-500/20 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
