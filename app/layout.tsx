import type { Metadata } from "next";
import { Inter, Figtree, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
import ThemeContextProvider from "@/providers/ThemeContextProvider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "Adan Gordon - Full Stack NextJs Developer | New York, NY",
  description:
    "Full Stack NextJs Developer based in New York, NY. I specialize in building high-quality websites and applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${figtree.className} ${poppins.className} dark:bg-dot-white/[0.2] flex min-h-screen w-full flex-1 grow flex-col items-center justify-center bg-white-900 dark:bg-dark-200`}
      >
        <ThemeContextProvider>
          <Navbar />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
