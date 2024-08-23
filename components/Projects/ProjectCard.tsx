"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@tabler/icons-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: Icon[];
  link: string;
}
const ProjectCard = ({
  image,
  title,
  tech,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className="border-darkslategray mq450:gap-[18px] box-border flex w-[602px] max-w-full flex-col items-start justify-start gap-9 overflow-hidden rounded-[23px] border border-solid px-6 py-9 leading-[normal] tracking-[normal] [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)]">
      <section className="self-stretch h-[330px] rounded-[14px] bg-gray overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
        <div className="h-[394.1px] w-[600px] absolute !m-[0] bottom-[-40.1px] left-[calc(50%_-_300px)]">
          <Image
            className="absolute top-[0px]  object-cover"
            alt={title}
            src={image}
            width={600}
            height={310}
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-[32px] text-white font-inter">
        <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-bold font-[inherit] inline-block max-w-full">
            3D Solar System Planets to Explore
          </h2>
          <div className="self-stretch relative text-xl leading-[130%] text-lightsteelblue mq450:text-base mq450:leading-[21px]">
            Explore the wonders of our solar system with this captivating 3D
            simulation of the planets using Three.js.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[21px] relative gap-5 text-xl text-plum mq450:flex-wrap">
          <div className="w-[234px] flex flex-row items-start justify-start">
            {tech.map((t, idx) => (
              <Image src={t[idx]} alt="tech" width={50} height={50} />
            ))}

            <div className="h-[50px] flex-1 relative shrink-0 z-[4] ml-[-4px]">
              <div className="absolute top-[-0.5px] left-[-0.5px] rounded-[50%] [background:linear-gradient(103.4deg,_#04071d,_#0c0e23)] border-steelblue border-[0px] border-solid box-border w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <div className="relative tracking-[-0.48px] leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
              Check Live Site
            </div>
          </div>
          <input
            className="!m-[0] h-[11px] w-[11px] absolute top-[calc(50%_-_5.5px)] right-[0px] border-plum border-[0px] border-solid box-border"
            type="checkbox"
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
