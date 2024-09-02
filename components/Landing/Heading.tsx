"use client";
import React from "react";
import SocialLinks from "../SocialLinks";
import { Compare } from "../ui/compare";
import SocialButton from "../SocialButton";
import NextArrow from "../ui/icons/NextArrow";
const Heading = () => {
  return (
    <section className="flex min-w-full flex-col px-0 pt-20 ">
      <p className="lg:modern-h2 items-center justify-center text-center text-white-800 ">
        Hi! I&apos;m{" "}
        <span className="lg:modern-h2 z-10  items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent">
          {" "}
          Adam Gordon!
        </span>
      </p>
      <p className="lg:modern-h1  items-center justify-center text-center text-white-800 ">
        Software Engineer
        <br /> from New York.
      </p>{" "}
      <p className="lg:paragraph-regular  items-center justify-center text-center text-white-800">
        Specializing in Next.JS, React, and TailwindCSS, with similar experience
        working with Laravel, Nuxt.JS, and Vue.
      </p>
      <SocialLinks type="social" />
    </section>
  );
};

export default Heading;
