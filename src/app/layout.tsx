import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Deepika H. Neeralagi | Computer Science Engineer",
    description:
        "Portfolio of Deepika H. Neeralagi — Software, AI, Cybersecurity and Creative Technology.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}