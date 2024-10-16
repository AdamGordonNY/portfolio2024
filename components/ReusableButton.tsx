"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { SocialMediaButton } from "./SocialLinks";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconBrandBlogger } from "@tabler/icons-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
const otherButtons: SocialMediaButton[] = [
  {
    title: "Projects",
    icon: null,
    href: "/projects",
  },
  {
    title: "Read More About Me",
    icon: <IconBrandBlogger />,
    href: "",
  },
  {
    title: "Blog",
    icon: <IconBrandBlogger />,
    href: "/social",
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
              scale: [1, 1.2, 1],
            }}
          >
            {" "}
            <div className="group relative flex items-center  justify-center gap-x-3 rounded-[6px] align-middle  text-white-900 transition duration-200 hover:bg-transparent lg:px-8 lg:py-2">
              <span className="lg:paragraph-regular max-lg:body-regular items-center  justify-center align-middle font-satoshi">
                {otherButtons[0].title}
              </span>
              {otherButtons[0]?.icon!}
            </div>
          </motion.button>
        </Link>
      </BackgroundGradient>
    );
  }
  if (type === "modal") {
    return (
      <Modal>
        {" "}
        <BackgroundGradient containerClassName="flex max-md:min-w-[100px] lg:h-14 h-7  lg:px-8  relative my-1 px-2 py-1  items-center justify-center content-center my-2">
          <ModalTrigger className="flex flex-col items-center">
            {" "}
            <div className="flex items-center justify-center  gap-x-3 rounded-[6px] align-middle  text-white-900 transition duration-200 hover:bg-transparent lg:px-8 lg:py-2">
              <span className="lg:paragraph-regular max-lg:body-regular  items-center align-middle font-satoshi">
                {otherButtons[1].title}
              </span>
              {otherButtons[1]?.icon!}
            </div>
          </ModalTrigger>{" "}
        </BackgroundGradient>
        <ModalBody>
          <ModalContent className="text-center font-satoshi text-white-900">
            <p>
              Before I decided to go back to school for a degree in Computer
              Science, I was a middle manager in a call center for a successful
              window replacement company.
            </p>
            <br />
            <p>
              I have a track record of success in this area, as well as a long
              dream to run my own business or join a team of open-minded,
              forward-thinking individuals. I&apos;ve experience adversity
              throughout my life many times and it&apos;s a testament to my
              personal resiliency that I am still optimistic this can be
              achieved.
            </p>
            <br />
            <p>
              While my primary objective is to do the work I got a degree in, I
              have a wide array of interests and because I maintain an open mind
              and a willingness to learn, I am confident that I can adapt to any
              situation and thrive in it, as long as there is a core foundation
              of trust and support within the team itself. I had gone to school
              for business after high school, because my parents implanted in my
              head without adding much else, that education was important. So
              without much direction or reason for why I was in college and alot
              of personal issues finding out who I am and what I waned to do, I
              never completed my business degree (though it did save me a year
              of school when I went back for Computer Science).
            </p>
          </ModalContent>
        </ModalBody>
      </Modal>
    );
  }
  if (type === "social" || (text && type === "background")) link = "/skills";
  if (type === "home" || text === "Blog") {
    link = "/social";
  } else if (type === "live") {
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
