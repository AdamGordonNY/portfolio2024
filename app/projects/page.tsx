import ProjectOverview from "@/components/Projects/ProjectOverview";
import React from "react";

const Page = () => {
  return (
    <div className="md:modern-h1 base-regular flex w-full flex-col font-satoshi">
      <div className="flex flex-col px-10 ">
        <span className="text-center text-white-900">
          A Few Recent Projects
          <br />
          w/
          <br /> NextJS14 and TailwindCSS...
        </span>
      </div>
      <ProjectOverview />
    </div>
  );
};

export default Page;
