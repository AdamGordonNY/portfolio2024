import ProjectOverview from "@/components/Projects/ProjectOverview";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="custom-responsive-width mx-auto flex  min-w-full flex-col items-center justify-center font-satoshi">
      <div className="flex flex-col px-10  ">
        <span className="text-gradient-highlight base-regular sm:modern-h1 text-center leading-[150%] underline md:mb-4">
          My Projects
        </span>
        <span className="body-regular mt-2 text-center text-white-900">
          Check out the live site,
          <br /> look over the code on
          <Link
            className="px-2 font-inter text-2xl"
            href={`https://github.com/AdamGordonNy`}
          >
            Github
          </Link>
          ,<br /> or read my case studies to get inside my head!
        </span>
      </div>
      <div className="custom-responsive-width flex">
        {" "}
        <ProjectOverview />
      </div>
    </div>
  );
};

export default Page;
