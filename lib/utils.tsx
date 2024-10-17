import { ClassValue, clsx } from "clsx";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IconBrandXbox, IconBrandGithubCopilot } from "@tabler/icons-react";

import ChatGPT from "@/components/ui/icons/ChatGPT";
import { FaStripeS } from "react-icons/fa";

import Firebase from "@/components/ui/icons/Firebase";
import MySQL from "@/components/ui/icons/MySQL";
import { VSCode } from "@/components/ui/icons/VSCode";
import ClerkIcon from "@/components/ui/icons/ClerkIcon";
import ShadcnUI from "@/components/ui/icons/ShadcnUI";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const renderIcon = (icon: string) => {
  switch (icon.toLowerCase()) {
    case "react":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
        </div>
      );
    case "typescript":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />
        </div>
      );
    case "nextjs":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            alt="nexjs"
            width={64}
            height={64}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />
        </div>
      );
    case "tailwind":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            alt="nexjs"
            width={64}
            height={64}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
        </div>
      );
    case "vuejs":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="vuejs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          />
        </div>
      );
    case "laravel":
      return (
        <div className="flex size-[64px] items-center justify-center">
          {" "}
          <Image
            width={64}
            height={64}
            alt="laravel"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
          />
        </div>
      );
    case "figma":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          />
        </div>
      );
    case "vscode":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <VSCode className="mq450:size-6   md:size-full" />
        </div>
      );
    case "xbox":
      return <IconBrandXbox className="mq450:size-6   md:size-full" />;
    case "postman":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
          />
        </div>
      );
    case "prisma":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
          />
        </div>
      );
    case "php":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
          />
        </div>
      );
    case "chatgpt":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <ChatGPT className="mq450:size-6   md:size-full" />
        </div>
      );
    case "mongo":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
          />
        </div>
      );
    case "stripe":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <FaStripeS className="mq450:size-6  md:size-full" />
        </div>
      );
    case "vue":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          />
        </div>
      );
    case "vite":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
          />
        </div>
      );

    case "mysql-icon":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <MySQL className=" size-8 md:size-16" />
        </div>
      );
    case "javascript":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
          />
        </div>
      );
    case "html":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
          />
        </div>
      );
    case "css":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
          />
        </div>
      );
    case "docker":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
          />
        </div>
      );
    case "socketio":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"
          />
        </div>
      );
    case "python":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
          />
        </div>
      );
    case "firebase-icon":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Firebase className=" size-8 md:size-16" />
        </div>
      );
    case "nodejs":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="node"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          />
        </div>
      );
    case "githubcopilot":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <IconBrandGithubCopilot className="mq450:size-6  md:size-full" />
        </div>
      );
    case "nuxt":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original-wordmark.svg"
          />
        </div>
      );
    case "azure":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          />
        </div>
      );
    case "clerkjs":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <ClerkIcon className="mq450:size-6  md:size-full" />
        </div>
      );
    case "postgres":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          />
        </div>
      );
    case "mysql":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
          />
        </div>
      );
    case "csharp":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          />
        </div>
      );
    case "dotnet":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
          />
        </div>
      );
    case "framer":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
          />
        </div>
      );
    case "graphql":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
          />
        </div>
      );
    case "clerk":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <ClerkIcon className="mq450:size-6  md:size-full" />
        </div>
      );
    case "supabase":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
          />
        </div>
      );
    case "apache":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original-wordmark.svg"
          />
        </div>
      );
    case "nginx":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="nginx"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
          />
        </div>
      );
    case "aws":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />
        </div>
      );
    case "firestore":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
          />
        </div>
      );
    case "firebase":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
          />
        </div>
      );
    case "shadcn-ui":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <ShadcnUI className="mq450:size-6  md:size-full" />
        </div>
      );
    case "blazor":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="blaz"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg"
          />
        </div>
      );
    case "vercel":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="vercel"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
          />
        </div>
      );
    case "google":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
          />
        </div>
      );
    case "android":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="android"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
          />
        </div>
      );
    case "canva":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
          />
        </div>
      );
    case "mssql":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
          />
        </div>
      );
    case "eslint":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original-wordmark.svg"
          />
        </div>
      );
    case "kubernetes":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg"
          />
        </div>
      );
    case "google cloud":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="google cloud"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
          />
        </div>
      );
    case "trello":
      return (
        <div className="flex size-[64px] items-center justify-center">
          <Image
            width={64}
            height={64}
            alt="trello"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg"
          />
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
