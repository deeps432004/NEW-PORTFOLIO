"use client";

import React from "react";
import { Hammer, Bug, BookOpen, TrendingUp, ArrowRight } from "lucide-react";

interface Step {
  step: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  borderGlow: string;
}

const steps: Step[] = [
  {
    step: "01",
    name: "BUILD",
    tagline: "Action & Architecture",
    description:
      "Transform ideas into functional software by writing code, establishing architectures, and deploying tangible prototypes early.",
    icon: Hammer,
    accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    borderGlow: "hover:border-cyan-400/60 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.25)]",
  },
  {
    step: "02",
    name: "BREAK",
    tagline: "Stress-Testing & Security",
    description:
      "Intentionally challenge the system, identify edge cases, test vulnerabilities, and discover where abstractions collapse under load.",
    icon: Bug,
    accent: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    borderGlow: "hover:border-rose-400/60 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)]",
  },
  {
    step: "03",
    name: "LEARN",
    tagline: "Root-Cause Analysis",
    description:
      "Deconstruct why things failed, understand fundamental principles, digest documentation, and master the underlying mechanics.",
    icon: BookOpen,
    accent: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    borderGlow: "hover:border-purple-400/60 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.25)]",
  },
  {
    step: "04",
    name: "IMPROVE",
    tagline: "Optimization & Polish",
    description:
      "Refactor for clarity, tighten security defenses, optimize performance, and iterate until the solution feels effortless and reliable.",
    icon: TrendingUp,
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    borderGlow: "hover:border-emerald-400/60 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)]",
  },
];

export default function HowIBuildSection() {
  return (
    <section id="how-i-build" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            04 // ENGINEERING ITERATION LOOP
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            How I{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            A continuous loop of creation, adversarial testing, learning from real constraints, and relentless refinement.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`relative rounded-2xl bg-[#070914]/85 border border-white/10 ${item.borderGlow} backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-zinc-600 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${item.accent} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Connecting Arrow indicator for desktop flow */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>CYCLE_STAGE</span>
                  <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors font-semibold">
                    {idx < 3 ? `NEXT → 0${idx + 2}` : "LOOP → 01"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
