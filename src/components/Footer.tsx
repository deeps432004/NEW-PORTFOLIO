"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020205] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                [DHN.SYS]
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">
                PORTFOLIO ARCHITECTURE
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              DEEPIKA H. NEERALAGI
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
              Computer Science Engineer • &ldquo;I build things that make technology feel useful.&rdquo;
            </p>
          </div>

          {/* Nav Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <nav className="flex flex-wrap gap-5 text-xs font-mono text-zinc-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#how-i-build" className="hover:text-cyan-400 transition-colors">
                How I Build
              </a>
              <a href="#exploring" className="hover:text-cyan-400 transition-colors">
                Exploring
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://github.com/deeps432004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="mailto:deepsdeepika967@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                Email
              </a>
            </nav>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/50 text-zinc-400 hover:text-cyan-300 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Deepika H. Neeralagi. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
