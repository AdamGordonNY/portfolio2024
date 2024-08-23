import { CaseStudy } from "@/lib/types";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
interface TemplateProps {
  caseStudy: CaseStudy;
}
const Template = ({ caseStudy }: TemplateProps) => {
  return (
    <WobbleCard containerClassName="">
      {" "}
      <div className="flex w-full flex-col ">
        <Image
          src={caseStudy.cardImage}
          alt={caseStudy.title}
          width={600}
          height={400}
        />
        <div className="max-md:modern-heading-1 flex flex-1 items-center justify-center bg-clip-text ">
          {" "}
          {caseStudy.title}
        </div>
      </div>
    </WobbleCard>
  );
};

export default Template;
