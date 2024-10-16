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

import uploadImg from "@/public/images/uploadthing.svg";
import shadcnImg from "@/public/images/shadcnui.svg";
import ClerkIcon from "../ui/icons/ClerkIcon";
import Postgres from "../ui/icons/Postgres";
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
            className="size-5 object-cover md:size-12 place-self-center"
          />
        );
      case "nodejs":
        return (
          <Image
            src={nodeImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12 place-self-center"
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
            className="size-5 md:size-12 place-self-center "
          />
        );
      case "gitHub":
        return (
          <IconBrandGithub className="size-5 md:size-12 place-self-center" />
        );
      case "copilot":
        return (
          <IconBrandGithubCopilot className="size-5 stroke-white-900 md:size-12 place-self-center" />
        );
      case "nextjs":
        return (
          <Image
            src={nextImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12 place-self-center"
          />
        );
      case "amazon":
        return (
          <IconBrandAmazon className="size-5 md:size-12 place-self-center" />
        );
      case "typescript":
        return (
          <Image
            src={tsImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12 place-self-center"
          />
        );
      case "tailwind":
        return (
          <Image
            src={tailwindImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12 place-self-center"
          />
        );
      case "laravel":
        return (
          <IconBrandLaravel className="size-5 md:size-12 place-self-center" />
        );
      case "react":
        return (
          <Image
            src={reactImg}
            width={50}
            height={50}
            alt="react"
            className="size-5 md:size-12 place-self-center"
          />
        );
      case "prisma":
        return (
          <IconBrandPrisma className="size-5 stroke-white-900 md:size-12 place-self-center" />
        );
      case "stripe":
        return (
          <IconBrandStripe className="size-5 md:size-12 place-self-center" />
        );
      case "stackoverflow":
        return (
          <IconBrandStackoverflow className="size-5 md:size-12 place-self-center" />
        );
      case "framer":
        return (
          <IconBrandFramerMotion className="size-5 fill-white-900 md:size-12 place-self-center" />
        );
      case "socketio":
        return (
          <IconBrandSocketIo className="size-5 md:size-12 place-self-center" />
        );
      case "postgres":
        return (
          <Postgres size={64} className="size-5 md:size-12 place-self-center" />
        );
      case "clerkjs":
        return (
          <ClerkIcon
            size={64}
            className="size-5 md:size-12 place-self-center"
          />
        );
      case "supabase":
        return (
          <IconBrandSupabase className="size-5 stroke-green-400 md:size-12 place-self-center" />
        );
      default:
        return (
          <div className="flex w-1/6 items-center justify-center rounded-full ">
            <div className="flex size-16 w-full items-center justify-center place-self-center">
              {tech}
            </div>
          </div>
        );
    }
  };
  return (
    <div className=" flex  rounded-full justify-center items-center ">
      {techCheck()}
    </div>
  );
};

const TechStacks = ({ tech }: { tech: string[] }) => {
  return (
    <div className="grid w-full grid-cols-12 items-center justify-items-center gap-6 max-md:grid-cols-6 md:w-4/5 md:px-2">
      {tech.map((tek, idx) => (
        <div
          key={tek}
          className="mq450:w-1/6 flex w-full items-center justify-center rounded-full"
        >
          <TechStack tech={tek} />
        </div>
      ))}
    </div>
  );
};

export default TechStacks;
