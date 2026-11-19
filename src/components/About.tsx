import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Users, Code, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bridging Ecosystems, Builders & Blockchain Adoption
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            A relationship-driven Web3 Business Development professional dedicated to expanding decentralized networks through authentic partnerships and community growth.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0f15] border border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
              
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-purple-400" />
                My Mission & Approach
              </h3>

              <p className="mb-4 text-zinc-300">
                {personalInfo.bioSummary}
              </p>

              <p className="text-zinc-400 text-sm sm:text-base">
                Whether representing <span className="text-purple-300 font-medium">TokenScape</span> as an Ambassador, leading multi-platform growth at <span className="text-indigo-300 font-medium">Cryptonix</span>, or building regional blockchain alliances with <span className="text-sky-300 font-medium">VidarbhaDAO</span>, my focus remains constant: creating real business value, onboarding active users, and turning newcomers into passionate community advocates.
              </p>
            </div>

            {/* Technical edge callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-transparent border border-purple-500/20">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-base mb-1">
                    The Technical Advantage in Web3 BD
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-normal">
                    Currently pursuing a B.Tech in Computer Engineering at Bajaj Institute of Technology, I understand software systems, smart contracts, and protocol architectures. This dual literacy allows me to converse fluently with both core engineers and non-technical partners, ensuring smooth collaboration and rapid execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Strengths Checklist & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0e0f15] border border-white/[0.08]">
              <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2 text-zinc-200">
                Key BD & Growth Focus
              </h3>

              <ul className="space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Strategic Alliances:</strong> Aligning incentives across Web3 protocols, DAOs, and developer institutions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Community & User Onboarding:</strong> Scaling organic engagement across Telegram, X, and on-ground activations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Market Feedback Loops:</strong> Synthesizing ground sentiment to inform product iteration and campaign timing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Field Representation:</strong> Demonstrating active presence at global conferences (Devcon 8, ETH Mumbai, IBW).
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-2xl font-bold text-white font-mono">3+</div>
                <div className="text-xs text-zinc-400 mt-1">Key Web3 Ecosystem Roles & Ambassadorships</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-2xl font-bold text-purple-400 font-mono">3+</div>
                <div className="text-xs text-zinc-400 mt-1">Conferences Represented & Supported</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {personalInfo.corePillars.map((pillar, idx) => {
            const icons = [Handshake, TrendingUp, Users, Code];
            const IconComponent = icons[idx] || Sparkles;

            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[#0c0d12] border border-white/[0.07] hover:border-purple-500/30 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-base mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
