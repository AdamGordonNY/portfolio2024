import { ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
  IconBrandFigma,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrandXbox,
} from "@tabler/icons-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const renderIcon = (icon: string) => {
  switch (icon) {
    case "react":
      return <IconBrandReact size={50} />;
    case "nextjs":
      return <IconBrandNextjs size={50} />;
    case "tailwind":
      return <IconBrandTailwind size={50} />;
    case "typescript":
      return <IconBrandTypescript size={50} />;
    case "laravel":
      return <IconBrandLaravel size={50} />;
    case "figma":
      return <IconBrandFigma size={50} />;
    case "vscode":
      return <IconBrandVscode size={50} />;
    case "xbox":
      return <IconBrandXbox size={50} />;
  }
};
