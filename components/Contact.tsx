"use client";

import React from "react";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ContactForm from "./ContactForm";
import SocialLinks, { socialArray } from "./SocialLinks";
import SocialButton from "./SocialButton";
const Contact = () => {
  const words = [
    { text: "Thanks" },
    { text: "for" },
    { text: "stopping" },
    { text: "by!" },
  ];
  return (
    <div className="flex min-h-screen   w-full flex-1 flex-col items-center justify-center gap-y-2  bg-dark-200 pt-10 text-white-800">
      <TypewriterEffectSmooth
        words={words}
        className="paragraph-semibold flex  w-full items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent "
      />
      <div>
        <span className="base-regular md:small-regular flex items-center gap-x-1">
          {" "}
          Take my <SocialButton type="social" social={socialArray[3]} />
          or
          <SocialButton type="social" social={socialArray[0]} />
          me directly!
        </span>{" "}
      </div>
      <div className="paragraph-semibold mb-10 flex w-3/5 min-w-[375px] font-satoshi max-md:w-full">
        <ContactForm />
      </div>
      <SocialLinks type="social" />
    </div>
  );
};

export default Contact;
