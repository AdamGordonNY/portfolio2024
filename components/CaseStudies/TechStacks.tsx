import React from "react";
import {
  IconBrandGithub,
  IconBrandGithubCopilot,
  IconBrandNextjs,
  IconBrandAmazon,
  IconBrandTailwind,
  IconBrandLaravel,
  IconBrandPrisma,
  IconBrandStripe,
  IconBrandStackoverflow,
  IconBrandFramerMotion,
  IconBrandSocketIo,
} from "@tabler/icons-react";
import Image from "next/image";
import reactImg from "@/public/images/react.svg";
import nodeImg from "@/public/images/nodejs.svg";
import htmlImg from "@/public/images/html.svg";
import gitImg from "@/public/images/git.svg";
import nextImg from "@/public/images/next.svg";
import tailwindImg from "@/public/images/tailwind.svg";
import tsImg from "@/public/images/ts.svg";
import postGres from "@/public/images/postgre.svg";
import clerk from "@/public/images/clerk.svg";
export const TechStack = async ({ tech }: { tech: string }) => {
  const techCheck = () => {
    switch (tech) {
      case "nodejs":
        return <Image src={nodeImg} width={50} height={50} alt="react" />;
      case "html":
        return <Image src={htmlImg} width={50} height={50} alt="react" />;
      case "git":
        return <Image src={gitImg} width={50} height={50} alt="react" />;
      case "gitHub":
        return <IconBrandGithub className="size-5 md:size-11" />;
      case "copilot":
        return (
          <IconBrandGithubCopilot className="size-5 stroke-white-900 md:size-11" />
        );
      case "nextjs":
        return <Image src={nextImg} width={50} height={50} alt="react" />;
      case "amazon":
        return <IconBrandAmazon className="size-5 md:size-11" />;
      case "typescript":
        return <Image src={tsImg} width={50} height={50} alt="react" />;
      case "tailwind":
        return <Image src={tailwindImg} width={50} height={50} alt="react" />;
      case "laravel":
        return <IconBrandLaravel className="size-5 md:size-11" />;
      case "react":
        return <Image src={reactImg} width={50} height={50} alt="react" />;
      case "prisma":
        return (
          <IconBrandPrisma className="size-5 stroke-white-900 md:size-11" />
        );
      case "stripe":
        return <IconBrandStripe className="size-5 md:size-11" />;
      case "stackoverflow":
        return <IconBrandStackoverflow className="size-5 md:size-11" />;
      case "framer":
        return (
          <IconBrandFramerMotion className="size-5 fill-white-900 md:size-11" />
        );
      case "socketio":
        return <IconBrandSocketIo className="size-5 md:size-11" />;
      case "postgres":
        return <Image src={postGres} alt="postgres" width={50} height={50} />;
      default:
        return (
          <div className="size-[50px] items-center justify-center rounded-full md:size-[100px]">
            {tech}
          </div>
        );
    }
  };
  return (
    <div className="flex w-full flex-wrap">
      <div className="flex w-full   rounded-full">{techCheck()}</div>
    </div>
  );
};
const TechStacks = ({ tech }: { tech: string[] }) => {
  return (
    <div className="flex w-full justify-between bg-inherit">
      <div className="flex flex-row flex-wrap justify-between rounded-full bg-dark-100">
        {tech.map((tek) => (
          <TechStack key={tek} tech={tek} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
