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
      return <IconBrandReact size={48} />;
    case "nextjs":
      return <NextJS size={48} />;
    case "tailwind":
      return <Tailwind size={48} />;
    case "typescript":
      return <Typescript size={48} />;
    case "laravel":
      return <IconBrandLaravel size={48} />;
    case "figma":
      return <IconBrandFigma size={48} />;
    case "vsCode":
      return <IconBrandVscode size={48} />;
    case "xbox":
      return <IconBrandXbox size={48} />;
    case "prisma":
      return (
        <IconBrandPrisma size={48} className="fill-#4DB6AC stroke-#4DB6AC" />
      );
    case "chatgpt":
      return <ChatGPT size={48} />;
    case "mongo":
      return <MongoDB size={48} />;
    case "stripe":
      return <FaStripeS size={48} />;
    case "vue":
      return <IconBrandVue size={48} />;
  }
};
