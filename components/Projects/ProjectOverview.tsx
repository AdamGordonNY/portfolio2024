"use client";
import React from "react";
import { projectList } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const ProjectOverview = () => {
  return (
    <div className="bg-dark-gradient  custom-responsive-width  mx-auto flex w-full flex-col  items-center justify-center gap-7 pt-[50px] text-center font-inter">
      {projectList.map((project, index) => (
        <ProjectCard key={project.title} caseStudy={project!} />
      ))}
    </div>
  );
};

export default ProjectOverview;
