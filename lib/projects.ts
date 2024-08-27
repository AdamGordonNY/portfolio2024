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
    title: "DevToday",

    description:
      "A Social Media platform for developers to share their knowledge and organize gatherings",
    cardImage: "images/devtodayslanted.svg",
    images: ["images/devtodayslanted.svg"],

    tech: ["nextjs", "tailwind", "prisma", "supabase", "typescript"],
    links: {
      repo: "https://github.com/adamgordonnny/devtodayadamsversion",
      liveSite: "https://devtoday.vercel.app",
      portfolioPath: "/projects/devtoday",
    },
    features: [{ id: 1, title: "", purpose: "" }],
    summary: "",
    mission: "",
    process: [],
    result: {
      learning:
        "We had a very good working chemistry as a team, and despite real life interruptions such as illness, vacation, and general distractions, we got about 95 % done with our tasks on our Asana board.  Our Project manager was impressed with the Audio API implementation and our use of framer motion in certain spots, especially the animation on the group card.  Key takeaways for me personally were using Audio API with the context provider, Seamlessly integrating filtering using searchParams and query strings to filter content appropriately.  Using framer motion added just enough flare to the project to polish the look.  It would have been great to have completed the socket.io portion of the site and done an SEO optimization scan on the project, we ran out of time for that though.  Since the project ended I was able to fix a few minor bugs, get our view like and follow metrics to work well across different parts of the site, and feel comfortable using all these tools again in any context. I look forward to putting the finishing touches on the socket.io portion.",
      challenges: "",
      nextSteps: [""],
    },
  },
  {
    title: "Overflow GPT",
    description:
      "A StackOverflow clone that uses the power of Generative AI to answer questions",
    cardImage: "images/devoverflowslanted.svg",
    images: ["images/doSlanted.svg"],
    links: {
      repo: "https://github.com/adamgordonny/devoverflow",
      liveSite: "https://devoverflow.adam-gordon.info",
      portfolioPath: "/projects/devoverflow",
    },
    features: [
      {
        id: 1,
        title: "",
        purpose: "",
      },
    ],
    tech: ["nextjs", "tailwind", "mongo", "typescript", "chatgpt"],
    summary: "",
    mission: "",
    process: [],
    result: {
      learning: "",
      challenges: "",
      nextSteps: [""],
    },
  },
  {
    title: "GitNote",
    description: "A note-taking app for developers that integrates with Github",
    images: ["/images/gitnote.svg"],
    features: [{ id: 1, title: "", purpose: "" }],
    links: {
      repo: "https://github.com/adamgordonny/git_note",
      liveSite: "https://gitnote.adam-gordon.info",
      portfolioPath: "/projects/gitnote",
    },
    cardImage: "/images/gitnoteslanted.svg",
    tech: ["nextjs", "tailwind", "", "supabase", "typescript"],
    summary: "",
    mission: "",
    process: [],
    result: {
      learning: "",
      challenges: "",
      nextSteps: [""],
    },
  },
];

export const contactDetails: { [key: string]: string } = {
  email: "mailto:adam@adam-gordon.info",
  github: "https://github.com/adamgordonnny",
  linkedIn: "https://www.linkedin.com/in/adam-gordon119",
  medium: "",
  location: "New York, NY",
  resume: "/resume.pdf",
  discord: "ID: 588407310976679940 Username: _adam_g",
};
