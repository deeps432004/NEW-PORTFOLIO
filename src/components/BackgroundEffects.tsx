"use client";

import React from "react";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep dark gradient vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#030307]/70 to-[#030307]" />

      {/* Cyberpunk Grid Overlay */}
      <div className="cyber-grid cyber-grid-radial-mask absolute inset-0 opacity-25" />

      {/* Ambient Electric Glow Orbs */}
      <div
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-25 bg-[#00f0ff] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full blur-[140px] opacity-20 bg-[#a855f7] animate-pulse-glow-delayed"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-[140px] opacity-15 bg-[#3b82f6]"
        aria-hidden="true"
      />

      {/* Subtle Noise / Scanlines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
