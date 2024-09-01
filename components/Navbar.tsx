"use client";
import { cn } from "@/lib/utils";
import { MdWorkHistory } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FloatingDock } from "./ui/floating-dock";
import { IconHome, IconMail } from "@tabler/icons-react";
import { BsPersonWorkspace } from "react-icons/bs";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import A from "./ui/icons/A";
import D from "./ui/icons/D";
import M from "./ui/icons/M";
import R from "./ui/icons/R";
import G from "./ui/icons/G";
import { BackgroundGradient } from "./ui/background-gradient";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
const buttons = ["about", "projects", "skills", "experience", "contact"];
export function Navbar({ type }: { type: string }) {
  const pathname = usePathname();
  return (
    <header className="flex min-w-full flex-1 h-16">
      <BackgroundGradient containerClassName="flex w-full bg-dark-200/ bg-opacity-80">
        <nav
          className="flex z-50 top-0 justify-between items-center md:w-[500px] max-md:w-full h-16"
          {...buttons.map((btn) => <NavButton key={btn} text={btn} />)}
        ></nav>
      </BackgroundGradient>
    </header>
  );
}
