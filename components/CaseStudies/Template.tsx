import { CaseStudy } from "@/lib/types";
import React from "react";
import Image from "next/image";
import SectionTemplate from "./SectionTemplate";
import ItemizedTemplate from "./ItemizedTemplate";
import TechStacks from "./TechStacks";

interface TemplateProps {
  caseStudy: CaseStudy;
}

const Template = async ({ caseStudy }: TemplateProps) => {
  const procedure = caseStudy.procedure.map((p) => ({
    id: p.id,
    purpose: p.purpose,
    steps: p.steps,
    title: p.title,
  }));

  return (
    <div className="custom-responsive-width flex flex-col items-center gap-x-4 gap-y-8">
      {/* Title and Description Section */}
      <div className="custom-responsive-width mx-auto flex min-w-[375px] max-w-[390px] flex-col items-center justify-center gap-y-3 text-center">
        <span className="gradient-heading">
          {caseStudy.title} <br />
        </span>
        <h3 className="md:modern-h3 paragraph-regular text-center italic text-white-900">
          {caseStudy.subtitle}
        </h3>
        <span className="mq450:body-regular md:paragraph-regular text-center font-satoshi text-white-900">
          {caseStudy.description}
        </span>
      </div>
      {/* Case Study Image */}
      <Image
        src={caseStudy.images[0]}
        alt={caseStudy.title}
        width={900}
        height={500}
        className="mq450:w-[375px] sm:w-[500px] md:w-[600px] lg:w-[800px]"
      />
      {/* Overview Section */}
      <SectionTemplate content={caseStudy.summary} topic="Overview" />
      {/* Mission Section */}
      <SectionTemplate content={caseStudy.mission} topic="Mission" />{" "}
      {/* Result Section */}
      <SectionTemplate content={caseStudy.result.outcome} topic="Outcome" />
      {/* Tech Stack */}
      <div className="col-span-full flex w-full flex-col items-center justify-between gap-y-5 md:flex-row md:gap-y-0">
        {/* Heading */}
        <h3 className="md:modern-h3 paragraph-regular modern-h3 text-center font-inter text-gradient md:w-1/5 md:px-2 md:text-left">
          Tech Stack
        </h3>

        {/* TechStacks Component */}
        <TechStacks tech={caseStudy.tech}></TechStacks>
      </div>
      <h1 className="modern-h2  my-10 font-inter text-white-900 text-gradient">
        The Process
      </h1>
      {/* Procedure (Itemized Steps) */}
      {procedure.map((proc, index) => (
        <ItemizedTemplate key={proc.id} process={proc} />
      ))}
      {/* Team Members */}
      <div className="mq450:flex-row flex flex-col items-center gap-y-2 text-center">
        <h3 className="md:modern-h3 paragraph-regular mq450:flex-row text-gradient">
          Team Members
        </h3>
        <ul className="list-inside list-disc">
          {caseStudy.teamMembers.map((member, index) => (
            <li key={index} className="font-satoshi text-white-900">
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>
      {/* Next Steps */}
      <div className="mq450:flex-row mq450:text-left flex flex-col items-center gap-y-2 text-center">
        <h3 className="lg:modern-h3 paragraph-regular text-gradient-highlight">
          Next Steps
        </h3>
        <ul className="list-inside list-disc px-2">
          {caseStudy.result.nextSteps.map((step, index) => (
            <li key={index} className="font-satoshi text-white-900">
              {step.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template;
