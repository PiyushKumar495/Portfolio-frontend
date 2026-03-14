'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Lightbulb, Layers, Sparkles } from 'lucide-react';
import type { Skill } from '@/types';
import SkillDetailModal from '@/components/modals/SkillDetailModal';

const categoryIcons: Record<string, any> = {
  'Languages': Code,
  'Frameworks': Layers,
  'Databases': Database,
  'Cloud': Cloud,
  'Tools / Testing': Wrench,
  'Concepts': Lightbulb,
};

const categoryColors: Record<string, string> = {
  'Languages': 'from-purple-600 to-pink-600',
  'Frameworks': 'from-blue-600 to-cyan-600',
  'Databases': 'from-green-600 to-emerald-600',
  'Cloud': 'from-sky-600 to-blue-600',
  'Tools / Testing': 'from-orange-600 to-red-600',
  'Concepts': 'from-yellow-600 to-amber-600',
};

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-4">
              <Code className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-gray-400">Technical Expertise</span>
            </div>
            <h2 className="text-5xl font-bold glow-text mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Click on any category to explore detailed proficiency and experience
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = categoryIcons[skill.category] || Code;
              const gradientColor = categoryColors[skill.category] || 'from-purple-600 to-blue-600';
              
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => handleSkillClick(skill)}
                  className="glass-strong p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 bg-gradient-to-br ${gradientColor} rounded-xl shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {skill.category}
                        </h3>
                        <p className="text-sm text-gray-400">{skill.items.length} skills</p>
                      </div>
                    </div>
                    
                    {/* Preview of first 3 skills */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {skill.items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-xs text-gray-300 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                      {skill.items.length > 3 && (
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-semibold">
                          +{skill.items.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Click to view indicator */}
                    <div className="flex items-center gap-2 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span>Click to explore</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <SkillDetailModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
