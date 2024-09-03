"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "@/lib/projects";

const ProjectOverview = () => {
  return (
    <div className="bg-dark-gradient flex w-full flex-col flex-wrap  items-center justify-center gap-7 pt-[50px]">
      {projectList.map((project, index) => (
        <div
          key={project.title}
          className={`w-full max-w-[600px] break-inside-avoid-column  md:w-1/2 ${
            index % 2 === 0 ? "md:order-1" : "md:order-2"
          }`}
        >
          <ProjectCard caseStudy={project!} />
        </div>
      ))}
      <span className="flex w-full"></span>
    </div>
  );
};

export default ProjectOverview;
