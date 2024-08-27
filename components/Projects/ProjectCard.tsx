"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import {
  IconBrandReact,
  IconBrandLaravel,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandXbox,
  IconBrandPrisma,
  IconArrowRight,
} from "@tabler/icons-react";
import ChatGPT from "../ui/icons/ChatGPT";
import ReactIcon from "../ui/icons/ReactIcon";
import Tailwind from "../ui/icons/Tailwind";
import NextJS from "../ui/icons/NextJS";
import Typescript from "../ui/icons/Typescript";
import { FaStripeS } from "react-icons/fa";
import MongoDB from "../ui/icons/MongoDB";

interface ProjectCardProps {
  caseStudy: CaseStudy;
}
const ProjectCard = ({ caseStudy }: ProjectCardProps) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "react":
        return <IconBrandReact size={24} />;
      case "nextjs":
        return <NextJS size={24} />;
      case "tailwind":
        return <Tailwind size={24} />;
      case "typescript":
        return <Typescript size={24} />;
      case "laravel":
        return <IconBrandLaravel size={24} />;
      case "figma":
        return <IconBrandFigma size={24} />;
      case "vsCode":
        return <IconBrandVscode size={24} />;
      case "xbox":
        return <IconBrandXbox size={24} />;
      case "prisma":
        return (
          <IconBrandPrisma size={24} className="fill-#4DB6AC stroke-#4DB6AC" />
        );
      case "chatgpt":
        return <ChatGPT size={24} />;
      case "mongo":
        return <MongoDB size={24} />;
    }
  };
  return (
    <div className="mq450:gap-[18px] box-border flex max-w-full  break-inside-avoid-column flex-col items-start justify-start gap-9 overflow-hidden rounded-[23px] border border-solid border-darkslategray px-6 py-9 leading-[normal] tracking-[normal] [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)] md:w-[600px]">
      <section className="relative flex h-[330px] shrink-0 flex-row items-start justify-start self-stretch overflow-hidden rounded-[14px] bg-gray">
        <div className="absolute !m-0 h-[394.1px] w-full items-center">
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
      <section className="flex max-w-full flex-col items-start justify-start gap-6 self-stretch text-left font-sans text-[32px] text-white-900">
        <div className="flex max-w-full flex-col items-start justify-center gap-[18px] self-stretch">
          <h2 className="modern-h2 relative m-0 inline-block max-w-full font-sans leading-[36px] tracking-[-0.02em]  text-white-900">
            {caseStudy.title}
          </h2>
          <div className="mq450:text-base mq450:leading-[21px] relative self-stretch text-xl leading-[130%] text-lightsteelblue">
            {caseStudy.description}
          </div>
        </div>
        <div className="mq450:flex-wrap relative flex flex-row items-start justify-between gap-5 self-stretch py-0 pl-0 pr-[21px] ">
          <div className="flex w-[234px] flex-row  items-start justify-start gap-x-4 align-middle">
            {caseStudy.tech.map(
              (item, idx) => idx < 5 && renderIcon(item.toLowerCase())
            )}

            <div className="relative z-[4] ml-[-4px] h-[50px] flex-1 shrink-0"></div>
          </div>

          <div className="mq450:text-base mq450:leading-[19px] relative flex flex-row">
            <Link
              href={caseStudy.links.liveSite}
              className="inline-flex align-middle"
            >
              <span className="body-regular dark:text-white-900">
                {" "}
                Live Website{" "}
              </span>
              <IconArrowRight size={48} className="dark:text-white-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
