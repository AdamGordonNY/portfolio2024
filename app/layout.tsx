import type { Metadata } from "next";
import { Inter, Figtree, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
import ThemeContextProvider from "@/providers/ThemeContextProvider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

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
        className={`${inter.className} ${figtree.className} ${poppins.className}`}
      >
        <ThemeContextProvider>
          <BackgroundBeamsWithCollision className="flex min-h-screen min-w-full flex-1  flex-col items-center justify-center">
            <Navbar />
            {children}
            <Footer />
          </BackgroundBeamsWithCollision>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
