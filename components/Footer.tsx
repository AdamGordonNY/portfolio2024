"use client";
import React from "react";
import SocialLinks from "./SocialLinks";
import {
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandLaravel,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandXbox,
} from "@tabler/icons-react";
const Footer = () => {
  return (
    <div className="sticky mb-20 flex h-20  w-full flex-row items-center justify-between bg-transparent align-text-bottom text-white-900  ">
      <div className="flex items-center">
        <p className="modern-body-medium flex w-full ">© 2024 Adam Gordon</p>
        <IconBrandNextjs size={24} />
      </div>
      <SocialLinks />
      <p className="modern-body-medium line-clamp-1">adam@adam-gordon.info</p>
    </div>
  );
};

export default Footer;
