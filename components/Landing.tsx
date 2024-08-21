"use client";
import React from "react";
import { GradientButton } from "./TailwindCssButtons";
import { WavyBackground } from "./ui/wavy-background";
import Image from "next/image";
// import { TextGenerateEffect } from "./ui/text-generate-effect";

const Landing = () => {
  return (
    <>
      <WavyBackground className="flex w-full flex-col  items-center justify-center px-10">
        {" "}
        {/* <header>
        <TextGenerateEffect
          words="Under Construction! Coming 8/2024 "
          className="text-red-500"
        />
      </header> */}
        <div className="flex w-full flex-col items-center align-top">
          <h1 className="heading-1-bold z-10 flex w-full items-center justify-center text-center  text-white-900 ">
            Hi! I&apos;m Adam Gordon , <br />a Fullstack Next.JS developer from
            New York.
          </h1>
          <p className="modern-paragraph-regular z-10 text-white-800">
            Specializing in Next.JS, React, and TailwindCSS, with similar
            experience working with Laravel, Nuxt.JS, and Vue.
          </p>
          <Image src="/images/splash.png" alt="hero" width={600} height={400} />
          <GradientButton className="z-20 mx-auto my-4" text="See My Work" />
        </div>
      </WavyBackground>
    </>
  );
};

export default Landing;
