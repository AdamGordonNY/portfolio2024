"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import { IconBrandGithub } from "@tabler/icons-react";
import CaseStudyButton from "./CaseStudyButton";

interface ProjectCardProps {
  caseStudy: CaseStudy;
}

const ProjectCard = ({ caseStudy }: ProjectCardProps) => {
  return (
    <div className="custom-responsive-width mq450:px-0 flex w-full max-w-[600px] flex-col gap-6 overflow-hidden rounded-[23px] border border-solid border-darkslategray bg-gradient-to-b from-[#04071d] to-[#0c0e23] p-4">
      {/* Image Section */}
      <section className="relative w-full overflow-hidden rounded-[14px]">
        <Link href={caseStudy.links?.portfolioPath!}>
          <Image
            className="h-auto w-full object-cover"
            alt={caseStudy.title}
            src={caseStudy.cardImage}
            width={600}
            height={330}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </Link>
      </section>

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex w-full flex-col justify-center gap-4 text-white-900">
          <h2 className="text-white text-2xl font-bold md:text-3xl">
            {caseStudy.title}
          </h2>
          <p className="text-base text-lightsteelblue md:text-xl">
            {caseStudy.description}
          </p>
        </div>

        {/* Links and Buttons Section */}
        <div className="flex w-full items-center justify-around gap-4">
          {/* GitHub Link */}
          <Link href={caseStudy.links.repo!}>
            <div className="flex items-center justify-center gap-2">
              <IconBrandGithub className="size-6 stroke-white-800" />
              <span className="hidden text-white-900 sm:block">GitHub</span>
            </div>
          </Link>

          {/* Live Site Button */}
          <CaseStudyButton
            title="Live Site"
            href={caseStudy.links?.liveSite!}
            className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent underline"
          />

          {/* Case Study Button */}
          <CaseStudyButton
            href={caseStudy.links?.portfolioPath!}
            title="Case Study"
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
