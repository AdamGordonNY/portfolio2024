import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import ReusableButton from "../ReusableButton";
import Link from "next/link";
import { CardContainer } from "../ui/3d-card";
import Image from "next/image";
const buttons = [
  {
    title: "Projects",
    href: "/projects",
    icon: (
      <IoIosArrowForward className="place-self-center fill-white-900 stroke-dark-100" />
    ),
  },
  {
    title: "Blog",
    href: "/social",
    icon: (
      <FaBlogger className="place-self-center fill-white-900 stroke-dark-100" />
    ),
  },
  {
    title: "Skills",
    href: "/skills",
    icon: (
      <IoIosArrowForward className="place-self-center fill-white-900 stroke-dark-100" />
    ),
  },
];
const MyProjects = () => {
  return (
    <section className="custom-responsive-width mq450:max-w-full mq450:min-w-[374px] flex items-center  justify-between max-md:flex-col max-md:justify-center ">
      {" "}
      <div className="custom-responsive-width  relative mx-auto my-5 flex w-full flex-col items-center justify-center gap-y-3">
        {" "}
        <CardContainer className="mq450:min-w-full  mx-auto flex w-full flex-col items-center justify-center place-self-center max-md:flex-row">
          <Link href="/projects" className="basis-1">
            <Image
              src={`/images/devtodayslanted.svg`}
              alt="devToday"
              height={375}
              width={375}
              className="min-size-[360px] max-h-[400px] max-w-[400px] place-self-center rounded-lg object-contain drop-shadow-xl"
            />{" "}
          </Link>{" "}
        </CardContainer>{" "}
        <ReusableButton type="home" social={buttons[0]} />{" "}
        <span className="text-white-900">See my latest Work!</span>
      </div>{" "}
      <div className="custom-responsive-width  relative mx-auto my-5 flex w-full flex-col items-center justify-center gap-y-3">
        <CardContainer className="mq450:min-w-full relative mx-auto flex w-full  flex-col items-center justify-center place-self-center max-md:flex-row">
          <Link href="/skills">
            <Image
              src={`/images/jsmcert.png`}
              alt="masterclass certification"
              height={375}
              width={375}
              className="min-size-[360px] max-h-[400px] max-w-[400px] place-self-center rounded-lg object-contain drop-shadow-xl"
            />{" "}
          </Link>
        </CardContainer>{" "}
        <ReusableButton link="/skills" social={buttons[2]} />{" "}
        <span className="text-white-900">What it is that I do?</span>
      </div>
      <div className="custom-responsive-width  relative mx-auto my-5 flex w-full flex-col items-center justify-center gap-y-3">
        <CardContainer className="mq450:min-w-full relative mx-auto flex w-full  flex-col items-center justify-center place-self-center max-md:flex-row">
          <Link href="/skills">
            <Image
              src={`/images/blog.png`}
              alt="blog"
              height={375}
              width={375}
              className="min-size-[360px] max-h-[400px] max-w-[400px] rounded-lg object-contain drop-shadow-xl"
            />{" "}
          </Link>
        </CardContainer>{" "}
        <ReusableButton type="home" social={buttons[1]} />{" "}
        <span className="text-white-900">Regular updates!</span>
      </div>{" "}
    </section>
  );
};

export default MyProjects;
