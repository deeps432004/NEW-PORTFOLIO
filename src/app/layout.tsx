import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030307",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DEEPIKA H. NEERALAGI — Computer Science Engineer",
  description:
    "Portfolio of Deepika H. Neeralagi. Computer Science Engineer specializing in Software, AI, Cybersecurity, and Creative Technology.",
  keywords: [
    "Deepika H Neeralagi",
    "Computer Science Engineer",
    "Software Developer",
    "AI",
    "Cybersecurity",
    "Creative Technology",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Deepika H. Neeralagi" }],
  openGraph: {
    title: "DEEPIKA H. NEERALAGI — Computer Science Engineer",
    description:
      "I build things that make technology feel useful. Explore projects, engineering craft, and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[#030307] text-[#f1f5f9] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
