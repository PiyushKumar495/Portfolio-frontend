'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Target } from 'lucide-react';
import type { Achievement } from '@/types';

export default function AchievementsSection({ achievements }: { achievements: Achievement[] }) {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <Trophy className="w-5 h-5 text-accent-500" />
            <span className="text-sm text-gray-400">Milestones & Recognition</span>
          </div>
          <h2 className="text-4xl font-bold glow-text">Achievements</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-lg hover:bg-white/10 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-600/10 rounded-full blur-3xl group-hover:bg-accent-600/20 transition-colors" />
              
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-600/20 rounded-lg group-hover:bg-accent-600/30 transition-colors">
                    {index % 2 === 0 ? (
                      <Award className="w-6 h-6 text-accent-500" />
                    ) : (
                      <Target className="w-6 h-6 text-accent-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-accent-500">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
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
