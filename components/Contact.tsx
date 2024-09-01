"use client";
import Link from "next/link";
import React from "react";

import { GradientButton } from "./TailwindCssButtons";

import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ContactForm from "./ContactForm";
import SocialLinks, { socialArray } from "./SocialLinks";
import SocialButton from "./SocialButton";
const Contact = () => {
  const router = useRouter();
  const words = [
    { text: "Thanks", className: "" },
    { text: "for" },
    { text: "stopping" },
    { text: "by!" },
  ];
  return (
    <div className="flex flex-1 font-sans   min-h-screen w-full flex-col items-center justify-center bg-white-900 pt-10 dark:bg-dark-200 gap-y-2 dark:text-white-800">
      <TypewriterEffectSmooth
        words={words}
        className="flex w-full  items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent "
      />
      <h2 className="modern-base-regular flex items-center gap-x-4">
        {" "}
        Take my <SocialButton social={socialArray[5]}></SocialButton> or
        <SocialButton social={socialArray[0]} />
        me directly!
      </h2>{" "}
      <div className="flex min-w-[375px] w-[60%] mb-10">
        <ContactForm />
      </div>
      <SocialLinks />
    </div>
  );
};

export default Contact;
