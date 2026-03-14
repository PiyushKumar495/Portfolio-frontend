'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['experience', 'projects', 'skills', 'achievements', 'certifications', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'https://portfolio-3d-car.vercel.app/' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-2xl border-b border-gray-700/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl">
                  <span className="text-2xl font-bold text-white">PK</span>
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 mx-auto">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                );
              })}
              
              {/* Resume & CTA Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="/resume/Piyush_Kumar_Resume.pdf"
                  download
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 glass border border-accent-500/50 text-accent-300 rounded-lg font-medium hover:bg-accent-500/10 transition-all duration-300"
                >
                  Resume
                </motion.a>
                
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-lg font-medium shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Let's Talk
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-4 bottom-4 w-80 glass-strong rounded-2xl border border-gray-700/50 z-50 lg:hidden overflow-hidden"
            >
              <div className="p-6 h-full overflow-y-auto">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    );
                  })}
                </div>
                
                {/* Mobile Resume & CTA */}
                <div className="space-y-3 mt-6">
                  <motion.a
                    href="/resume/Piyush_Kumar_Resume.pdf"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full px-6 py-3 glass border border-accent-500/50 text-accent-300 rounded-lg font-medium hover:bg-accent-500/10 transition-all flex items-center justify-center gap-2"
                  >
                    Download Resume
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-lg font-medium shadow-lg shadow-accent-500/30 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Let's Talk
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
