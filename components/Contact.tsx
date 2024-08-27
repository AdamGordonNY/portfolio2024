"use client";
import Link from "next/link";
import React from "react";

import { GradientButton } from "./TailwindCssButtons";

import { HeartIcon } from "lucide-react";
const Contact = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white-900 pt-10 dark:bg-inherit dark:text-white-800">
      <h1 className="modern-h1 mb-6 ">Thanks for stopping by!.</h1>
      <h2 className="modern-h2"> Let&apos;s get in touch!</h2>
      <GradientButton text="Contact" className="z-20 mx-auto my-4" />
      <div className="mb-6 flex flex-row justify-center space-x-6">
        <p className="modern-body-regular text-white-900">
          <Link
            href={`mailto:adam@adam-gordon.info`}
            className="medium-paragraph-regular"
          >
            adam@adam-gordon.info
          </Link>
          <HeartIcon size={20} className="fill-red-500 stroke-white-900" />
        </p>
      </div>
    </div>
  );
};

export default Contact;
