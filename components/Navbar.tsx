"use client";

import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const buttons = [
  { text: "home", route: "/" },
  { text: "projects", route: "/projects" },
  { text: "skills", route: "/skills" },
  { text: "experience", route: "/experience" },
  { text: "contact", route: "/contact" },
];
export function Navbar({ page }: { page?: string }) {
  return (
    <header className="justify-center flex  top-2 z-50 flex-1">
      <nav className="flex z-50  justify-between items-center md:w-[500px] max-md:w-full h-16 capitalize">
        {buttons.map((btn) => (
          <NavButton key={btn.text} text={btn.text} route={btn.route} />
        ))}
      </nav>
    </header>
  );
}
