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
      <div className="custom-responsive-width mx-auto flex flex-col items-center justify-center gap-y-3 text-center max-md:min-w-[375px] max-md:max-w-[390px] md:w-4/5">
        <span className="gradient-heading">
          {caseStudy.title} <br />
        </span>
        <h3 className="md:modern-h3 paragraph-regular text-white-900 max-w-[60%] text-center italic">
          {caseStudy.subtitle}
        </h3>
        <span className="mq450:body-regular md:paragraph-regular font-satoshi text-white-900 text-center">
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
      <Separator orientation="horizontal" /> {/* Team Members */}
      <div className="mq450:flex-row mq450:text-left flex w-full flex-col items-center gap-y-2 text-center md:flex-row md:text-left">
        <h3 className="md:modern-h3 paragraph-regular mq450:flex-row text-gradient md:w-1/5">
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
      <Separator orientation="horizontal" />
      {/* Overview Section */}
      <SectionTemplate content={caseStudy.summary} topic="Overview" />
      <Separator orientation="horizontal" />
      {/* Tech Stack */}
      <div className="col-span-full flex w-full flex-col items-center justify-between gap-y-5 md:flex-row md:gap-y-0">
        {/* Heading */}
        <h3 className="md:modern-h3 paragraph-regular modern-h3 font-inter text-gradient text-center md:w-1/5 md:px-2 md:text-left">
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
      {/* Next Steps */}
      <div className="mq450:flex-row mq450:text-left flex w-full flex-col items-center gap-y-2 text-center md:flex-row md:text-left">
        <h3 className="lg:modern-h3 paragraph-regular text-gradient-highlight text-left md:w-2/5">
          Next Steps
        </h3>
        <ul className="list-inside list-disc px-2  md:w-3/5">
          {caseStudy.nextSteps.map((step, index) => (
            <li
              key={index}
              className="font-satoshi text-white-900 text-left max-md:text-center"
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
