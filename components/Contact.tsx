"use client";

import React from "react";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ContactForm from "./ContactForm";
import { BsArrowDown } from "react-icons/bs";
const Contact = () => {
  const words = [
    { text: "Thanks" },
    { text: "for" },
    { text: "stopping" },
    { text: "by!" },
  ];
  return (
    <div className="bg-dark-200 text-white-800   my-10 flex w-full flex-1 flex-col content-center items-center  justify-center">
      <div className="flex flex-col content-center items-center justify-center gap-y-2">
        <span className="md:modern-h3 base-regular text-gradient-highlight flex items-center gap-x-1  uppercase">
          Contact me
        </span>

        <BsArrowDown className="stroke-gradient-end size-10" />

        <span className="mq450:small-regular  text-center italic">
          {" "}
          (Social Links In Footer)
        </span>
      </div>
      <div className="paragraph-semibold font-satoshi mb-10 flex w-3/5 min-w-[375px] max-md:w-full">
        <ContactForm />
      </div>
      <TypewriterEffectSmooth
        words={words}
        className="modern-paragraph-regular text-gradient-highlight  flex w-full items-center justify-center"
      />
    </div>
  );
};

export default Contact;
