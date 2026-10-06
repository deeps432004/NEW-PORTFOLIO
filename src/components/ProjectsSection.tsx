"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  ChevronRight,
  ShieldAlert,
  Terminal,
  Cpu,
  Boxes,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  badge?: string;
  notes?: string;
}

const projects: Project[] = [
  {
    number: "01",
    category: "Full-Stack Web Platform",
    title: "Restaurant QR Menu & Online Ordering System",
    description:
      "A full-stack restaurant ordering platform where customers can access a digital menu through a table QR link, add dishes to a cart, place orders and make payments.",
    githubUrl: "https://github.com/deeps432004/QR-Menu",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Razorpay",
    ],
    features: [
      "Digital restaurant menu",
      "Cart and order creation",
      "Server-side price verification",
      "Staff authentication",
      "Kitchen dashboard",
      "Order status workflow",
      "Razorpay test-mode payment",
    ],
    badge: "Payment Test Mode",
    notes:
      "Integrated with Razorpay test mode payment sandbox for safe simulation of end-to-end checkout and server-side transaction confirmation.",
  },
  {
    number: "02",
    category: "Conversational AI & Audio",
    title: "Virtual Voice Assistant",
    description:
      "A real-time conversational voice assistant built with Python and ElevenLabs that captures user voice, communicates with an AI agent and plays spoken responses.",
    githubUrl: "https://github.com/deeps432004/virtual-voice-assistant-with-elevenlabs",
    technologies: [
      "Python",
      "ElevenLabs",
      "PyAudio",
      "WebSockets",
      "python-dotenv",
    ],
    features: [
      "Real-time voice conversation",
      "Spoken AI responses",
      "ElevenLabs conversational AI integration",
      "Conversation transcript callbacks",
      "Environment-based secret management",
    ],
    notes:
      "Uses low-latency bidirectional WebSockets and PyAudio streams to deliver natural, voice-driven interactive exchanges.",
  },
  {
    number: "03",
    category: "Java & Game Engineering",
    title: "Minecraft Mod",
    description:
      "A Java-based Minecraft Forge mod that adds a custom item and demonstrates Minecraft mod development using Java, Forge and resource files.",
    githubUrl: "https://github.com/deeps432004/codedex-minecraft-item-mod",
    technologies: [
      "Java",
      "Minecraft Forge",
      "JDK 21",
      "Gradle",
      "JSON",
    ],
    features: [
      "Custom item",
      "Java mod logic",
      "Forge event system",
      "Custom texture",
      "Resource and language files",
      "Gradle build system",
    ],
    notes:
      "Engineered object registration, localized asset hierarchies, and Forge event hooks with Gradle build automation.",
  },
  {
    number: "04",
    category: "Creative Technology & Web App",
    title: "My Web Portfolio",
    description:
      "An interactive portfolio experience combining web development, visual interaction, small browser-based experiments and a Flask contact backend.",
    githubUrl: "https://github.com/deeps432004/My-portfolio",
    technologies: [
      "React",
      "Vite",
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "Vercel",
    ],
    features: [
      "Interactive desktop-style interface",
      "Custom cursor",
      "Browser-generated sounds",
      "Canvas mini-game",
      "Project demonstrations",
      "Flask contact backend",
      "GitHub/Vercel workflow",
    ],
    notes:
      "Explored expressive frontend interactions including Web Audio API audio synthesis, HTML5 Canvas game loops, and Python Flask microservice integration.",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                02 // FEATURED SYSTEMS
              </span>
              <div className="h-px w-16 bg-cyan-400/30" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Selected{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
            Production codebases, full-stack systems, voice AI agents, and creative software experiments.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative rounded-2xl bg-[#070914]/85 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(0,240,255,0.15)] hover:-translate-y-1"
            >
              {/* Top Meta Bar */}
              <div>
                <div className="flex items-center justify-between mb-5 font-mono text-xs">
                  <span className="text-2xl font-bold text-zinc-600 group-hover:text-cyan-400 transition-colors">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {project.badge}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] text-zinc-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06] group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features Preview */}
                <div className="space-y-2 mb-8 pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Key Features:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                    {project.features.slice(0, 4).map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 4 && (
                    <span className="text-[11px] font-mono text-cyan-400/80 block mt-1">
                      +{project.features.length - 4} more features in architecture
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Buttons: Details Modal + Direct GitHub Repository */}
              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.04] hover:bg-cyan-500/10 text-white hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 transition-all duration-200"
                >
                  <span>VIEW DETAILS</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-[#0c1024]/90 hover:bg-purple-500/10 text-zinc-300 hover:text-purple-300 border border-white/10 hover:border-purple-400/50 transition-all duration-200 group/btn"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-purple-400 transition-colors" />
                  <span>GITHUB CODE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#090b18] border border-cyan-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/50 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 font-mono text-xs mb-2">
                  <span className="text-cyan-400 font-bold">
                    PROJECT // {selectedProject.number}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-purple-400">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Description & Note */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.notes && (
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 mb-6 font-mono text-xs text-cyan-200/90 flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-cyan-300 block mb-0.5">ENGINEERING INSIGHT:</span>
                    {selectedProject.notes}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Stack & Tooling:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-white border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full Features Breakdown */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  System Capabilities & Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer with Direct GitHub Link and Close */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 border border-cyan-500/40 hover:border-cyan-400 text-white transition-all shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)]"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-300" />
                  <span>VIEW REPOSITORY ON GITHUB</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/10 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
