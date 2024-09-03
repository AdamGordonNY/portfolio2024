"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import { IconArrowRight } from "@tabler/icons-react";
import { renderIcon } from "@/lib/utils";

interface ProjectCardProps {
  caseStudy: CaseStudy;
}

const ProjectCard = ({ caseStudy }: ProjectCardProps) => {
  return (
    <div className="mq450:gap-[18px] flex flex-col items-start justify-start gap-6 overflow-hidden rounded-[23px] border border-solid border-darkslategray p-6 [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)] md:w-full">
      <section className="relative flex w-full flex-row items-start justify-start overflow-hidden rounded-[14px]">
        <div className="h-[330px] w-full">
          <Link href={caseStudy.links?.portfolioPath!}>
            <Image
              className="mq450:size-6 absolute size-full object-cover p-0.5 text-white-500 md:size-12"
              alt={caseStudy.title}
              src={caseStudy.cardImage}
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
      </section>
      <section className="flex w-full flex-col items-start justify-start gap-6 text-left text-[32px] text-white-900">
        <div className="flex w-full flex-col items-start justify-center gap-[18px]">
          <h2 className="modern-h3 w-full text-center text-white-900">
            {caseStudy.title}
          </h2>
          <div className="mq450:text-base mq450:leading-[21px] text-xl leading-[130%] text-lightsteelblue">
            {caseStudy.description}
          </div>
        </div>
        <div className="mq450:flex-wrap t flex w-full flex-row justify-between gap-5">
          <div className="flex flex-row items-center justify-start gap-x-4">
            {caseStudy.tech.map(
              (item, idx) => idx < 5 && renderIcon(item.toLowerCase())
            )}
          </div>
          <div className="mq450:text-base flex flex-row items-center">
            <Link
              href={caseStudy.links?.liveSite!}
              className="inline-flex items-center gap-x-2"
            >
              <span className="base-semibold md:small-bold text-white-900">
                Live Website
              </span>
              <IconArrowRight className="mq450:size-6 text-white-500 md:size-12" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
