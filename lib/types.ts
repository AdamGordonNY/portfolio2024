import { Icon, IconProps } from "@tabler/icons-react";
import { links } from "./data";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type SectionName = (typeof links)[number]["name"];
export type CaseStudy = {
  title: string;
  description: string;
  images: string[];
  cardImage: string;
  links: {
    repo: string;
    liveSite: string;
    portfolioPath?: string;
  };
  tech: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>[];
  summary: string;
  mission: string;

  process: {
    id: number;
    title: string;
    description: string;
  }[];

  result: {
    learning: string[];
    challenges: string[];
    nextSteps: string[];
  };
};
