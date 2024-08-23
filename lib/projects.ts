import { ForwardRefExoticComponent, RefAttributes } from "react";
import { CaseStudy } from "./types";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandXbox,
  IconMail,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandPrisma,
  IconBrandSupabase,
  IconProps,
  Icon,
} from "@tabler/icons-react";
const iconsArray: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>[] =
  [
    IconBrandNextjs,
    IconBrandReact,
    IconBrandPrisma,
    IconBrandSupabase,
    IconBrandTailwind,
    // Add other icons as needed
  ];
export const projectList: CaseStudy[] = [
  {
    title: "DevToday - For Developers, by Developers",
    description:
      "A platform for developers to share their knowledge and experiences",
    cardImage: "images/devtodayslanted.svg",
    images: ["images/devtodayslanted.svg"],

    tech: iconsArray,
    links: {
      repo: "https://github.com/adamgordonnny/devtodayadamsversion",
      liveSite: "https://devtoday.vercel.app",
      portfolioPath: "/projects/devtoday",
    },

    summary: "",
    mission: "",
    process: [],
    result: {
      learning: [""],
      challenges: [""],
      nextSteps: [""],
    },
  },
  // {
  //   title: "DevOverFlow - StackOverflow Clone using the power of Generative AI",
  //   description:
  //     "A StackOverflow clone that uses the power of Generative AI to answer questions",
  //   image: "/images/devoverflow.svg",
  // },
  // {
  //   title: "GitNote - A note-taking app for developers",
  //   description: "A note-taking app for developers that integrates with Github",
  //   image: "/images/gitnote.svg",
  // },
];

export const contactDetails: { [key: string]: string } = {
  email: "mailto:adam@adam-gordon.info",
  github: "https://github.com/adamgordonnny",
  linkedIn: "https://www.linkedin.com/in/adam-gordon119",
};
