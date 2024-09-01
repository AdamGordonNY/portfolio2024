"use client";
import React from "react";

import Image from "next/image";
import { GradientButton } from "./TailwindCssButtons";
import { useRouter } from "next/navigation";
import Heading from "./Landing/Heading";

const Landing = () => {
  const router = useRouter();
  const handleNavigate = async () => {
    router.push("/projects");
  };
  return (
    <section className=" flex min-w-full  flex-col items-center justify-between ">
      <Heading />
      <div className="flex flex-col items-center justify-center py-10">
        <GradientButton
          text="View My Work"
          className="place-self-center px-5"
          handleNavigate={handleNavigate}
        />
        <Image
          src="/images/splash.png"
          alt="hero"
          width={800}
          height={600}
          className="place-self-center md:translate-y-10"
        />{" "}
      </div>
    </section>
  );
};

export default Landing;
