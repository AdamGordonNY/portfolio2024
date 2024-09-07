"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import { IconBrandGithub } from "@tabler/icons-react";
import CaseStudyButton from "./CaseStudyButton";
import ReusableButton from "../ReusableButton";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  caseStudy: CaseStudy;
}

const ProjectCard = ({ caseStudy }: ProjectCardProps) => {
  const router = useRouter();
  return (
    <div className="max-mq450:gap-[18px] custom-responsive-width flex flex-col items-start justify-start gap-6 overflow-hidden rounded-[23px] border border-solid border-darkslategray px-1  py-2 [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)] md:w-[600px] md:p-4">
      <section className="custom-responsive-width relative flex w-full flex-row items-start justify-start overflow-hidden rounded-[14px]">
        <div className="h-[330px] w-full">
          <Link href={caseStudy.links?.portfolioPath!}>
            <Image
              className="mq450:size-6 custom-responsive-width absolute size-full object-cover p-2.5 text-white-500 md:size-12"
              alt={caseStudy.title}
              src={caseStudy.cardImage}
              layout="fill"
            />
          </Link>
        </div>
      </section>
      <section className="flex w-full flex-col items-start justify-start gap-6 text-center text-[32px] text-white-900">
        <div className="flex w-full flex-col items-start justify-center gap-[18px] ">
          <h2 className="modern-h3 w-full text-center text-white-900">
            {caseStudy.title}
          </h2>
          <div className="mq450:text-base mq450:leading-[21px] text-xl leading-[130%] text-lightsteelblue font-satoshi">
            {caseStudy.description}
          </div>
        </div>
        <div className="max-mq450:justify-center mq450:justify-around mq450:py-2 flex w-full flex-row items-center gap-5 font-satoshi md:justify-between ">
          <Link href={caseStudy.links.repo!}>
            <div className="md:paragraph-regular small-regular flex  items-center justify-center gap-x-4">
              <div className="inline-flex items-center justify-center gap-x-4">
                <IconBrandGithub className="mq450:size-10 max-mq450:size-12 mq450:place-self-center mq450:align-middle" />
                <span className="max-sm:hidden"> Github</span>{" "}
              </div>
            </div>{" "}
          </Link>
          <div className="md:paragraph-regular small-regular flex flex-row items-center justify-start gap-x-4 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent underline">
            {" "}
            <CaseStudyButton
              title="Live Site"
              href={caseStudy.links?.liveSite!}
            ></CaseStudyButton>
          </div>
          <div className="md:paragraph-regular small-regular flex flex-row items-center justify-start gap-x-4">
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
