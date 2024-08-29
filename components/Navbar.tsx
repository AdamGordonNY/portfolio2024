"use client";
import { cn } from "@/lib/utils";
import { MdWorkHistory } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FloatingDock } from "./ui/floating-dock";
import { IconHome, IconMail } from "@tabler/icons-react";
import { BsPersonWorkspace } from "react-icons/bs";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
export function Navbar({ className }: { className?: string }) {
  const tabs = [
    {
      title: "Home",
      icon: <IconHome size={50} className="dark:stroke-white-500" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <BsPersonWorkspace
          size={50}
          className="dark:fill-white-500 dark:stroke-white-500"
        />
      ),
      href: "/projects",
    },
    {
      title: "Background",
      icon: (
        <MdWorkHistory
          size={50}
          className="dark:fill-white-500 dark:stroke-white-500"
        />
      ),
      href: "/background",
    },
    {
      title: "Skills",
      icon: (
        <GiSkills
          size={50}
          className="dark:fill-white-500 dark:stroke-white-500"
        />
      ),
      href: "/skills",
    },
    {
      title: "Contact",
      icon: <IconMail size={50} className="dark:stroke-white-500" />,
      href: "/contact",
    },
  ];
  return (
    <header
      className={cn(
        "fixed top-10 inset-x-0 w-full mx-auto font-sans z-50 flex items-center justify-center",
        className
      )}
    >
      <HoverBorderGradient
        as="div"
        className="flex w-full items-center justify-center "
      >
        <FloatingDock
          items={tabs}
          desktopClassName="items-center justify-center bg-gradient-to-r from-dark-100 rounded-full  stroke-white-500 fill-white-900 dark:border-white-900 dark:text-white-800"
          mobileClassName=""
        />
      </HoverBorderGradient>
    </header>
  );
}
