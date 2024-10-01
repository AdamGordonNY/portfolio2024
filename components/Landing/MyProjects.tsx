import React from "react";

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
  { title: "Read More about me", href: "", icon: null },
];
const MyProjects = () => {
  return (
    <section className="custom-responsive-width mq450:max-w-full mq450:min-w-[374px] flex flex-col items-center justify-center ">
      {" "}
      <ReusableButton type="modal" text="A Quick History" />
      <div className="custom-responsive-width  relative mx-auto my-5 flex w-full flex-col items-center justify-center gap-y-3">
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
    </section>
  );
};

export default MyProjects;
