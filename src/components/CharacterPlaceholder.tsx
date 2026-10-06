"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Shield, Sparkles, Code2, Wifi, CheckCircle2 } from "lucide-react";

export default function CharacterPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[420px] lg:max-w-[460px] mx-auto group"
    >
      {/* Background Aura Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/35 via-purple-600/35 to-blue-600/35 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />

      {/* Main Hologram Container Card */}
      <div className="relative rounded-2xl bg-[#070914]/90 border border-white/10 backdrop-blur-xl p-5 sm:p-6 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        
        {/* Top HUD Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08] font-mono text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
            <span className="text-cyan-300 font-semibold tracking-wider">
              OPERATIVE // DEEPIKA H.N
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest text-zinc-300">ONLINE // SYNCED</span>
          </div>
        </div>

        {/* HUD Corner Tech Brackets */}
        <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-purple-500/80 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-purple-500/80 pointer-events-none" />

        {/* Character Visual Showcase Area */}
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#0e122b]/60 via-[#0a0d1e] to-[#04050d] border border-white/10 flex flex-col items-center justify-center p-3">
          
          {/* Subtle Cyber Grid in container */}
          <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none" />

          {/* Rotating Orbital Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[290px] h-[290px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-cyan-500/25 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[310px] h-[310px] sm:w-[340px] sm:h-[340px] rounded-full border border-dotted border-purple-500/30 pointer-events-none"
          />

          {/* Holographic Scanline */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scanline pointer-events-none z-20" />

          {/* Avatar Image Frame */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-cyan-400/40 via-purple-500/30 to-blue-500/20 shadow-[0_0_35px_-5px_rgba(0,240,255,0.25)] group-hover:shadow-[0_0_45px_-5px_rgba(168,85,247,0.35)] transition-shadow duration-500">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0c0d1b]">
                <Image
                  src="/avatar.jpg"
                  alt="Deepika H. Neeralagi - Computer Science Engineer"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Subtle cyber gradient overlay at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04050d]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Sub-label under avatar */}
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Original Character Persona
              </span>
            </div>
          </div>

          {/* Floating Pill Badges */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute left-3 bottom-4 z-20 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0c1024]/95 border border-cyan-500/40 backdrop-blur-md shadow-lg"
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono text-cyan-200">Software & AI</span>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute right-3 top-4 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#140e28]/95 border border-purple-500/40 backdrop-blur-md shadow-lg"
          >
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-mono text-purple-200">Cybersecurity</span>
          </motion.div>
        </div>

        {/* Card Footer Telemetry */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE ARCH: CS_ENG</span>
          </div>
          <span className="text-zinc-500">SYS // OPERATIONAL</span>
        </div>
      </div>
    </motion.div>
  );
}
