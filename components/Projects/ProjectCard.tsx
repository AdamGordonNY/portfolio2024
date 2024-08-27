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
  IconBrandVue,
  IconBrandDiscordFilled,
} from "@tabler/icons-react";
import ChatGPT from "../ui/icons/ChatGPT";
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
        return <IconBrandReact size={48} />;
      case "nextjs":
        return <NextJS size={48} />;
      case "tailwind":
        return <Tailwind size={48} />;
      case "typescript":
        return <Typescript size={48} />;
      case "laravel":
        return <IconBrandLaravel size={48} />;
      case "figma":
        return <IconBrandFigma size={48} />;
      case "vsCode":
        return <IconBrandVscode size={48} />;
      case "xbox":
        return <IconBrandXbox size={48} />;
      case "prisma":
        return (
          <IconBrandPrisma size={48} className="fill-#4DB6AC stroke-#4DB6AC" />
        );
      case "chatgpt":
        return <ChatGPT size={48} />;
      case "mongo":
        return <MongoDB size={48} />;
      case "stripe":
        return <FaStripeS size={48} />;
      case "vue":
        return <IconBrandVue size={48} />;
    }
  };
  return (
    <div className="mq450:gap-[18px] flex max-w-full  flex-col items-start justify-start gap-6 overflow-hidden rounded-[23px] border border-solid border-darkslategray px-6 pb-5 pt-9  [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)] md:box-border md:size-[600px]">
      <section className="relative flex  shrink-0 flex-row items-start justify-start self-stretch overflow-hidden rounded-[14px]">
        <div className="!m-0 h-[330px]  w-full items-center">
          <Link href={caseStudy.links?.portfolioPath!}>
            <Image
              className="absolute object-cover p-0.5 max-md:w-full md:h-[330px]"
              alt={caseStudy.title}
              src={caseStudy.cardImage}
              width={600}
              height={300}
            />
          </Link>
        </div>
      </section>
      <section className="flex max-w-full flex-col items-start justify-start gap-6 self-stretch text-left font-sans text-[32px] text-white-900">
        <div className="flex max-w-full flex-col items-start justify-center gap-[18px] self-stretch">
          <h2 className="modern-h3 relative m-0 inline-block max-w-full text-center font-sans  text-white-900">
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

          <div className="mq450:text-base  relative flex flex-row">
            <Link
              href={caseStudy.links?.liveSite!}
              className="inline-flex items-center justify-center align-middle"
            >
              <span className="base-semibold dark:text-white-900">
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
