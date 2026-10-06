"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Terminal, Shield, Sparkles, Code2, Cpu } from "lucide-react";

export default function AboutSection() {
  const coreStrengths = [
    {
      icon: Code2,
      title: "Software Engineering",
      desc: "Architecting clean, scalable applications with TypeScript, Python, and modern frameworks.",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    },
    {
      icon: Cpu,
      title: "AI Applications",
      desc: "Building conversational and generative AI workflows with real-time interfaces.",
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
    {
      icon: Shield,
      title: "Cybersecurity Fundamentals",
      desc: "Applying defensive security principles, SQL injection prevention, and network security awareness.",
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      icon: Sparkles,
      title: "Creative Technology",
      desc: "Blending interactive web experiences, game logic, and responsive systems.",
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-title */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            01 // BACKGROUND & PHILOSOPHY
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-cyan-400/30" />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12 sm:mb-16">
          Turning technical curiosity into{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            impactful software.
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Narrative Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#070914]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-6 text-xs font-mono text-zinc-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>PROFILE_OVERVIEW // DOSSIER</span>
              </div>

              {/* Exact Approved Bio */}
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-light mb-6">
                I’m a <span className="text-white font-medium">Computer Science graduate</span> interested in software development, AI-powered applications, cybersecurity, and interactive web experiences.
              </p>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-light mb-8">
                I enjoy learning by <span className="text-cyan-300 font-medium">building real projects</span> and turning technical ideas into useful applications.
              </p>

              {/* Status Pill Card */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-zinc-500 text-[10px]">ACADEMIC FOUNDATION</div>
                    <div className="text-zinc-200 font-medium">Computer Science Engineer</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-zinc-500 text-[10px]">CORE METHODOLOGY</div>
                    <div className="text-zinc-200 font-medium">Build • Break • Learn • Improve</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pillar Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {coreStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg border ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
