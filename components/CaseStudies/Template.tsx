import { CaseStudy } from "@/lib/types";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
interface TemplateProps {
  caseStudy: CaseStudy;
}
const Template = ({ caseStudy }: TemplateProps) => {
  return (
    <WobbleCard containerClassName="border-darkslategray mq450:gap-[18px] box-border flex w-[602px] max-w-full flex-col items-start justify-start gap-9 overflow-hidden break-inside-avoid-column rounded-[23px] border border-solid px-6 py-9 leading-[normal] tracking-[normal] [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)]">
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
