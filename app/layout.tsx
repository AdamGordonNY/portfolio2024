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
        className={`${inter.className} ${figtree.className} ${poppins.className} flex min-h-screen w-full flex-1 grow flex-col items-center justify-center bg-white-900 dark:bg-dark-200`}
      >
        <ThemeContextProvider>
          <main className="z-60 flex flex-1 flex-col items-center justify-center px-0">
            <Navbar className="fixed left-0 z-50 h-10 w-full lg:top-20" />
            {children}
            <footer className="bg-white-100 dark:bg-dark-800 fixed bottom-0 z-20 flex h-20 w-full items-center justify-between px-8 md:hidden"></footer>
          </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
