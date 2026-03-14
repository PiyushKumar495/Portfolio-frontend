'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import type { Certification } from '@/types';

export default function CertificationsSection({ certifications }: { certifications: Certification[] }) {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <Award className="w-5 h-5 text-accent-500" />
            <span className="text-sm text-gray-400">Professional Credentials</span>
          </div>
          <h2 className="text-4xl font-bold glow-text">Certifications</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-lg hover:bg-white/10 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-24 h-24 text-accent-500" />
              </div>
              
              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-accent-600/20 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-accent-500 flex-1">{cert.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-2 font-medium">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <p>{cert.date}</p>
                </div>
                
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mb-3">ID: {cert.credentialId}</p>
                )}
                
                {cert.verifyUrl && (
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-400 text-sm transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 2 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Credential
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
