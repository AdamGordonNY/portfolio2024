import React from "react";
import { projectList } from "@/lib/projects";
import Template from "@/components/CaseStudies/Template";
const Page = () => {
  const project = projectList[0];
  return (
    <div className="custom-responsive-width flex w-full flex-col bg-inherit ">
      <Template caseStudy={project!} />
    </div>
  );
};

export default Page;
