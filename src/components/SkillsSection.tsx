"use client";

import React from "react";
import {
  Code2,
  Layers,
  BrainCircuit,
  ShieldAlert,
  Wrench,
  Terminal,
} from "lucide-react";

interface SkillCategory {
  title: string;
  categoryCode: string;
  icon: React.ElementType;
  accent: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    categoryCode: "SYS.LANGUAGES",
    icon: Code2,
    accent: "text-cyan-400 border-cyan-500/30",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "Development",
    categoryCode: "SYS.FRAMEWORKS",
    icon: Layers,
    accent: "text-purple-400 border-purple-500/30",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Flask",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "AI / Emerging Technology",
    categoryCode: "SYS.AI_INTELLIGENCE",
    icon: BrainCircuit,
    accent: "text-pink-400 border-pink-500/30",
    skills: [
      "Conversational AI",
      "ElevenLabs",
      "AI-assisted development",
      "Interactive applications",
    ],
  },
  {
    title: "Cybersecurity",
    categoryCode: "SYS.DEFENSE",
    icon: ShieldAlert,
    accent: "text-blue-400 border-blue-500/30",
    skills: [
      "Web security fundamentals",
      "SQL injection prevention",
      "Phishing detection",
      "Network security",
    ],
  },
  {
    title: "Tools & Infrastructure",
    categoryCode: "SYS.TOOLCHAIN",
    icon: Wrench,
    accent: "text-emerald-400 border-emerald-500/30",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Supabase",
      "PostgreSQL",
      "Gradle",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                03 // CORE ARSENAL
              </span>
              <div className="h-px w-16 bg-cyan-400/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
            Verified technologies, languages, frameworks, and engineering competencies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`relative rounded-2xl bg-[#070914]/85 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(0,240,255,0.12)] group ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-white/[0.04] border ${cat.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cat.title}
                        </h3>
                        <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
                          {cat.categoryCode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-200 hover:scale-[1.03] cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Micro-Indicator */}
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>CAPACITY: VERIFIED</span>
                  <span className="text-zinc-600">{cat.skills.length} MODULES</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
