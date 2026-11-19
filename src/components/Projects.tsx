import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Check, Tag, Building2, Calendar, Sparkles } from 'lucide-react';
import { projectsAndContributions } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Impact & Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects & Ecosystem Contributions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Real-world initiatives spanning DAO partnership development, ambassador programs, cross-platform audience growth, and international conference operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsAndContributions.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0d0e14] border border-white/[0.08] hover:border-purple-500/35 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-purple-400 mb-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{project.organization}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">{project.role}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Execution Highlights */}
                <div className="space-y-2 mb-6">
                  {project.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-zinc-500 mr-1" />
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
