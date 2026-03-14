'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Sparkles, Code2, Download, ArrowDown } from 'lucide-react';
import type { Profile } from '@/types';

export default function HeroPremium({ profile }: { profile: Profile }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20" />
        <div className="absolute inset-0 dotted-bg opacity-30" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[150px]"
        />
      </div>
      
      {/* Radial gradient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow" />

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full mb-8 group hover:scale-105 transition-transform"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Available for Full-Time Opportunities
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gradient animate-gradient bg-[length:200%_auto]">{profile.name}</span>
          </motion.h1>
          
          {/* Subtitle with icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-3xl md:text-4xl text-gray-300 mb-6"
          >
            <div className="relative">
              <Code2 className="w-10 h-10 text-purple-500 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-purple-500/50 animate-pulse" />
            </div>
            <p className="font-semibold">{profile.title}</p>
          </motion.div>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray-400 mb-8"
          >
            <MapPin className="w-5 h-5 text-purple-400" />
            <p>{profile.location}</p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-3 justify-center mb-12 max-w-3xl mx-auto"
          >
            {profile.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2 glass-strong rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center flex-wrap mb-12"
          >
            <motion.a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-strong hover:bg-white/15 rounded-xl font-semibold transition-all flex items-center gap-3 border border-purple-500/30"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
            <motion.a
              href={profile.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-strong hover:bg-white/15 rounded-xl font-semibold transition-all flex items-center gap-3 border border-purple-500/30"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </motion.a>
            <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-strong hover:bg-white/15 rounded-xl font-semibold transition-all flex items-center gap-3 border border-purple-500/30"
            >
            <Mail className="w-5 h-5" />
            {profile.email}
            </motion.a>

            {profile.phone && (
            <motion.a
            href={`tel:${profile.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-strong hover:bg-white/15 rounded-xl font-semibold transition-all flex items-center gap-3 border border-purple-500/30"
            >
            <Phone className="w-5 h-5" />
            {profile.phone}
            </motion.a>
            )}
            <motion.a
              href="/resume/Piyush_Kumar_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-strong hover:bg-white/15 rounded-xl font-semibold transition-all flex items-center gap-3 border border-purple-500/30"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>
        </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.6 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </div>
        <ArrowDown className="w-5 h-5 text-purple-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
