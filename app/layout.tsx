import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import "./globals.css";

const inter = localFont({
    src: "./fonts/InterVF.ttf", // Corrected from .tff to .ttf
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGroteskVF.ttf", // Corrected from .tff to .ttf
    variable: "--font-space-grotesk",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Dev Overflow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: "/images/site-logo.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}