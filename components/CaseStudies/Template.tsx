import { CaseStudy } from "@/lib/types";
import React from "react";
import Image from "next/image";
import SectionTemplate from "./SectionTemplate";

interface TemplateProps {
  caseStudy: CaseStudy;
}
const Template = async ({ caseStudy }: TemplateProps) => {
  return (
    <div className="custom-responsive-width flex flex-col  items-center ">
      {" "}
      <div className="flex flex-col items-center justify-center gap-y-3 text-center ">
        <span className="md:modern-h1 base-regular   justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent underline  ">
          {caseStudy.title} <br />
        </span>
        <span className="md:modern-h3 paragraph-regular text-center  italic text-white-900">
          {caseStudy.subtitle}
        </span>{" "}
        <span className="mq450:body-regular md:paragraph-regular text-center font-satoshi text-white-900">
          {caseStudy.description}
        </span>{" "}
      </div>{" "}
      <Image
        src={caseStudy.images[0]}
        alt={caseStudy.title}
        width={900}
        height={500}
        className="mq450:size-[375px] my-0 sm:size-[500px] md:size-[600px] lg:size-[800px]"
      />
      <SectionTemplate content={caseStudy.summary} topic="Overview" />
      <SectionTemplate content={caseStudy.mission} topic="Mission" />
    </div>
  );
};

export default Template;
