'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Lightbulb, Layers } from 'lucide-react';
import type { Skill } from '@/types';

const categoryIcons: Record<string, any> = {
  'Languages': Code,
  'Frameworks': Layers,
  'Databases': Database,
  'Cloud': Cloud,
  'Tools / Testing': Wrench,
  'Concepts': Lightbulb,
};

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <Code className="w-5 h-5 text-accent-500" />
            <span className="text-sm text-gray-400">Technical Expertise</span>
          </div>
          <h2 className="text-4xl font-bold glow-text">Skills & Technologies</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = categoryIcons[skill.category] || Code;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-600/20 rounded-lg group-hover:bg-accent-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-bold text-accent-500">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 cursor-default transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
