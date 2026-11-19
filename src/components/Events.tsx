import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import { eventsList, personalInfo } from '../data/portfolioData';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 sm:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Field Operations & Networking
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Event Representation & Conferences
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Active on-ground participation at the world's premier Ethereum and Web3 summits, connecting directly with researchers, founders, and core developer teams.
          </p>
        </div>

        {/* Featured Photo + Events Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Devcon VIII Featured Visual */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-5 rounded-3xl bg-[#0e0f15] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-950 border border-white/10 group">
                <img
                  src={personalInfo.photoPath}
                  alt="Rudra at Devcon VIII"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* On-photo badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/90 text-white backdrop-blur-md border border-purple-400/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    On-Ground Field Proof
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                    <h3 className="text-white font-bold text-base flex items-center justify-between">
                      <span>Devcon VIII Southeast Asia</span>
                      <span className="text-xs text-purple-300 font-mono">Volunteer</span>
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1">
                      Representing decentralized communities and supporting attendee operations alongside the Ethereum Foundation ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-400">
                <span className="text-purple-300 font-medium">Why on-ground presence matters:</span> Web3 BD isn't built behind closed doors. High-touch physical presence at summits like Devcon, ETH Mumbai, and IBW builds enduring relationships and trust with protocol founders.
              </div>
            </div>
          </div>

          {/* Right Column: Event Cards Timeline */}
          <div className="lg:col-span-7 space-y-4">
            {eventsList.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-5 sm:p-6 rounded-2xl bg-[#0d0e14] border transition-all ${
                  event.highlight
                    ? 'border-purple-500/40 bg-gradient-to-br from-purple-950/15 via-[#0d0e14] to-[#0d0e14]'
                    : 'border-white/[0.08] hover:border-purple-500/25'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Award className={`w-4 h-4 ${event.highlight ? 'text-purple-400' : 'text-zinc-400'}`} />
                      {event.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {event.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    {event.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {event.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {event.year}
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-medium text-purple-300 mb-2">
                  Role: {event.role}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
