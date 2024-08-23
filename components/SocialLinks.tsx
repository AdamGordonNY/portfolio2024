"use client";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandXbox,
  IconMail,
} from "@tabler/icons-react";
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
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/adam-gordon119",
  },
  {
    title: "Xbox",
    icon: <IconBrandXbox />,
    href: "https://account.xbox.com/en-us/profile?gamertag=bingpot789",
  },
];
const SocialLinks = () => {
  return (
    <FloatingDock
      items={socialArray}
      desktopClassName="sticky bottom-2 "
      mobileClassName="sticky bottom-0 w-full "
    />
  );
};

export default SocialLinks;
