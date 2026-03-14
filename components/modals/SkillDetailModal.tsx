'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Database, Cloud, Wrench, Lightbulb, Layers } from 'lucide-react';
import type { Skill } from '@/types';

interface SkillDetailModalProps {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons: Record<string, any> = {
  'Languages': Code,
  'Frameworks': Layers,
  'Databases': Database,
  'Cloud': Cloud,
  'Tools / Testing': Wrench,
  'Concepts': Lightbulb,
};

export default function SkillDetailModal({ skill, isOpen, onClose }: SkillDetailModalProps) {
  if (!skill) return null;

  const Icon = categoryIcons[skill.category] || Code;

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
              className="glass-strong rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 glass-strong rounded-full hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="p-8 border-b border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-2xl">
                    <Icon className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gradient">{skill.category}</h2>
                    <p className="text-gray-400">{skill.items.length} skills in this category</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skill.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="glass p-4 rounded-lg flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:animate-pulse" />
                      <p className="text-lg font-medium text-gray-200 group-hover:text-purple-300 transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Proficiency indicator */}
                <div className="mt-8 p-6 glass rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Proficiency Level</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '90%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
                        />
                      </div>
                      <span className="text-sm text-gray-400 w-12">Expert</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Extensive hands-on experience with production-level projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
