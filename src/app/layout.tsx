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
  title: "Vishal Kennedy | Data-Driven Policy • Measurement, Causal Analysis & Analytics",
  description:
    "Vishal Kennedy - Data scientist specializing in quantitative measurement, policy evaluation, and external reporting. Six years of quantitative research experience using Python, R, and SQL across federal, administrative, and behavioral datasets.",
  openGraph: {
    title: "Vishal Kennedy | Data-Driven Policy • Measurement, Causal Analysis & Analytics",
    description:
      "Vishal Kennedy - Data scientist specializing in quantitative measurement, policy evaluation, and external reporting. Six years of quantitative research experience using Python, R, and SQL across federal, administrative, and behavioral datasets.",
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
    title: "Vishal Kennedy | Data-Driven Policy • Measurement, Causal Analysis & Analytics",
    description:
      "Vishal Kennedy - Data scientist specializing in quantitative measurement, policy evaluation, and external reporting. Six years of quantitative research experience using Python, R, and SQL across federal, administrative, and behavioral datasets.",
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
