"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "@/lib/projects";
const ProjectOverview = () => {
  return (
    <div className="bg-dark-gradient flex flex-col columns-1  w-full">
      {projectList.map((project) => (
        <ProjectCard
          key={project.title}
          image={project.images[0]}
          title={project.title}
          tech={project.tech}
          description={project.description}
          link={project.links.portfolioPath!}
        />
      ))}
    </div>
  );
};

export default ProjectOverview;
