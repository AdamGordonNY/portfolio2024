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
    <div className="flex my-2   w-full flex-1 flex-col items-center justify-center  bg-dark-200  text-white-800">
      <div>
        <span className="base-regular md:paragraph-regular flex items-center gap-x-1 text-center text-gradient-highlight">
          Contact me <BsArrowDown />
        </span>
        <br />
        <span className="small-regular italic"> Social Links In Footer</span>
      </div>
      <div className="paragraph-semibold mb-10 flex w-3/5 min-w-[375px] font-satoshi max-md:w-full">
        <ContactForm />
      </div>
      <TypewriterEffectSmooth
        words={words}
        className="modern-paragraph-regular flex  w-full items-center justify-center text-gradient-highlight"
      />
    </div>
  );
};

export default Contact;
