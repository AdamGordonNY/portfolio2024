"use client";
import React from "react";

import ReusableButton from "../ReusableButton";
import Image from "next/image";
import Link from "next/link";
import { CardContainer } from "../ui/3d-card";
const BackgroundAndSkills = () => {
  return (
    <div className="mq450:w-[390px] flex items-center  justify-around gap-x-10 py-5 flex-col">
      {" "}
      <div className="mq450:w-3/4 flex flex-col">
        <span className="text-white-900">See My Achievements and Skills!</span>
        <ReusableButton text="Background" link="/skills" />
      </div>
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
    </div>
  );
};

export default BackgroundAndSkills;
