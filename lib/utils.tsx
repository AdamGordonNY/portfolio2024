import { ClassValue, clsx } from "clsx";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  IconBrandFigma,
  IconBrandLaravel,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandVscode,
  IconBrandVue,
  IconBrandXbox,
  IconBrandInertia,
  IconBrandVite,
  IconBrandVisualStudio,
  IconBrandMysql,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandSocketIo,
  IconBrandPython,
  IconBrandGoogleFilled,
  IconBrandNodejs,
  IconBrandGithubCopilot,
  IconBrandNuxt,
  IconBrandAzure,
} from "@tabler/icons-react";

import NextJS from "@/components/ui/icons/NextJS";
import ChatGPT from "@/components/ui/icons/ChatGPT";
import MongoDB from "@/components/ui/icons/MongoDB";
import Tailwind from "@/components/ui/icons/Tailwind";
import Typescript from "@/components/ui/icons/Typescript";
import { FaStripeS } from "react-icons/fa";
import clerkJS from "@/public/images/clerk.svg";
import postgresQL from "@/public/images/postgres.svg";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const renderIcon = (icon: string) => {
  switch (icon) {
    case "react":
      return <IconBrandReact size={24} className="mq450:size-6  md:size-12" />;
    case "nextjs":
      return <NextJS size={24} className="mq450:size-6  md:size-12" />;
    case "tailwind":
      return <Tailwind size={24} className="mq450:size-6  md:size-12" />;
    case "typescript":
      return <Typescript size={24} className="mq450:size-6  md:size-12" />;
    case "laravel":
      return (
        <IconBrandLaravel size={24} className="mq450:size-6  md:size-12" />
      );
    case "figma":
      return <IconBrandFigma size={24} className="mq450:size-6  md:size-12" />;
    case "vscode":
      return <IconBrandVscode size={24} className="mq450:size-6  md:size-12" />;
    case "xbox":
      return <IconBrandXbox size={24} className="mq450:size-6  md:size-12" />;
    case "prisma":
      return (
        <IconBrandPrisma
          size={24}
          className="mq450:size-6 place-self-center text-white-800 md:size-12"
        />
      );
    case "chatgpt":
      return <ChatGPT size={24} className="mq450:size-6  md:size-12" />;
    case "mongo":
      return <MongoDB size={24} className="mq450:size-6  md:size-12" />;
    case "stripe":
      return <FaStripeS size={24} className="mq450:size-6  md:size-12" />;
    case "vue":
      return <IconBrandVue size={24} className="mq450:size-6  md:size-12" />;
    case "inertia":
      return (
        <IconBrandInertia size={24} className="mq450:size-6  md:size-12" />
      );
    case "vite":
      return <IconBrandVite size={24} className="mq450:size-6  md:size-12" />;
    case "visualstudio":
      return (
        <IconBrandVisualStudio size={24} className="mq450:size-6  md:size-12" />
      );
    case "mysql":
      return <IconBrandMysql size={24} className="mq450:size-6  md:size-12" />;
    case "javascript":
      return (
        <IconBrandJavascript size={24} className="mq450:size-6  md:size-12" />
      );
    case "html":
      return <IconBrandHtml5 size={24} className="mq450:size-6  md:size-12" />;
    case "css":
      return <IconBrandCss3 size={24} className="mq450:size-6  md:size-12" />;
    case "docker":
      return <IconBrandDocker size={24} className="mq450:size-6  md:size-12" />;
    case "socketio":
      return (
        <IconBrandSocketIo size={24} className="mq450:size-6  md:size-12" />
      );
    case "python":
      return <IconBrandPython size={24} className="mq450:size-6  md:size-12" />;
    case "firestore":
      return (
        <IconBrandGoogleFilled size={24} className="mq450:size-6  md:size-12" />
      );
    case "nodejs":
      return <IconBrandNodejs size={24} className="mq450:size-6  md:size-12" />;
    case "githubcopilot":
      return (
        <IconBrandGithubCopilot
          size={24}
          className="mq450:size-6  md:size-12"
        />
      );
    case "nuxt":
      return <IconBrandNuxt size={24} className="mq450:size-6  md:size-12" />;
    case "azure":
      return <IconBrandAzure size={24} className="mq450:size-6  md:size-12" />;
    case "clerk":
      return (
        <Image
          width={24}
          height={24}
          src={clerkJS}
          alt="clerk"
          className="mq450:size-6  md:size-12"
        />
      );
    case "postgres":
      return (
        <Image
          width={24}
          height={24}
          src={postgresQL}
          alt="postgres"
          className="mq450:size-6  md:size-12"
        />
      );
    default:
      return null;
  }
};
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
