"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import { renderIcon } from "@/lib/utils";
import CaseStudyButton from "./CaseStudyButton";

interface ProjectCardProps {
  caseStudy: CaseStudy;
}

const ProjectCard = ({ caseStudy }: ProjectCardProps) => {
  return (
    <div className="mq450:gap-[18px] flex flex-col items-start justify-start gap-6 overflow-hidden rounded-[23px] border border-solid border-darkslategray p-2 [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)] md:w-[600px]">
      <section className="relative flex w-full flex-row items-start justify-start overflow-hidden rounded-[14px]">
        <div className="h-[330px] w-full">
          <Link href={caseStudy.links?.portfolioPath!}>
            <Image
              className="mq450:size-6 absolute size-full object-cover p-0.5 text-white-500 md:size-12"
              alt={caseStudy.title}
              src={caseStudy.cardImage}
              layout="fill"
            />
          </Link>
        </div>
      </section>
      <section className="flex w-full flex-col items-start justify-start gap-6 text-center text-[32px] text-white-900">
        <div className="flex w-full flex-col items-start justify-center gap-[18px]">
          <h2 className="modern-h3 w-full text-center text-white-900">
            {caseStudy.title}
          </h2>
          <div className="mq450:text-base mq450:leading-[21px] text-xl leading-[130%] text-lightsteelblue">
            {caseStudy.description}
          </div>
        </div>
        <div className="flex w-full flex-row max-mq450:justify-center justify-between gap-5 font-satoshi">
          <div className="flex flex-row items-center md:paragraph-regular small-regular justify-start gap-x-4">
            <IconBrandGithub />
            <Link href={caseStudy.links.repo!}> Github Repo</Link>
          </div>
          <div className="flex flex-row bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent items-center md:paragraph-regular small-regular justify-start gap-x-4">
            {" "}
            <Link href={caseStudy.links?.liveSite!}>Live Website</Link>
          </div>
          <div className="flex flex-row items-center md:paragraph-regular small-regular justify-start gap-x-4">
            {" "}
            <CaseStudyButton
              href={caseStudy.links?.portfolioPath!}
              title={"Case Study"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
