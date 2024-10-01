import React from "react";

import { Separator } from "../ui/separator";
import SocialLinks from "../SocialLinks";
const Heading = () => {
  return (
    <section className="max-mq450:justify-center max-lg:base-regular custom-responsive-width mb-2 mt-5 flex min-w-full flex-col px-0 ">
      <p className="lg:modern-h2 custom-respo items-center justify-center text-center text-white-800 ">
        Hi! I&apos;m{" "}
        <span className="lg:heading-1-bold max-lg: text-gradient-highlight  z-10 items-center justify-center">
          {" "}
          Adam Gordon!
        </span>
      </p>
      <p className="lg:heading-1-bold  items-center justify-center text-center text-white-800 ">
        Software Engineer
        <br /> from
        <span className="lg:heading-1-bold max-lg:base-regular text-gradient-highlight  items-center justify-center max-lg:z-10">
          {" "}
          New York.
        </span>
      </p>{" "}
      <Separator
        orientation="horizontal"
        className="mx-auto my-5 w-1/2 items-center justify-center"
      />
      <SocialLinks />
      <Separator
        orientation="horizontal"
        className="mx-auto my-5 w-1/2 items-center justify-center"
      />
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <p className="max-lg:body-regular base-semibold px-4 text-center text-white-800 max-lg:max-w-[350px] md:max-w-[600px]">
          3 Years of Professional, Practical Experience in <br />
          <span className="text-gradient">Software Development</span>
          <br /> and <br />
          <span className="text-gradient">Modern Technology</span> <br />
          projects and processes, with a background in business, sales, and
          marketing prior. My goal is to either join an already put-together
          team that I can be an asset to or to create something with people of
          similarly open and ambitious minds.
        </p>
      </div>
    </section>
  );
};

export default Heading;
