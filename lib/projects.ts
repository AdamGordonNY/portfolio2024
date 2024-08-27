import { CaseStudy } from "./types";

// const iconsArray: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>[] =
//   [
//     IconBrandNextjs,
//     IconBrandReact,
//     IconBrandPrisma,
//     IconBrandSupabase,
//     IconBrandTailwind,
//     // Add other icons as needed
//   ];
export const projectList: CaseStudy[] = [
  {
    title: "DevToday - For Developers, by Developers",
    description:
      "A platform for developers to share their knowledge and experiences",
    cardImage: "images/devtodayslanted.svg",
    images: ["images/devtodayslanted.svg"],

    tech: ["nextjs", "tailwind", "prisma", "supabase", "typescript"],
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
  {
    title: "DevOverFlow - StackOverflow Clone using the power of Generative AI",
    description:
      "A StackOverflow clone that uses the power of Generative AI to answer questions",
    cardImage: "images/devoverflowslanted.svg",
    images: ["images/devoverflowslanted.svg"],
    links: {
      repo: "https://github.com/adamgordonny/devoverflow",
      liveSite: "https://devoverflow.adam-gordon.info",
      portfolioPath: "/projects/devoverflow",
    },
    tech: ["nextjs", "tailwind", "prisma", "supabase", "typescript"],
    summary: "",
    mission: "",
    process: [],
    result: {
      learning: [""],
      challenges: [""],
      nextSteps: [""],
    },
  },
  {
    title: "GitNote - A note-taking app for developers",
    description: "A note-taking app for developers that integrates with Github",
    images: ["/images/gitnote.svg"],
    links: {
      repo: "https://github.com/adamgordonny/git_note",
      liveSite: "https://gitnote.adam-gordon.info",
      portfolioPath: "/projects/gitnote",
    },
    cardImage: "/images/gitnote.svg",
    tech: ["nextjs", "tailwind", "prisma", "supabase", "typescript"],
    summary: "",
    mission: "",
    process: [],
    result: {
      learning: [""],
      challenges: [""],
      nextSteps: [""],
    },
  },
];

export const contactDetails: { [key: string]: string } = {
  email: "mailto:adam@adam-gordon.info",
  github: "https://github.com/adamgordonnny",
  linkedIn: "https://www.linkedin.com/in/adam-gordon119",
};
