import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Zap, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  ShieldCheck,
  Star,
  Zap
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Leadership Activities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Selected roles, ambassador honors, and leadership engagements across global and national Web3 communities.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#0d0e14] border border-white/[0.07] hover:border-purple-500/30 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-medium text-purple-400 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
