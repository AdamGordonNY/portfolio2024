import React from "react";
import { projectList } from "@/lib/projects";
import Template from "@/components/CaseStudies/Template";
const Page = () => {
  const project = projectList[0];
  return (
    <div className="custom-responsive-width flex w-full flex-col gap-x-4 bg-inherit lg:px-10">
      <Template caseStudy={project!} />
    </div>
  );
};

export default Page;
