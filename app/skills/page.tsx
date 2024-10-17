import React from "react";
import { devSkills } from "@/lib/projects";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Skills/Testimonials";
const Page = () => {
  const skills = devSkills;
  return (
    <div className="custom-responsive-width flex min-h-screen w-full min-w-full flex-col  justify-center font-satoshi">
      <span className="paragraph-regular md:modern-h1 text-center align-top font-inter text-gradient">
        My Skills
      </span>
      <Testimonials />
      <Skills devSkills={skills} />
    </div>
  );
};

export default Page;
