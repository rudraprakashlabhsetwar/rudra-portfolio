import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle, Cpu, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            A solid background in Computer Engineering providing the technical depth to evaluate decentralized technologies, speak with core engineers, and execute informed Web3 BD.
          </p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#0d0e14] border border-white/[0.08] hover:border-purple-500/30 transition-all shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationData.institution}
                </h3>
                <div className="text-base font-semibold text-purple-400 mt-0.5">
                  {educationData.degree} — {educationData.field}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
                  {educationData.status}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{educationData.period}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{educationData.location}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-4 border-t border-white/[0.06]">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              Technical Relevance & Focus
            </h4>
            <div className="space-y-2.5">
              {educationData.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
