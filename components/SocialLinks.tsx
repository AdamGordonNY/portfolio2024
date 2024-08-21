"use client";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconMail } from "@tabler/icons-react";
const socialArray = [
  {
    title: "Email",
    icon: <IconMail />,
    href: "mailto:adam@adam-gordon.info",
  },
  {
    title: "Github",
    icon: <IconBrandGithub />,
    href: "https://github.com/adamgordonny",
  },
  {
    title: "Twitter",
    icon: <IconBrandX />,
    href: "https://x.ai/realadamgordon1985",
  },
];
const SocialLinks = () => {
  return (
    <div className="bottom-10 flex w-full items-center  justify-center">
      <FloatingDock
        items={socialArray}
        desktopClassName="sticky bottom-5 bg-dark-900"
      />
    </div>
  );
};

export default SocialLinks;
