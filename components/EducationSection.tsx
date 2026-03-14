'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import type { Education } from '@/types';

export default function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-accent-500" />
            <span className="text-sm text-gray-400">Academic Background</span>
          </div>
          <h2 className="text-4xl font-bold glow-text">Education</h2>
        </motion.div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-lg hover:bg-white/10 transition-all relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-500 to-primary-500" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-accent-600/20 rounded-lg group-hover:bg-accent-600/30 transition-colors">
                      <GraduationCap className="w-6 h-6 text-accent-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-accent-500">{edu.degree}</h3>
                      <p className="text-lg text-gray-300">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 ml-14">
                    <MapPin className="w-4 h-4" />
                    <p>{edu.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-400">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
              
              {edu.grade && (
                <div className="mt-4 ml-14">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm">
                    Grade: {edu.grade}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
