"use client";
import React from "react";
import { GradientButton } from "./TailwindCssButtons";
import { WavyBackground } from "./ui/wavy-background";

const Landing = () => {
  return (
    <WavyBackground className="flex w-full flex-col  items-center justify-center px-10">
      {" "}
      <div className="flex w-full flex-col items-center align-top">
        <h1 className="heading-1-bold z-10 flex w-full items-center justify-center text-center text-white-900  ">
          Hi! I&apos;m Adam Gordon , <br />a Next.JS developer from New York.
        </h1>
        <p className="modern-paragraph-regular z-10 text-white-800">
          Specializing in Full Stack NextJS projects, you draw it, I build it.
        </p>
        <GradientButton className="z-20 mx-auto my-4" text="See My Work" />
      </div>
    </WavyBackground>
  );
};

export default Landing;
