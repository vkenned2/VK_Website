import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vishal Kennedy - Conservation, Energy & Policy Portfolio",
  description:
    "Vishal Kennedy, Ph.D. candidate in conservation and environmental policy. Data-driven decision-making across biodiversity, energy, and sustainability, translating national spatial analysis into U.S. policy.",
  openGraph: {
    title: "Vishal Kennedy - Conservation, Energy & Policy Portfolio",
    description:
      "Vishal Kennedy, Ph.D. candidate in conservation and environmental policy. Data-driven decision-making across biodiversity, energy, and sustainability, translating national spatial analysis into U.S. policy.",
    url: "https://vishalkennedy.com",
    siteName: "Vishal Kennedy Portfolio",
    images: [
      {
        url: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Magazines/2026/Summer-2026/NEXT-GEN-Vishal-Kennedy-SUMMER26-960x630.jpg",
        width: 960,
        height: 630,
        alt: "Vishal Kennedy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Kennedy - Conservation, Energy & Policy Portfolio",
    description:
      "Vishal Kennedy, Ph.D. candidate in conservation and environmental policy. Data-driven decision-making across biodiversity, energy, and sustainability, translating national spatial analysis into U.S. policy.",
    images: [
      "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Magazines/2026/Summer-2026/NEXT-GEN-Vishal-Kennedy-SUMMER26-960x630.jpg",
    ],
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-500/30 selection:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
