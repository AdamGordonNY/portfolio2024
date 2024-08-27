"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "@/lib/projects";

const ProjectOverview = () => {
  return (
    <div className="bg-dark-gradient flex w-full columns-2 flex-col gap-y-4 md:pt-[200px]  ">
      {projectList.map((project) => (
        <div key={project.title} className="break-inside-avoid-column ">
          <ProjectCard caseStudy={project!} key={project.title} />
        </div>
      ))}
    </div>
  );
};

export default ProjectOverview;
