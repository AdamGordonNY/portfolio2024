import React from "react";
import { devSkills } from "@/lib/projects";
const Page = () => {
  devSkills.categories.forEach((cat) => {
    console.log(cat);
  });
  return (
    <div className="custom-responsive-width flex min-h-screen w-full min-w-full flex-col items-center justify-center font-satoshi">
      <span className="paragraph-regular md:modern-h1 text-center align-top text-red-500">
        My Skills
      </span>
    </div>
  );
};

export default Page;
