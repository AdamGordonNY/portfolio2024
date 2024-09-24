import React from "react";
import {
  IconBrandGithub,
  IconBrandGithubCopilot,
  IconBrandAmazon,
  IconBrandLaravel,
  IconBrandPrisma,
  IconBrandStripe,
  IconBrandStackoverflow,
  IconBrandFramerMotion,
  IconBrandSocketIo,
  IconBrandSupabase,
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
import uploadImg from "@/public/images/uploadthing.svg";
import shadcnImg from "@/public/images/shadcnui.svg";
export const TechStack = async ({ tech }: { tech: string }) => {
  const techCheck = async () => {
    switch (tech) {
      case "shadcn-ui":
        return (
          <Image
            src={shadcnImg}
            width={50}
            height={50}
            alt="react"
            className="fill-white-900"
          />
        );
      case "uploadthing":
        return (
          <Image
            src={uploadImg}
            width={50}
            height={50}
            alt="react"
            className="object-cover"
          />
        );
      case "nodejs":
        return (
          <Image
            src={nodeImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12"
          />
        );
      case "html":
        return <Image src={htmlImg} width={50} height={50} alt="react" />;
      case "git":
        return (
          <Image
            src={gitImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12"
          />
        );
      case "gitHub":
        return <IconBrandGithub className="size-5 md:size-12" />;
      case "copilot":
        return (
          <IconBrandGithubCopilot className="size-5 stroke-white-900 md:size-12" />
        );
      case "nextjs":
        return (
          <Image
            src={nextImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12"
          />
        );
      case "amazon":
        return <IconBrandAmazon className="size-5 md:size-12" />;
      case "typescript":
        return (
          <Image
            src={tsImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12"
          />
        );
      case "tailwind":
        return (
          <Image
            src={tailwindImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12"
          />
        );
      case "laravel":
        return <IconBrandLaravel className="size-5 md:size-12" />;
      case "react":
        return (
          <Image
            src={reactImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12"
          />
        );
      case "prisma":
        return (
          <IconBrandPrisma className="size-5 stroke-white-900 md:size-12" />
        );
      case "stripe":
        return <IconBrandStripe className="size-5 md:size-12" />;
      case "stackoverflow":
        return <IconBrandStackoverflow className="size-5 md:size-12" />;
      case "framer":
        return (
          <IconBrandFramerMotion className="size-5 fill-white-900 md:size-12" />
        );
      case "socketio":
        return <IconBrandSocketIo className="size-5 md:size-12" />;
      case "postgres":
        return (
          <Image
            src={postGres}
            alt="postgres"
            width={50}
            height={50}
            className="size-5 md:size-12"
          />
        );
      case "clerkjs":
        return (
          <Image
            src={clerk}
            alt="clerk"
            width={50}
            height={50}
            className="size-5 md:size-12"
          />
        );
      case "supabase":
        return (
          <IconBrandSupabase className="size-5 stroke-green-400 md:size-12" />
        );
      default:
        return (
          <div className="flex   rounded-full ">
            <div className="flex size-16 w-full items-center justify-between ">
              {tech}
            </div>
          </div>
        );
    }
  };
  return <div className=" flex  rounded-full ">{techCheck()}</div>;
};

const TechStacks = ({ tech }: { tech: string[] }) => {
  return (
    <div className="flex w-full flex-wrap items-center  gap-6 rounded-full">
      {tech.map((tek) => (
        <div key={tek} className="flex  rounded-full">
          <TechStack tech={tek} />
        </div>
      ))}
    </div>
  );
};

export default TechStacks;
