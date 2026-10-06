"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle,
  Terminal,
  Sparkles,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      setSubmitted(true);
      if (data.activationNeeded) {
        setActivationNotice(true);
        setStatusMessage(
          "First-time activation required: Check deepsdeepika967@gmail.com and click 'Activate Form' to enable automatic forwarding."
        );
      } else {
        setStatusMessage(data.message || "Message delivered to deepsdeepika967@gmail.com!");
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err.message || "Failed to send through gateway. Please use direct email below."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:deepsdeepika967@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
    formState.name || "Visitor"
  )}&body=${encodeURIComponent(formState.message || "Hi Deepika,")}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            06 // DIRECT TRANSMISSION
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light">
            Have an idea? Let&apos;s build it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#070914]/85 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-zinc-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>COMMS_LINK // CONNECT</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Open for Collaboration & Engineering Opportunities
              </h3>
              
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                Whether you have an inquiry about software projects, AI integration, full-stack ideas, or wish to connect — feel free to drop a transmission.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block">PRIMARY INBOX</span>
                    <a
                      href="mailto:deepsdeepika967@gmail.com"
                      className="hover:text-cyan-400 transition-colors break-all"
                    >
                      deepsdeepika967@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block">LOCATION</span>
                    <span>Bengaluru, India • Remote / Global</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                GATEWAY: ACTIVE
              </span>
              <span className="text-zinc-500">DIRECT EMAIL FORWARD</span>
            </div>

            {/* Direct Mailto Fallback Button */}
            <a
              href="mailto:deepsdeepika967@gmail.com"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/50 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>OR OPEN IN YOUR EMAIL APP DIRECTLY</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#070914]/85 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mb-4 text-cyan-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Transmission Dispatched
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md font-light mb-4">
                    {statusMessage}
                  </p>

                  {activationNotice && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-mono text-left mb-6 max-w-md">
                      <div className="font-bold text-amber-400 mb-1 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>IMPORTANT STEP:</span>
                      </div>
                      An activation email from <strong>FormSubmit</strong> was sent to <strong>deepsdeepika967@gmail.com</strong>. Click the <em>&quot;Activate Form&quot;</em> button inside that email to start receiving form messages instantly.
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setActivationNotice(false);
                        setFormState({ name: "", email: "", message: "" });
                      }}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border border-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>

                    <a
                      href={mailtoHref}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 text-cyan-200 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span>Direct Email Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-600 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-600 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Project or Message Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about what you're looking to build..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-600 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] transition-all duration-300 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>DISPATCHING VIA GATEWAY...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
