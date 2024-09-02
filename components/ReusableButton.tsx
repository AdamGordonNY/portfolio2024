"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { SocialMediaButton } from "./SocialLinks";
import { BackgroundGradient } from "./ui/background-gradient";
import NextArrow from "./ui/icons/NextArrow";
const otherButtons: SocialMediaButton[] = [
  {
    title: "Projects",
    icon: (
      <NextArrow className="fill-dark-100 stroke-black-200 max-lg:size-5 lg:size-14" />
    ),
    href: "/projects",
  },
];
const ReusableButton = ({
  social,
  type,
}: {
  social?: SocialMediaButton;
  type?: string;
}) => {
  if (type === "nav") {
    return (
      <BackgroundGradient containerClassName="flex max-md:min-w-[100px] lg:h-14 h-7 lg:py-2 lg:px-8 lg:px-4 relative my-1 max-lg:px-4 max-lg:py-1  items-center justify-center">
        <Link href={otherButtons[0].href!}>
          <motion.button
            className=" hover:scale-120 max-md:body-regular "
            type="button"
            animate={{
              scale: [1, 1.1, 1],
            }}
          >
            {" "}
            <div className="text-white group relative flex items-center  justify-center gap-x-3 rounded-[6px]  align-middle transition duration-200 hover:bg-transparent lg:px-8 lg:py-2">
              <span className="lg:paragraph-regular max-lg:body-regular  items-center align-middle font-satoshi">
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
          className=" hover:scale-120 max-md:body-regular "
          type="button"
          animate={{
            scale: [1, 1.1, 1],
          }}
        >
          {" "}
          <div className="text-white group relative flex items-center  justify-center gap-x-3 rounded-[6px]  align-middle transition duration-200 hover:bg-transparent lg:px-4 lg:py-2">
            {social?.title !== "Projects" && social?.icon}
            <span className="lg:modern-paragraph-regular max-lg:body-regular  items-center align-middle font-satoshi">
              {social?.title}
            </span>
            {social?.title === "See My Projects" && social?.icon}
          </div>
        </motion.button>
      </Link>
    </BackgroundGradient>
  );
};

export default ReusableButton;
