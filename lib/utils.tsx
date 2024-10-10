import { ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
  IconBrandFigma,
  IconBrandLaravel,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandVscode,
  IconBrandVue,
  IconBrandXbox,
} from "@tabler/icons-react";
import NextJS from "@/components/ui/icons/NextJS";
import ChatGPT from "@/components/ui/icons/ChatGPT";
import MongoDB from "@/components/ui/icons/MongoDB";
import Tailwind from "@/components/ui/icons/Tailwind";
import Typescript from "@/components/ui/icons/Typescript";
import { FaStripeS } from "react-icons/fa";

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
    case "vsCode":
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
