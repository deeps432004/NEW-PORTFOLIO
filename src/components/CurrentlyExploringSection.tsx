"use client";

import React from "react";
import { Brain, ShieldCheck, Terminal, Sparkles, Compass } from "lucide-react";

interface ExplorationTopic {
  title: string;
  category: string;
  icon: React.ElementType;
  focus: string;
  accent: string;
  glow: string;
}

const explorations: ExplorationTopic[] = [
  {
    title: "AI Engineering",
    category: "EXP // 01",
    icon: Brain,
    focus:
      "Conversational intelligence, voice agents, API-driven LLM orchestration, and practical AI tooling.",
    accent: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    glow: "hover:border-purple-400/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]",
  },
  {
    title: "Cybersecurity",
    category: "EXP // 02",
    icon: ShieldCheck,
    focus:
      "Defensive architecture, vulnerability identification, web threat vectors, and secure software development lifecycles.",
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    glow: "hover:border-blue-400/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]",
  },
  {
    title: "Full-Stack Development",
    category: "EXP // 03",
    icon: Terminal,
    focus:
      "Modern full-stack ecosystems, database-backed architectures, real-time sync, and scalable microservices.",
    accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    glow: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.2)]",
  },
  {
    title: "Interactive Web Experiences",
    category: "EXP // 04",
    icon: Sparkles,
    focus:
      "Expressive user interfaces, canvas graphics, Web Audio integration, and creative developer portfolios.",
    accent: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    glow: "hover:border-pink-400/50 hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.2)]",
  },
];

export default function CurrentlyExploringSection() {
  return (
    <section id="exploring" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                05 // ACTIVE FRONTIERS
              </span>
              <div className="h-px w-16 bg-cyan-400/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Currently{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Exploring
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
            Active domains where I am currently building, researching, and deepening domain mastery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {explorations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative rounded-2xl bg-[#070914]/85 border border-white/10 ${item.glow} backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-zinc-500">
                      {item.category}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${item.accent} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    IN_PROGRESS
                  </span>
                  <span>RESEARCH</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
