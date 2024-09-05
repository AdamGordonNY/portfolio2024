"use client";
import React from "react";
import { projectList } from "@/lib/projects";
import ContentCard from "../blocks/ContentCard";
import ProjectCard from "./ProjectCard";
import CaseStudyButton from "./CaseStudyButton";

import { HoverBorderGradient } from "../ui/hover-border-gradient";

const ProjectOverview = () => {
  return (
    <div className="bg-dark-gradient mq-450:max-w-[390px] flex w-full flex-col flex-wrap text-center items-center justify-center gap-7 pt-[50px] font-inter">
      {projectList.map((project, index) => (
        <div
          key={project.title}
          className={` items-center gap-x-4 flex md:px-10 mq-450:max-w-[390px]  md:w-full justify-center ${
            index % 2 === 0 ? "md:order-1" : "md:order-2"
          }`}
        >
          <ProjectCard caseStudy={project!} />{" "}
        </div>
      ))}
    </div>
  );
};

export default ProjectOverview;
