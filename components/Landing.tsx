"use client";
import React from "react";

import Image from "next/image";
import { GradientButton } from "./TailwindCssButtons";

const Landing = () => {
  return (
    <section className="z-10 flex min-w-full translate-y-10 flex-col items-center justify-between  bg-transparent px-0">
      <div className="flex min-w-full flex-col px-0 pt-[200px]">
        <p className="heading-1-bold items-center justify-center text-center text-white-800 ">
          Hi! I&apos;m{" "}
          <span className="heading-1-bold z-10  items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent">
            {" "}
            Adam Gordon!
          </span>
        </p>
        <p className="heading-1-bold z-10  items-center justify-center text-center text-white-800 ">
          Fullstack Software Engineer from New York.
        </p>
        <p className="modern-paragraph-regular z-10 items-center justify-center text-center text-white-800">
          Specializing in Next.JS, React, and TailwindCSS, with similar
          experience working with Laravel, Nuxt.JS, and Vue.
        </p>
      </div>{" "}
      <div className="flex flex-col items-center justify-center py-10">
        <GradientButton
          text="View My Work"
          className="place-self-center px-5"
        />
        <Image
          src="/images/splash.png"
          alt="hero"
          width={800}
          height={600}
          className="translate-y-10 place-self-center"
        />{" "}
      </div>
    </section>
  );
};

export default Landing;
