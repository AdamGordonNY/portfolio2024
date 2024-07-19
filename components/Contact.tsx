"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GradientButton } from "./TailwindCssButtons";
import heart from "@/public/heart.svg";
import { HeartIcon } from "lucide-react";
const Contact = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-10">
      <h1 className="modern-h1 mb-6">
        Thanks for stopping by!. Let&apos;s get in touch!
      </h1>
      <GradientButton text="Contact" />
      <div className="mb-6 flex flex-row justify-center space-x-6">
        <p className="modern-body-regular">
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
