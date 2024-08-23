"use client";
import { cn } from "@/lib/utils";

import { Tabs } from "./ui/tabs";
import Landing from "./Landing";

export function Navbar({ className }: { className?: string }) {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="text-white  relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <Landing />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="text-white relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <p>Projects</p>
        </div>
      ),
    },
    {
      title: "Background",
      value: "about",
      content: (
        <div className="text-white relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <p>Background</p>
        </div>
      ),
    },
    {
      title: "Contact Me",
      value: "contact",
      content: (
        <div className="text-white relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <p>Contact</p>
        </div>
      ),
    },
  ];
  return (
    <header
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto font-sans z-50 bg-dark-100 text-white-800",
        className
      )}
    >
      <Tabs
        tabs={tabs}
        contentClassName="hidden"
        containerClassName="darK:bg-white-500 rounded-full flex justify-center rounded-full"
        activeTabClassName="dark:text-dark-100 text-white-900 modern-paragraph-medium "
        tabClassName="text-white-500 modern-paragraph-medium"
      />
    </header>
  );
}
