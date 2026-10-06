"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Terminal,
  ShieldCheck,
  BrainCircuit,
  CodeXml,
  Sparkles,
  Layers,
  ChevronDown,
} from "lucide-react";
import CharacterPlaceholder from "./CharacterPlaceholder";

export default function HeroSection() {
  const keywords = [
    { label: "Software", icon: CodeXml, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
    { label: "AI", icon: BrainCircuit, color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
    { label: "Cybersecurity", icon: ShieldCheck, color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
    { label: "Creative Technology", icon: Sparkles, color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10" },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Hero Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-cyan-400/40 transition-colors"
            >
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                PORTFOLIO ARCHITECTURE // 2026
              </span>
            </motion.div>

            {/* Headline Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2"
            >
              <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan-400 uppercase font-medium">
                COMPUTER SCIENCE ENGINEER
              </p>
            </motion.div>

            {/* Personal Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
            >
              DEEPIKA H.
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                NEERALAGI
              </span>
            </motion.h1>

            {/* Supporting Keywords Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {keywords.map((kw, i) => {
                const Icon = kw.icon;
                return (
                  <span
                    key={kw.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border backdrop-blur-sm ${kw.color} transition-transform hover:-translate-y-0.5`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{kw.label}</span>
                  </span>
                );
              })}
            </motion.div>

            {/* Hero Statement */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-5 border-l-2 border-gradient border-l-cyan-400 text-lg sm:text-xl md:text-2xl font-light text-zinc-200 mb-9 max-w-2xl leading-relaxed"
            >
              &ldquo;I build things that make technology feel useful.&rdquo;
            </motion.blockquote>

            {/* Hero CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.3)] w-full sm:w-auto"
              >
                <span>CONTACT ME</span>
                <Send className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Terminal Telemetry Snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 w-full max-w-xl p-3.5 rounded-xl bg-black/40 border border-white/[0.07] backdrop-blur-md font-mono text-[11px] text-zinc-400 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-zinc-500">$</span>
                <span className="text-zinc-300">init_portfolio</span>
                <span className="text-cyan-400">--mode=production</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ALL_SYSTEMS_OPERATIONAL</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Character Visual Area */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <CharacterPlaceholder />
          </div>

        </div>

      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
          SCROLL
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-zinc-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
