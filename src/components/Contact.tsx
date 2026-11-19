import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

// Custom icons for X, GitHub, LinkedIn
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

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [roleType, setRoleType] = useState('Full-time Web3 BD Role');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#6366f1', '#38bdf8']
      });
    } catch {
      // Ignore if confetti fails
    }
    setSubmitted(true);
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`${roleType} Inquiry from ${name || 'Recruiter/Founder'}`);
    const body = encodeURIComponent(
      `Hi Rudra,\n\nI came across your Web3 portfolio.\n\nSender: ${name} (${senderEmail})\nOpportunity / Inquiry: ${roleType}\n\nMessage:\n${message}\n\nLooking forward to speaking.`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Interested in discussing Web3 Business Development, strategic partnerships, ecosystem expansion, or conference meetups? Reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0d0e14] border border-white/[0.08] hover:border-purple-500/30 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.06] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Email Address
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-purple-300 break-all transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0d0e14] border border-white/[0.08] hover:border-purple-500/30 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.06] transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Direct Phone / WhatsApp
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-purple-300 transition-colors font-mono"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location & Social Hub */}
            <div className="p-6 rounded-2xl bg-[#0d0e14] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Current Location
                  </div>
                  <div className="text-sm font-medium text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-xs text-zinc-400 mb-3 font-semibold uppercase tracking-wider">
                  Social & Web3 Channels
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <XIcon className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="truncate">X (@0xRudrax)</span>
                  </a>

                  <a
                    href={personalInfo.socials.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <Send className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">Telegram</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span className="truncate">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0e14] border border-white/[0.08] shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send an Inquiry or Opportunity
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Web3 founders, recruiters, and teams: fill out this quick form.
                  </p>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name / Organization <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Satoshi (Founder @ Protocol)"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-purple-500 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. founder@project.xyz"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-purple-500 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Nature of Inquiry
                    </label>
                    <select
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111218] border border-white/[0.08] focus:border-purple-500 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Full-time Web3 BD Role">Full-time Web3 Business Development</option>
                      <option value="Ecosystem Growth & Partnerships">Ecosystem Growth & Strategic Partnerships</option>
                      <option value="Community & Social Lead">Community & Social Lead Role</option>
                      <option value="Ambassador Representation">Ambassador Program Representation</option>
                      <option value="Conference / Event Meetup">Conference / Event Meetup (IBW/Devcon/ETH)</option>
                      <option value="Other Partnership">Other Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message / Project Details <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a bit about your protocol, team, target goals, or the role you are looking to fill..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-purple-500 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/25 transition-all cursor-pointer text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Review & Send Inquiry
                  </button>
                </form>
              ) : (
                <div className="py-8 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you, <strong className="text-purple-300">{name}</strong>. You can now launch this directly in your email client to dispatch to <strong className="text-white">{personalInfo.email}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={openMailto}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/20 text-sm cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Email Client
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
