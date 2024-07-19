"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Landing = () => {
  return (
    <div className="flex w-full">
      <TextGenerateEffect words={``} />
      <BackgroundBeams />
    </div>
  );
};

export default Landing;
