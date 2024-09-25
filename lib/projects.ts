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
      "A Social Media platform for developers to share their knowledge, organize meetups, and share audio content. ",
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
    procedure: [
      {
        id: 1,
        title: "Planning",
        purpose:
          "We outlined the tech stack, project structure, and established priorities for the 9-week development timeline.",
        steps: [
          {
            step: 1,
            description:
              "Set up an Asana board to define requirements and prevent overlapping work.",
          },
          {
            step: 2,
            description:
              "Held daily check-ins to discuss progress, solve problems, and plan next steps.",
          },
          {
            step: 3,
            description:
              "Chose the database, hosting solution, and authentication system.",
          },
          {
            step: 4,
            description: "Set up ESLint and Prettier for code consistency.",
          },
        ],
      },
      {
        id: 2,
        title: "Tech Stack Selection",
        purpose:
          "We selected the tools and technologies to best leverage Next.js for our project.",
        steps: [
          {
            step: 1,
            description:
              "Chose ClerkJS for authentication due to its customizability and scalability.",
          },
          {
            step: 2,
            description: "Integrated Shadcn-UI for customizable components.",
          },
          {
            step: 3,
            description:
              "Used CMDK for search, Socket.io for notifications, and Prisma with Supabase PostgreSQL for the database.",
          },
          {
            step: 4,
            description:
              "Leveraged server actions for faster data fetching using Prisma’s ORM and Next.js SSR capabilities.",
          },
        ],
      },
      {
        id: 3,
        title: "ClerkJS Authentication",
        purpose:
          "We wanted a secure and customizable authentication system that integrates well with Prisma.  ClerkJS is a great solution for authentication, as it integrates with most if not all the current identity platforms, is very customizable, and has both a great experience for the user and the developer.",
        steps: [
          {
            step: 1,
            description:
              "Set up ClerkJS and created sign-in and sign-up routes using Next.js' route groups.",
          },
          {
            step: 2,
            description:
              "Added SignIn and SignUp components to page routes and wrapped the app in ClerkProvider.",
          },
          {
            step: 3,
            description:
              "Created a layout for the authentication flow and configured onboarding context.",
          },
          {
            step: 4,
            description:
              "Configured middleware to manage onboarding and ensure proper flow.",
          },
        ],
      },
      {
        id: 4,
        title: "Profile Pages",
        purpose:
          "Each user needed a profile page showcasing their posts, podcasts, groups, followers, and followings.",
        steps: [
          {
            step: 1,
            description:
              "Designed the User model with relationships to posts, podcasts, and followers in Prisma.",
          },
          {
            step: 2,
            description:
              "Implemented scalable profile image components using relative and absolute positioning.",
          },
        ],
      },
      {
        id: 5,
        title: "Audio Player",
        purpose:
          "The Audio Player allows users to listen to podcasts while navigating the site.",
        steps: [
          {
            step: 1,
            description:
              "Integrated the HTML <audio> API for podcast playback.",
          },
          {
            step: 2,
            description:
              "Implemented a context provider for seamless audio playback across the site.",
          },
        ],
      },
    ],
    summary:
      "DevToday is a modern platform for developers to create and share content, organize meetups, and collaborate. It provides a stress-free social media experience tailored to developers.",
    mission:
      "Our mission was to create a space where developers could socialize, network, and share information through posts, podcasts, and meetups.",
    result: {
      outcome:
        "The project was completed 95% within the time frame, with a few features left to be finalized. Highlights include ultra-fast SQL queries, the Audio Player, and Google Maps integration.",
      goals:
        "We completed core features like authentication, profile pages, and the Audio Player within the 9-week timeline.",
      learning:
        "This project ran the gamut of full stack development hurdles and obstacles, and we learned a lot about the importance of planning, communication, and teamwork.  Specific technical aspects that I definitely improved upon and understand more fully now that I've done this project, are Server Actions and dynamically fetching data based on query-strings and filters.  Styling and layout design were also a big part of this project, and I learned a lot about how to use Tailwind CSS to create a responsive and visually appealing site.",
      challenges:
        "The biggest challenges were time constraints, setting up user notifications, and webhooks for syncing users with the database.",
      nextSteps: [
        { step: 1, description: "Rebuild the socket.io server." },
        { step: 2, description: "Optimize the site for SEO." },
        {
          step: 3,
          description:
            "Integrate the site with my portfolio as a blog documenting my career journey.",
        },
      ],
    },
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
      "A StackOverflow clone that uses the power of Generative AI to answer questions",
    cardImage: "images/docard.svg",
    images: ["images/doSlanted.svg"],
    links: {
      repo: "https://github.com/AdamGordonNY/devoverflow",
      liveSite: "https://devoverflow.adam-gordon.info",
      portfolioPath: "/projects/devoverflow",
    },
    procedure: [
      {
        id: 1,
        title: "AI Powered Answering",
        purpose:
          "Since the concept of the site is based on stackoverflow with ChatGPT to generate answers to common questions, the AI is the main feature of the site.  The AI is able to generate answers to questions that are asked, and the user can then choose to accept the answer or ask for another one. ",
        steps: [],
      },
      {
        id: 2,
        title: "Interactivity System",
        purpose:
          "Users can earn badge levels by asking questions, answering questions, and accepting answers.  The user can also follow other users, and see their activity on the site.  The user can also see the most popular questions, and the most active users on the site.  The user can also search for questions by title or tag, and filter by tag. Gold, Silver, and Bronze badges are awarded with an algorithm that determines the score of each interaction.",
        steps: [],
      },
      {
        id: 3,
        title: "Job Search API",
        purpose:
          "Since this was a feature that was not in the original stackoverflow, we added a job search API that allows users to search for jobs by title, location, and company.  The user can also filter by job type, and see the most popular jobs on the site.  The user can also search for jobs by title or company, and filter by job type.  The user can also see the most popular jobs, and the most active companies on the site.  Gold, Silver, and Bronze badges are awarded with an algorithm that determines the score of each interaction.",
        steps: [],
      },
    ],
    tech: ["nextjs", "tailwind", "mongo", "typescript", "chatgpt", "clerk"],
    summary: "",
    mission: "",

    result: {
      outcome: "",
      learning: "",
      challenges: "",
      nextSteps: [],
    },
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
      "A Learning Journal and Knowledge Repository that can act as a logbook and a container for a developers thoughts, processes, and ideas.",
    images: ["/images/gitnote.svg"],
    procedure: [{ id: 1, title: "", purpose: "", steps: [] }],
    links: {
      repo: "https://github.com/AdamGordonNY/git_note",
      liveSite: "https://gitnote.adam-gordon.info",
      portfolioPath: "/projects/gitnote",
    },
    cardImage: "/images/gitnoteslanted.svg",
    tech: ["nextjs", "tailwind", "mongo", "supabase", "typescript"],
    summary: "",
    mission: "",

    result: {
      outcome: "",
      learning: "",
      challenges: "",
      nextSteps: [],
    },
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
