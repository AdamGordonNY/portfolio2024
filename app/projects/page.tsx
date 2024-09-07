import ProjectOverview from "@/components/Projects/ProjectOverview";
import React from "react";

const Page = () => {
  return (
    <div className="mq450:w-[390px] custom-responsive-width flex min-w-full flex-col font-satoshi">
      <div className="flex flex-col px-10  ">
        <span className="text-gradient-highlight base-regular sm:modern-h1 text-center leading-[150%] underline md:mb-4">
          My Projects
        </span>
        <span className="body-regular mt-2 text-center text-white-900">
          Check out the live site, look over the code on Github,
          <br />
          or read my case studies to get inside my head!
        </span>
      </div>
      <ProjectOverview />
    </div>
  );
};

export default Page;
