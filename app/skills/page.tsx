import React from "react";
import { devSkills } from "@/lib/projects";
import Skills from "@/components/Skills/Skills";
const Page = () => {
  devSkills.categories.forEach((cat) => {
    console.log(cat);
  });
  return (
    <div className="custom-responsive-width flex min-h-screen w-full min-w-full flex-col  justify-center font-satoshi">
      <span className="paragraph-regular md:modern-h1 text-center align-top text-red-500 font-inter">
        My Skills
      </span>
      <Skills devSkills={devSkills} />
    </div>
  );
};

export default Page;
