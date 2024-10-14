import type { Metadata } from "next";
import { Inter, Figtree, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
import ThemeContextProvider from "@/providers/ThemeContextProvider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Landing/Footer";

const inter = Inter({ subsets: ["latin"] });

const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "Adam Gordon - Full Stack NextJs Developer | New York, NY",
  description:
    "Full Stack NextJs Developer based in New York, NY. I specialize in building high-quality websites and applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.className} ${figtree.className} ${poppins.className} overflow-y-auto overflow-x-hidden`}
      >
        <ThemeContextProvider>
          <Navbar />
          <main className="w-full flex-1 bg-dark-200">{children}</main>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
