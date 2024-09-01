"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SocialMediaButton } from "./SocialLinks";
import { BackgroundGradient } from "./ui/background-gradient";
import NextArrow from "./ui/icons/NextArrow";
const otherButtons: SocialMediaButton[] = [
  {
    title: "Projects",
    icon: <NextArrow className="max-lg:size-5 lg:size-14 stroke-black-200" />,
    href: "/projects",
  },
];
const SocialButton = ({
  social,
  type,
}: {
  social?: SocialMediaButton;
  type: string;
}) => {
  if (type === "nav") {
    return (
      <BackgroundGradient containerClassName="flex  lg:h-14 h-7 lg:py-2 lg:px-8 lg:px-4 relative my-1 max-lg:px-4 max-lg:py-1  items-center justify-center">
        <Link href={otherButtons[0].href!}>
          <motion.button
            className=" hover:scale-120 "
            type="button"
            animate={{
              scale: [1, 1.1, 1],
            }}
          >
            {" "}
            <div className="lg:px-8 lg:py-2 items-center justify-center flex  gap-x-3 align-middle rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <span className="lg:modern-paragraph-regular max-lg:body-regular  items-center align-middle">
                {otherButtons[0].title}
              </span>
              {otherButtons[0].icon}
            </div>
          </motion.button>
        </Link>
      </BackgroundGradient>
    );
  }
  return (
    <BackgroundGradient containerClassName="flex  lg:h-14 h-7 lg:py-2 lg:px-8 lg:px-4 relative my-1 max-lg:px-4 max-lg:py-1  items-center justify-center">
      <Link href={social?.href!}>
        <motion.button
          className=" hover:scale-120 "
          type="button"
          animate={{
            scale: [1, 1.1, 1],
          }}
        >
          {" "}
          <div className="lg:px-8 lg:py-2 items-center justify-center flex  gap-x-3 align-middle rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {social?.title !== "See My Projects" && social?.icon}
            <span className="lg:modern-paragraph-regular max-lg:body-regular  items-center align-middle">
              {social?.title}
            </span>
            {social?.title === "See My Projects" && social?.icon}
          </div>
        </motion.button>
      </Link>
    </BackgroundGradient>
  );
};

export default SocialButton;
