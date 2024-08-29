"use client";
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandXbox,
  IconMail,
} from "@tabler/icons-react";
import { HiOutlineDownload } from "react-icons/hi";

import SocialButton from "./SocialButton";
export type SocialMediaButton = {
  title: string;
  icon: JSX.Element;
  href: string;
};

export const socialArray: SocialMediaButton[] = [
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
  {
    title: "Resume",
    icon: <HiOutlineDownload />,
    href: "/resume.pdf",
  },
];
const SocialLinks = () => {
  return (
    <div className="flex w-full items-center justify-center gap-x-4 rounded-full py-3">
      {socialArray.map((social) => (
        <SocialButton key={social.title} social={social} />
      ))}
    </div>
  );
};

export default SocialLinks;
