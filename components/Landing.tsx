"use client";
import React from "react";

import { GradientButton } from "./TailwindCssButtons";

import { WavyBackground } from "./ui/wavy-background";

const Landing = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <GradientButton text="See My Work"></GradientButton>
      <WavyBackground className="z-0" />
    </section>
  );
};

export default Landing;
