import { CaseStudy } from "@/lib/types";
import React from "react";
import Image from "next/image";
import SectionTemplate from "./SectionTemplate";
import ItemizedTemplate from "./ItemizedTemplate";
import TechStacks from "./TechStacks";
import { Separator } from "../ui/separator";
interface TemplateProps {
  caseStudy: CaseStudy;
}

const Template = async ({ caseStudy }: TemplateProps) => {
  const tasks = caseStudy.mission.flatMap((m) => m.task);

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
      <Separator orientation="horizontal" />
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
      <Separator orientation="horizontal" />
      {/* Tech Stack */}
      <div className="col-span-full flex w-full flex-col items-center justify-between gap-y-5 md:flex-row md:gap-y-0">
        {/* Heading */}
        <h3 className="md:modern-h3 paragraph-regular modern-h3 text-center font-inter text-gradient md:w-1/5 md:px-2 md:text-left">
          Tech Stack
        </h3>
        {/* TechStacks Component */}
        <TechStacks tech={caseStudy.tech}></TechStacks>
      </div>
      <Separator orientation="horizontal" />
      {/* Mission Section */}
      {tasks.map((task, index) => (
        <ItemizedTemplate key={index} task={task} />
      ))}

      {/* Team Members */}
      <div className="mq450:flex-row mq450:text-left flex w-full flex-col items-center gap-y-2 text-center md:flex-row md:text-left">
        <h3 className="md:modern-h3 paragraph-regular mq450:flex-row text-gradient md:w-2/5">
          The Team
        </h3>
        <ul className="body-regular flex w-full list-inside list-disc flex-col px-2 text-left max-md:gap-y-4 md:w-3/5">
          {caseStudy.teamMembers.map((member, index) => (
            <li
              key={index}
              className="text-bold font-satoshi text-white-900 max-md:text-center"
            >
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>

      {/* Next Steps */}
      <div className="mq450:flex-row mq450:text-left flex w-full flex-col items-center gap-y-2 text-center md:flex-row md:text-left">
        <h3 className="lg:modern-h3 paragraph-regular text-gradient-highlight text-left md:w-2/5">
          Next Steps
        </h3>
        <ul className="list-inside list-disc px-2  md:w-3/5">
          {caseStudy.nextSteps.map((step, index) => (
            <li
              key={index}
              className="text-left font-satoshi text-white-900 max-md:text-center"
            >
              {step.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template;
