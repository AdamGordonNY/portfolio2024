import React from "react";
import { projectList } from "@/lib/projects";
const Page = () => {
  const project = projectList.find((project) => project.title === "DevToday");
  return (
    <div className="flex w-full flex-col bg-inherit ">
      <h1 className="font-satoshi md:modern-h1 modern-h2 text-center px-5 pt-2  ">
        {project?.title}
      </h1>
    </div>
  );
};

export default Page;
