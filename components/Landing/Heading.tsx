"use client";
import React from "react";
const Heading = () => {
  return (
    <section className="max-mq450:justify-center max-lg:base-regular mb-2 mt-5 flex min-w-full flex-col px-0  ">
      <p className="lg:modern-h2 items-center justify-center text-center text-white-800 ">
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
      <p className="max-lg:body-regular base-semibold mt-10  items-center justify-center text-center text-white-800">
        Specializing in building SSR/SSG Web Apps{" "}
      </p>
      <p className="lg:paragraph-regular max-lg:body-regular items-center  justify-center text-center text-white-800">
        with Next.js, React, TypeScript, and Tailwind CSS.
        <br />
        <span className="small-regular italic">
          (with experience in other Frameworks and Libraries)
        </span>
      </p>
    </section>
  );
};

export default Heading;
