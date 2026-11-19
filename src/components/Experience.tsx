import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, Tag, Building2, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience & Ambassador Roles
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Demonstrated hands-on execution in community leadership, ecosystem onboarding, and strategic alliance building across active Web3 organizations.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0d0e14] border border-white/[0.08] hover:border-purple-500/30 transition-all shadow-xl group overflow-hidden"
            >
              {/* Subtle accent border line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-500 font-mono hidden sm:inline">@</span>
                    <span className="text-lg sm:text-xl font-semibold text-purple-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      {exp.organization}
                    </span>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/25 text-purple-300">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 font-normal">
                    {exp.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.06] shrink-0 self-start">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2.5">
                  {exp.keyResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Skills Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-zinc-500 mr-1" />
                  {exp.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {exp.impactTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono text-purple-300 bg-purple-950/30 border border-purple-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
