import { CaseStudy } from "@/lib/types";
import React from "react";
import Image from "next/image";

interface TemplateProps {
  caseStudy: CaseStudy;
}
const Template = async ({ caseStudy }: TemplateProps) => {
  return (
    <div className="custom-responsive-width flex flex-col content-center items-center justify-center">
      {" "}
      <div className="flex flex-col items-center justify-center gap-y-5 text-center ">
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
        className="max-xs:size-[400px] my-5 sm:size-[500px] md:size-[600px] lg:size-[700px]"
      />
      <div className="md:paragraph-regular body-regular flex w-full flex-1 items-center justify-center font-satoshi  text-white-900">
        <div className="custom-responsive-width my-10 flex max-md:flex-col max-md:gap-y-5 max-md:px-3">
          {" "}
          <span className="base-regular max-mq450:body-regular basis-1/2 justify-start align-top text-white-900">
            {" "}
            Overview
          </span>
          <p className="body-regular flex flex-col gap-y-4">
            {caseStudy.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template;
