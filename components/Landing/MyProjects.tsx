import React from "react";
import SocialButton from "../SocialButton";
import { Compare } from "../ui/compare";
import NextArrow from "../ui/icons/NextArrow";
const buttons = [
  {
    title: "Projects",
    href: "/projects",
    icon: (
      <NextArrow className="fill-dark-100 stroke-dark-100 place-self-center" />
    ),
  },
];
const MyProjects = () => {
  return (
    <div className="flex items-center justify-center p-3 gap-x-4">
      <SocialButton type="nav" social={buttons[0]} />
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
  );
};

export default MyProjects;
