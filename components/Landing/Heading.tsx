"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import SocialLinks from "../SocialLinks";
import { Compare } from "../ui/compare";
import { GradientButton } from "../TailwindCssButtons";
import SocialButton from "../SocialButton";
import NextArrow from "../ui/icons/NextArrow";
const Heading = () => {
  const buttons = [
    {
      title: "See My Projects",
      href: "/projects",
      icon: (
        <NextArrow className="fill-dark-100 text-dark-100 place-self-center" />
      ),
    },
  ];
  return (
    <div className="flex min-w-full flex-col px-0 pt-20 ">
      <p className="lg:modern-h2 items-center justify-center text-center text-white-800 ">
        Hi! I&apos;m{" "}
        <span className="lg:modern-h2 z-10  items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent">
          {" "}
          Adam Gordon!
        </span>
      </p>
      <p className="lg:modern-h1  items-center justify-center text-center text-white-800 ">
        Software Engineer from New York.
      </p>
      <SocialLinks type="social" />{" "}
      <p className="lg:paragraph-regular z-10 items-center justify-center text-center text-white-800">
        Specializing in Next.JS, React, and TailwindCSS, with similar experience
        working with Laravel, Nuxt.JS, and Vue.
      </p>{" "}
      <div className="flex items-center justify-center p-3 gap-x-4">
        <SocialButton type="social" social={buttons[0]} />
        <Compare
          firstImage="/images/devtodayslanted.svg"
          secondImage="/images/gitnoteslanted.svg"
          firstImageClassName="object-cover "
          secondImageClassname="object-cover"
          slideMode="hover"
          autoplay
          autoplayDuration={6000}
        />
      </div>
    </div>
  );
};

export default Heading;
