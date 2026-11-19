import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail, MapPin, Sparkles, ShieldCheck, Compass, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom icons for X and GitHub
const XIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.86 18.5V10.13H5.07v8.37h2.79z" />
  </svg>
);

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-purple-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.availabilityStatus}</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>

            {/* Main Name & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Rudra{' '}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                Labhasetwar
              </span>
            </h1>

            <div className="text-xl sm:text-2xl font-medium text-zinc-300 mb-6 flex items-center gap-2 flex-wrap">
              <span>Web3 Business Development</span>
              <span className="text-purple-400 font-mono">•</span>
              <span className="text-zinc-400">Ecosystem Growth</span>
            </div>

            {/* Impactful Summary */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8 font-normal">
              Specialized in identifying growth opportunities, structuring strategic partnerships, and scaling active Web3 communities. Combining a rigorous Computer Engineering background with on-the-ground ecosystem advocacy across major conferences like Devcon 8 and ETH Mumbai.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
              >
                <FileText className="w-4 h-4" />
                View My Resume
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.2] transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base group"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Socials & Quick Credentials */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6 border-t border-white/[0.08] w-full">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                Connect Directly
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="X Profile"
                  title="Follow on X / Twitter (@0xRudrax)"
                >
                  <XIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="Telegram"
                  title="Message on Telegram (@0xRudrax)"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 ml-auto">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Wardha, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative back glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 -z-10" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#0f1017] border border-white/[0.1] overflow-hidden shadow-2xl p-4 sm:p-5">
                {/* Photo frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] group">
                  <img
                    src={personalInfo.photoPath}
                    alt="Rudra Labhasetwar at Devcon VIII"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/15 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Devcon VIII Southeast Asia
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-purple-500/20 backdrop-blur-md text-purple-200 border border-purple-500/30">
                      Volunteer
                    </span>
                  </div>

                  {/* Bottom details on image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                      <div className="text-white font-semibold text-sm flex items-center justify-between">
                        <span>Rudra Labhasetwar</span>
                        <span className="text-[11px] font-mono text-purple-300">0xRudrax</span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-0.5">
                        On-ground Web3 builder, ecosystem representative & student engineer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mt-4 pt-1">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-medium text-white truncate">TokenScape</div>
                      <div className="text-[11px] text-zinc-400 truncate">Ambassador</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-medium text-white truncate">Cryptonix</div>
                      <div className="text-[11px] text-zinc-400 truncate">Social Media Lead</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
