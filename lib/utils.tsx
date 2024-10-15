import { ClassValue, clsx } from "clsx";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IconBrandXbox, IconBrandGithubCopilot } from "@tabler/icons-react";

import ChatGPT from "@/components/ui/icons/ChatGPT";
import { FaStripeS } from "react-icons/fa";
import Postgres from "@/components/ui/icons/Postgres";
import clerkJS from "@/public/images/clerk.svg";

import MongoDB from "@/components/ui/icons/MongoDB";
import Vue from "@/components/ui/icons/Vue";

import JS from "@/components/ui/icons/JS";

import Azure from "@/components/ui/icons/Azure";

import Prisma from "@/components/ui/icons/Prisma";
import Figma from "@/components/ui/icons/Figma";
import Laravel from "@/components/ui/icons/Laravel";
import Typescript from "@/components/ui/icons/Typescript";
import NextJS from "@/components/ui/icons/NextJS";
import ReactIcon from "@/components/ui/icons/ReactIcon";
import Tailwind from "@/components/ui/icons/Tailwind";
import CSharp from "@/components/ui/icons/CSharp";
import Firebase from "@/components/ui/icons/Firebase";
import Python from "@/components/ui/icons/Python";
import Nuxt from "@/components/ui/icons/Nuxt";
import MySQL from "@/components/ui/icons/MySQL";
import Vite from "@/components/ui/icons/Vite";
import Docker from "@/components/ui/icons/Docker";
import SocketIO from "@/components/ui/icons/SocketIO";
import NodeJS from "@/components/ui/icons/NodeJS";
import HTML from "@/components/ui/icons/HTML";
import Css from "@/components/ui/icons/Css";
import { VSCode } from "@/components/ui/icons/VSCode";
import DotNet from "@/components/ui/icons/DotNet";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const renderIcon = (icon: string) => {
  switch (icon) {
    case "react":
      return (
        <div>
          <ReactIcon size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "nextjs":
      return (
        <div>
          <NextJS size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "tailwind":
      return (
        <div>
          <Tailwind size={32} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "typescript":
      return (
        <div>
          <Typescript size={32} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "laravel":
      return (
        <div>
          {" "}
          <Laravel size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "figma":
      return (
        <div>
          <Figma size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "vscode":
      return (
        <div>
          <VSCode size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "xbox":
      return <IconBrandXbox size={64} className="mq450:size-6   md:size-12" />;
    case "prisma":
      return (
        <div>
          <Prisma size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "chatgpt":
      return (
        <div>
          <ChatGPT size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "mongo":
      return (
        <div>
          <MongoDB size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "stripe":
      return (
        <div>
          <FaStripeS size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "vue":
      return (
        <div>
          <Vue size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "vite":
      return (
        <div>
          <Vite size={64} className="mq450:size-6  md:size-12" />
        </div>
      );

    case "mysql":
      return <MySQL size={64} className="mq450:size-6  md:size-12" />;
    case "javascript":
      return (
        <div>
          <JS size={64} className="mq450:size-6 md:size-12" />
        </div>
      );
    case "html":
      return (
        <div>
          <HTML size={64} className="mq450:size-6 md:size-12" />
        </div>
      );
    case "css":
      return (
        <div>
          <Css size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "docker":
      return (
        <div>
          <Docker size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "socketio":
      return (
        <div>
          <SocketIO size={64} className="mq450:size-6   md:size-12" />
        </div>
      );
    case "python":
      return (
        <div>
          <Python size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "firestore":
      return (
        <div>
          <Firebase size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "nodejs":
      return (
        <div>
          <NodeJS size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "githubcopilot":
      return (
        <div>
          <IconBrandGithubCopilot
            size={64}
            className="mq450:size-6  md:size-12"
          />
        </div>
      );
    case "nuxt":
      return (
        <div>
          <Nuxt size={64} className="mq450:size-6 md:size-12" />
        </div>
      );
    case "azure":
      return (
        <div>
          <Azure size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "clerk":
      return (
        <div>
          <Image
            width={64}
            height={64}
            src={clerkJS}
            alt="clerk"
            className="mq450:size-6  md:size-12"
          />
        </div>
      );
    case "postgres":
      return (
        <div>
          <Postgres size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "sql":
      return (
        <div>
          <MySQL size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "csharp":
      return (
        <div>
          <CSharp size={64} className="mq450:size-6  md:size-12" />
        </div>
      );
    case "dotnet":
      return (
        <div className="rounded-full bg-dark-100 size-16">
          <DotNet size={64} />
        </div>
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
