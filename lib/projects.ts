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
    subtitle: "Where Developers Connect",
    description:
      "A social media platform for developers to share their knowledge, organize meetups, and share audio content. You can even listen to podcasts while navigating the site.",
    cardImage: "images/devtodayslanted.svg",
    images: ["/images/devtoday-wide.svg", "/images/devtoday.svg"],
    tech: [
      "nextjs",
      "tailwind",
      "prisma",
      "supabase",
      "typescript",
      "uploadthing",
      "framer",
      "postgres",
      "clerkjs",
      "react",
    ],
    links: {
      repo: "https://github.com/AdamGordonNY/DevTodayAdamsVersion",
      liveSite: "https://adam-gordon.info",
      portfolioPath: "/projects/devtoday",
    },
    summary:
      "DevToday is a modern platform for developers with a classic touch. It was designed to facilitate productivity and collaboration in the developer community.",
    mission: [
      {
        task: [
          {
            title: "Planning and Tech Stack Selection",
            description:
              "We outlined the tech stack, project structure, and established priorities for the 9-week development timeline. Selected Next.js, Prisma, and Supabase as key technologies.",
            goal: "To establish a clear project roadmap and choose the most suitable technologies.",
            result:
              "The tech stack was finalized with Next.js for the frontend, Prisma for ORM, and Supabase for the backend database. ESLint and Prettier were also configured.",
            takeaways:
              "Team collaboration tools like Asana and daily check-ins were critical in keeping us on track.",
          },
          {
            title: "Authentication System",
            description:
              "Implemented a secure and customizable authentication system using ClerkJS to handle user sign-ins and sign-ups.",
            goal: "To integrate a secure, scalable authentication system.",
            result:
              "ClerkJS was fully integrated into the site, and we created routes for sign-in, sign-up, and onboarding.",
            takeaways:
              "ClerkJS was flexible and customizable, which greatly reduced development time while offering strong authentication features.",
          },
          {
            title: "Profile Pages and Audio Player",
            description:
              "Users can create and customize profile pages. Integrated an audio player that allows users to listen to podcasts while navigating the site.",
            goal: "To create user profiles and provide a seamless audio experience.",
            result:
              "The user profile system was completed with fully functional audio player integration, providing a seamless media experience across the site.",
            takeaways:
              "The use of Next.js and Prisma simplified server-side rendering and database queries, improving performance.",
          },
        ],
      },
    ],
    nextSteps: [
      {
        step: 1,
        description:
          "Rebuild the socket.io server for real-time notifications.",
      },
      {
        step: 2,
        description: "Optimize the site for SEO to improve search visibility.",
      },
      {
        step: 3,
        description:
          "Integrate the site with my portfolio as a blog documenting my career journey.",
      },
    ],
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Content Overview Pages, Profile Pages, Audio Player",
      },
      { name: "Darshin Von Parijs", role: "Theme, Layout, Content Pages" },
      { name: "Brandon Etter", role: "Project Manager and Code Reviewer" },
    ],
  },
  {
    title: "Overflow GPT",
    description:
      "A StackOverflow clone that uses the power of Generative AI to answer questions.",
    cardImage: "images/docard.svg",
    images: ["images/doSlanted.svg"],
    tech: ["nextjs", "tailwind", "mongo", "typescript", "chatgpt", "clerk"],
    links: {
      repo: "https://github.com/AdamGordonNY/devoverflow",
      liveSite: "https://devoverflow.adam-gordon.info",
      portfolioPath: "/projects/devoverflow",
    },
    summary: "A platform inspired by StackOverflow, powered by AI.",
    mission: [
      {
        task: [
          {
            title: "AI Powered Answering",
            description:
              "AI generates answers to user questions, similar to StackOverflow but powered by ChatGPT.",
            goal: "To provide users with AI-generated answers to their questions.",
            result:
              "The AI feature is fully integrated, allowing users to ask questions and receive responses generated by the AI.",
            takeaways:
              "Integrating AI into a Q&A platform opens up new ways to provide real-time, accurate answers.",
          },
          {
            title: "Interactivity and User Engagement System",
            description:
              "Users can earn badges, follow others, and interact with questions and answers. Popular questions and active users are displayed.",
            goal: "To create an interactive system that encourages engagement.",
            result:
              "The badge system and user activity features were implemented, increasing user engagement and interaction.",
            takeaways:
              "Gamification through badges and following systems creates stronger user retention.",
          },
        ],
      },
    ],
    nextSteps: [
      {
        step: 1,
        description: "Enhance AI's accuracy and response generation.",
      },
      {
        step: 2,
        description:
          "Expand the badge and reward system for more user interaction.",
      },
    ],
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Content Overview Pages + Profile Pages + Audio Player",
      },
    ],
  },
  {
    title: "GitNote",
    description:
      "A learning journal and knowledge repository for developers to log their thoughts, processes, and ideas.",
    cardImage: "/images/gitnoteslanted.svg",
    images: ["/images/gitnote.svg"],
    tech: ["nextjs", "tailwind", "mongo", "supabase", "typescript"],
    links: {
      repo: "https://github.com/AdamGordonNY/git_note",
      liveSite: "https://gitnote.adam-gordon.info",
      portfolioPath: "/projects/gitnote",
    },
    summary: "A platform to track learning and development processes.",
    mission: [
      {
        task: [
          {
            title: "Knowledge Repository",
            description:
              "GitNote acts as a journal for developers to log their learning processes and ideas.",
            goal: "To provide a central space for developers to record and organize their knowledge.",
            result:
              "The platform allows users to store and categorize their learning and project notes.",
            takeaways:
              "Developers can stay organized and track their growth by documenting their progress.",
          },
        ],
      },
    ],
    nextSteps: [
      {
        step: 1,
        description: "Add advanced search and filtering capabilities.",
      },
      {
        step: 2,
        description:
          "Introduce social sharing features for broader collaboration.",
      },
    ],
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Primary Developer",
      },
      {
        name: "Brandon Etter",
        role: "Project Manager and Code Reviewer",
      },
    ],
  },
];

export const contactDetails: { [key: string]: string } = {
  email: "mailto:adam@adam-gordon.info",
  github: "https://github.com/adamgordonnny",
  linkedIn: "https://www.linkedin.com/in/adam-gordon119",
  medium: "https://medium.com/@",
  location: "New York, NY",
  resume: "/resume.pdf",
  discord: "ID: 588407310976679940 Username: _adam_g",
};
