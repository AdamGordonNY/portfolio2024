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
    <div className="custom-responsive-width mq450:min-w-[375px] flex flex-col items-center justify-center gap-y-5">
      <div className="custom-responsive-width container relative mx-auto my-5 flex w-full flex-col items-center justify-center gap-y-3">
        <Compare
          firstImage="/images/devtodayslanted.svg"
          secondImage="/images/gitnoteslanted.svg"
          firstImageClassName="object-cover custom-responsive-width absolute object-center "
          secondImageClassname="object-cover  absolute  custom-responsive-width"
          slideMode="hover"
          autoplay
          autoplayDuration={6000}
        />
        <ReusableButton type="nav" social={buttons[0]} />{" "}
        <span className="text-white-900">See my latest Work!</span>
      </div>

      <CardContainer className="mq450:min-w-full relative mx-auto flex w-full items-center justify-center place-self-center">
        <Link href="/skills">
          <Image
            src={`/images/jsmcert.png`}
            alt="masterclass certification"
            height={400}
            width={600}
            className="rounded-lg object-contain drop-shadow-xl"
          />{" "}
        </Link>
      </CardContainer>

      <ReusableButton text="Background" link="/skills" />
      <span className="text-white-900">See My Achievements and Skills!</span>
    </div>
  );
};

export default MyProjects;
