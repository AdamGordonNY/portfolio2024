"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const landingText =
  "Hi, my name is Adam. I'm a Full Stack, Next.JS developer from New York.";
const Landing = () => {
  return (
    <div className="flex w-full">
      <TextGenerateEffect words={landingText} className="" />
      <BackgroundBeams className="bg-dark-100 text-white-900" />
    </div>
  );
};

export default Landing;
