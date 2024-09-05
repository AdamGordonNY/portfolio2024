import ProjectOverview from "@/components/Projects/ProjectOverview";
import React from "react";

const Page = () => {
  return (
    <div className="md:modern-h1 base-regular flex w-full flex-col font-satoshi ">
      <div className="flex flex-col px-10  ">
        <span className="text-center text-white-900 underline md:mb-3">
          My Projects
        </span>
        <span className="base-regular mt-2 text-center text-white-900">
          Check out the live site,
          <br /> look over the code on Github,
          <br /> or read my case studies to get inside my head!
        </span>
      </div>
      <ProjectOverview />
    </div>
  );
};

export default Page;
