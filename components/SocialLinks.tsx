"use client";
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { HiOutlineDownload } from "react-icons/hi";

import ReusableButton from "./ReusableButton";
export type SocialMediaButton = {
  title: string;
  icon?: React.JSX.Element | null;
  href: string | null;
};

export const socialArray: SocialMediaButton[] = [
  {
    title: "Email",
    icon: <IconMail className="max-lg:size-5 lg:size-10" />,
    href: "mailto:adam@adam-gordon.info",
  },
  {
    title: "Github",
    icon: <IconBrandGithub className="max-lg:size-5 lg:size-10" />,
    href: "https://github.com/adamgordonny",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="max-lg:size-5 lg:size-10" />,
    href: "https://www.linkedin.com/in/adam-gordon119",
  },

  {
    title: "Resume",
    icon: <HiOutlineDownload className="max-lg:size-5 lg:size-10" />,
    href: "/resume.pdf",
  },
];

const SocialLinks = ({ type }: { type?: string }) => {
  if (type === "home") {
    return (
      <div className="flex  flex-1 content-center items-center justify-center gap-x-4 rounded-full py-3">
        {socialArray.map((social) => (
          <ReusableButton key={social.title} social={social} type="nav" />
        ))}
      </div>
    );
  }
  return (
    <div className="my-auto flex  min-w-[100px] flex-1 content-center items-center justify-center gap-x-4 rounded-full max-md:flex-col">
      {socialArray.map((social) => (
        <ReusableButton key={social.title} social={social} type="social" />
      ))}
    </div>
  );
};

export default SocialLinks;
