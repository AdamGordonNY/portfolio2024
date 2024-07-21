"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Tabs } from "./ui/tabs";

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10  mx-auto h-3/5 w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
    />
  );
};
export function Navbar({ className }: { className?: string }) {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="text-white  relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <p>Home</p>
          <DummyContent />
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
      title: "About",
      value: "about",
      content: (
        <div className="text-white relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <p>Skills</p>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div className="text-white relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold md:text-4xl">
          <p>Contact</p>
        </div>
      ),
    },
  ];
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto font-sans z-50 bg-dark-100 text-white-800",
        className
      )}
    >
      <Tabs
        tabs={tabs}
        contentClassName="hidden"
        containerClassName="bg-black-100 rounded-full flex justify-center rounded-full"
        activeTabClassName="text-dark-100 modern-paragraph-medium "
        tabClassName="text-white-500 modern-paragraph-medium"
      />
    </div>
  );
}
