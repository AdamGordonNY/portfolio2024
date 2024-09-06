import React from "react";

import { Compare } from "../ui/compare";

import { IoIosArrowForward } from "react-icons/io";
import ReusableButton from "../ReusableButton";
import Link from "next/link";
import { CardContainer } from "../ui/3d-card";
import Image from "next/image";
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
    <div className="mq450:w-[390px] mq450:justify-center  flex flex-col-reverse items-center justify-center py-5">
      <span className="text-white-900">See My Achievements and Skills!</span>
      <ReusableButton text="Background" link="/skills" />
      <Link href="/skills">
        <CardContainer className="relative flex p-1">
          <Image
            src={`/images/jsmcert.png`}
            alt="masterclass certification"
            height={400}
            width={600}
            className="mq450:w-[390px] rounded-lg object-contain drop-shadow-xl"
          />{" "}
        </CardContainer>
      </Link>
      <span className="basis-1/4 text-white-900">See my latest Work!</span>
      <ReusableButton type="nav" social={buttons[0]} />

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
