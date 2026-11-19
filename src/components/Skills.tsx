import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Handshake,
  Globe,
  Share2,
  Users,
  Megaphone,
  Calendar,
  FileText,
  Compass,
  BarChart3,
  Zap,
  Lightbulb,
  Layers,
  MessageSquare,
  Sparkles,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Handshake,
  Globe,
  Share2,
  Users,
  Megaphone,
  Calendar,
  FileText,
  Compass,
  BarChart3,
  Zap,
  Lightbulb,
  Layers,
  MessageSquare
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "All Skills" },
    ...skillCategories.map((c) => ({ label: c.title }))
  ];

  const displayedCategories =
    activeTab === 0
      ? skillCategories
      : [skillCategories[activeTab - 1]];

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            A comprehensive blend of Web3 business development acumen, multi-channel growth execution, and technical engineering fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {displayedCategories.map((cat) => (
            <div key={cat.title}>
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {cat.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = skill.iconName ? iconMap[skill.iconName] || Briefcase : Briefcase;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="p-5 rounded-2xl bg-[#0d0e14] border border-white/[0.07] hover:border-purple-500/30 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="text-white font-semibold text-sm sm:text-base mb-1.5 group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Verified in Web3 Operations</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-black border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-white font-semibold text-base">
              Looking for a custom BD growth strategy or community sprint?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Available for full-time Business Development, ambassador representation, and ecosystem partnership roles.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shrink-0 shadow-lg shadow-purple-600/20"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
