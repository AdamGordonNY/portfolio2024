import { links } from "./data";

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
  tech: string[];
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
