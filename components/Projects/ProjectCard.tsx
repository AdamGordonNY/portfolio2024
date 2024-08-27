"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandLaravel,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandXbox,
  IconBrandPrisma,
  IconArrowRight,
} from "@tabler/icons-react";
import ChatGPT from "../ui/icons/ChatGPT";

interface ProjectCardProps {
  caseStudy: CaseStudy;
}
const ProjectCard = ({ caseStudy }: ProjectCardProps) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "react":
        return <IconBrandReact size={24} />;
      case "nextjs":
        return <IconBrandNextjs size={24} />;
      case "tailwind":
        return <IconBrandTailwind size={24} />;
      case "typescript":
        return <IconBrandTypescript size={24} />;
      case "laravel":
        return <IconBrandLaravel size={24} />;
      case "figma":
        return <IconBrandFigma size={24} />;
      case "vsCode":
        return <IconBrandVscode size={24} />;
      case "xbox":
        return <IconBrandXbox size={24} />;
      case "prisma":
        return <IconBrandPrisma size={24} />;
      case "chatgpt":
        return <ChatGPT size={24} />;
    }
  };
  return (
    <div className="mq450:gap-[18px] box-border flex w-[602px] max-w-full break-inside-avoid-column flex-col items-start justify-start gap-9 overflow-hidden rounded-[23px] border border-solid border-darkslategray px-6 py-9 leading-[normal] tracking-[normal] [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)]">
      <section className="relative flex h-[330px] shrink-0 flex-row items-start justify-start self-stretch overflow-hidden rounded-[14px] bg-gray">
        <div className="absolute bottom-[-40.1px] left-[calc(50%_-_300px)] !m-0 h-[394.1px] w-[600px]">
          <Link href={caseStudy.links?.portfolioPath!}>
            <Image
              className="absolute top-0  object-cover"
              alt={caseStudy.title}
              src={caseStudy.cardImage}
              width={600}
              height={310}
            />
          </Link>
        </div>
      </section>
      <section className="text-white font-inter flex max-w-full flex-col items-start justify-start gap-6 self-stretch text-left text-[32px]">
        <div className="flex max-w-full flex-col items-start justify-center gap-[18px] self-stretch">
          <h2 className="modern-body-medium relative m-0 inline-block max-w-full font-sans leading-[36px] tracking-[-0.02em]  text-white-900">
            {caseStudy.title}
          </h2>
          <div className="mq450:text-base mq450:leading-[21px] relative self-stretch text-xl leading-[130%] text-lightsteelblue">
            {caseStudy.description}
          </div>
        </div>
        <div className="mq450:flex-wrap relative flex flex-row items-start justify-between gap-5 self-stretch py-0 pl-0 pr-[21px] text-xl text-plum">
          <div className="flex w-[234px] flex-row items-start justify-start">
            {caseStudy.tech.map((item, idx) => renderIcon(item.toLowerCase()))}

            <div className="relative z-[4] ml-[-4px] h-[50px] flex-1 shrink-0">
              <div className="absolute left-[-0.5px] top-[-0.5px] box-border size-full rounded-[50%] border-0 border-solid border-steelblue [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)]" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[13px]">
            <div className="mq450:text-base mq450:leading-[19px] relative flex flex-row">
              <Link href={caseStudy.links.liveSite}>
                <span> Check Live Site </span>
                <IconArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
