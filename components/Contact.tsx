"use client";
import Link from "next/link";
import React from "react";

import { GradientButton } from "./TailwindCssButtons";

import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";
const Contact = () => {
  const router = useRouter();
  const words = [
    { text: "Thanks", className: "" },
    { text: "for" },
    { text: "stopping" },
    { text: "by!" },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white-900 pt-10 dark:bg-dark-200 gap-y-2 dark:text-white-800">
      <TypewriterEffectSmooth
        words={words}
        className="flex w-full items-center justify-center bg-gradient-to-l from-gradient-start to-gradient-end bg-clip-text text-center text-transparent "
      />
      <h2 className="modern-h3 flex items-center gap-x-4">
        {" "}
        Take my{" "}
        <span
          onClick={() => router.push(`/resume.pdf`)}
          className=" bg-gradient-to-l from-gradient-start to-gradient-end bg-clip-text text-transparent cursor-pointer"
        >
          Resume
        </span>
        or{" "}
        <Link href={`mailto:adam@adam-gordon.info`}>
          <GradientButton
            text="Email Me"
            className="z-20 mx-auto modern-body-medium"
          />
        </Link>{" "}
        directly!
      </h2>{" "}
      <div className="flex min-w-[375px] w-[60%] mb-10">
        <ContactForm />
      </div>
      <SocialLinks />
    </div>
  );
};

export default Contact;
