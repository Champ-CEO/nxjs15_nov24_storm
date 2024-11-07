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
    title: "DevFlow",
    description: "A better version of Stack Overflow",
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