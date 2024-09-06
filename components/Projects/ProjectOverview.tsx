"use client";
import React from "react";
import { projectList } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const ProjectOverview = () => {
  return (
    <div className="bg-dark-gradient  mq-450:max-w-[390px] flex w-full flex-col flex-wrap items-center justify-center gap-7 pt-[50px] text-center font-inter">
      {projectList.map((project, index) => (
        <div
          key={project.title}
          className={` mq-450:max-w-[390px]  flex items-center justify-center gap-x-4  md:w-full md:px-10 ${
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
