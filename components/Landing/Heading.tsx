"use client";
import React from "react";
const Heading = () => {
  return (
    <section className="mt-5 flex min-w-full flex-col px-0  ">
      <p className="lg:modern-h2 items-center justify-center text-center text-white-800 ">
        Hi! I&apos;m{" "}
        <span className="lg:heading-1-bold max-lg: z-10  items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent">
          {" "}
          Adam Gordon!
        </span>
      </p>
      <p className="lg:modern-h1  items-center justify-center text-center text-white-800 ">
        Software Engineer
        <br /> from
        <span className="lg:heading-1-bold items-center  justify-center bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-transparent max-lg:z-10">
          {" "}
          New York.
        </span>
      </p>{" "}
      <p className=" lg:base-regular items-center  justify-center text-center text-white-800 max-md:mt-10">
        Specializing in building Full Stack SSR Web Applications{" "}
      </p>
      <p className="lg:paragraph-regular items-center  justify-center text-center text-white-800 max-md:mt-10">
        <br />
        with Next.js, React, TypeScript, and Tailwind CSS.
        <br />
        (with experience in other Frameworks and Libraries)
      </p>
    </section>
  );
};

export default Heading;
