"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { SocialMediaButton } from "./SocialLinks";
import { BackgroundGradient } from "./ui/background-gradient";
const otherButtons: SocialMediaButton[] = [
  {
    title: "Projects",
    icon: null,
    href: "/projects",
  },
];
const ReusableButton = ({
  social,
  type,
  text,
  link,
  className,
}: {
  social?: SocialMediaButton;
  type?: string;
  text?: string;
  link?: string;
  className?: string;
}) => {
  if (type === "nav") {
    return (
      <BackgroundGradient containerClassName="flex max-md:min-w-[100px] lg:h-14 h-7  lg:px-8  relative my-1 px-2 py-1  items-center justify-center content-center">
        <Link href={otherButtons[0].href!}>
          <motion.button
            className=" hover:scale-120 max-md:body-regular "
            type="button"
            animate={{
              scale: [1, 1.1, 1],
            }}
          >
            {" "}
            <div className="group relative flex items-center justify-center  gap-x-3 rounded-[6px] align-middle  text-white-900 transition duration-200 hover:bg-transparent lg:px-8 lg:py-2">
              <span className="lg:paragraph-regular max-lg:body-regular  items-center align-middle font-satoshi">
                {otherButtons[0].title}
              </span>
              {otherButtons[0]?.icon!}
            </div>
          </motion.button>
        </Link>
      </BackgroundGradient>
    );
  }
  if (type === "social" || (text && type === "background")) link = "/skills";
  else if (type === "live") {
    text = "Live Site";
  }
  return (
    <BackgroundGradient containerClassName="flex items-center justify-center lg:h-14 h-7 lg:py-2 lg:px-8 relative my-1 max-lg:px-4 max-lg:py-1 mq450:w-full">
      <Link href={social?.href! || link!}>
        <button className="text-center" type="button">
          <div className="mq450:min-w-full flex items-center justify-center gap-x-3 rounded-[6px] text-white-900 transition duration-200 hover:bg-transparent lg:px-4 lg:py-2">
            <span className="lg:paragraph-regular max-lg:body-regular font-satoshi text-white-900">
              {social?.title} {text === "live" ? "Live Site" : text}
            </span>{" "}
            {social?.icon! && social.icon}
          </div>
        </button>
      </Link>
    </BackgroundGradient>
  );
};

export default ReusableButton;
