import React from "react";
import SocialButton from "../ReusableButton";
import { Compare } from "../ui/compare";

import { IoIosArrowForward } from "react-icons/io";
const buttons = [
  {
    title: "Projects",
    href: "/projects",
    icon: (
      <IoIosArrowForward className="place-self-center fill-dark-100 stroke-dark-100" />
    ),
  },
];
const MyProjects = () => {
  return (
    <div className="flex items-center justify-center gap-x-10  p-3">
      <SocialButton type="nav" social={buttons[0]} />
      <Compare
        firstImage="/images/devtodayslanted.svg"
        secondImage="/images/gitnoteslanted.svg"
        firstImageClassName="object-cover max-md:size-[300px]"
        secondImageClassname="object-cover  max-md:size-[300px]"
        slideMode="hover"
        autoplay
        autoplayDuration={6000}
      />
    </div>
  );
};

export default MyProjects;
