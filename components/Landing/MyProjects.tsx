import React from "react";
import SocialButton from "../ReusableButton";
import { Compare } from "../ui/compare";
import Image from "next/image";
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
    <div className="mq450:w-[390px] mq450:justify-center  flex items-center justify-center py-5 flex-col-reverse">
      <div className="mq450:w-3/4 flex flex-col text-center justify-center">
        <span className="text-white-900 basis-1/4">See my latest Work!</span>
        <SocialButton type="nav" social={buttons[0]} />
      </div>

      <div className="mq450:place-self-center relative flex w-full justify-center">
        <Compare
          firstImage="/images/devtodayslanted.svg"
          secondImage="/images/gitnoteslanted.svg"
          firstImageClassName="object-cover mq450:size-[300px] absolute mq450:hidden"
          secondImageClassname="object-cover mq450:hidden absolute  mq450:size-[300px]"
          slideMode="hover"
          autoplay
          autoplayDuration={6000}
        />
      </div>
    </div>
  );
};

export default MyProjects;
