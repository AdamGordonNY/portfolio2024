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
      "A social media platform for developers to share their knowledge, organize meetups, and share audio content. Made with NextJS 14, TailwindCSS, and Prisma as the primary technologies.",
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
      "This project was done with the Javascript Mastery Masterclass,  and Brandon was our mentor who did code reviews with us and helped us on any concepts that we hadn't mastered yet.  The Audio Player and the Content Overview pages are what I'm most proud of in the project.  ",
    mission: [
      {
        task: [
          {
            title: "Planning",
            description:
              "With 9 weeks to do the project, and a long list of user stories on our Asana board to divide and conquer, we each went ticket by ticket - with discussion everyday for 30-60 minutes to catch each other up and go over any blockers. ",
            goal: "To establish a clear project roadmap and choose the most suitable technologies.",
            result:
              "Using Asana and common agile processes with check-ins 5 times a week, we were able to smoothly divide the work and keep a pace that allowed us to complete all but 5 or 6 of the 75 or so User Stories",
            takeaways: [
              "Team collaboration tools like Asana and daily check-ins were critical in keeping us on track",
            ],
          },
          {
            title: "Authentication / Onboarding",
            description:
              "Implemented a secure and customizable authentication system using ClerkJS to handle user sign-ins and sign-ups.",
            goal: "To integrate a secure, scalable authentication system, that integrates Github and Google OAuth, with an onboarding system to properly set first time users up.",
            result:
              "Using a seperate route group (auth) in the app directory, I made a sign-in and sign-up route with a custom design.  Using webhooks, Svix, and Server Actions, these goals were accomplished in short order.",
            takeaways: [
              "ClerkJS was flexible and customizable, which greatly reduced development time while offering strong authentication features.",
              "Making a seperate route group for auth made it easier to manage and test the auth system.",
            ],
          },
          {
            title: "Profile Pages",
            description:
              "Needed to set up a complex profile page, which displays users personal information, their posts, content of interest, as well as an option to follow/unfollow users.",
            goal: "For users to have their own personal page that displays all the content they've contributed, as well as links to other platforms they're on.",
            result:
              "Starting with the layout, set up a DOM that matched our design, then adding functionality to the page.  Using the power of Typescript Types, Prisma's ability to query data easily through either SQL or their own modules, NextJS's server actions, and TailwindCSS convenient and flexible styling, it took somewhere between 2 and 3 weeks to complete this feature.",
            takeaways: [
              "NextJS dynamic routing came in handy here in order to load the correct profile page based on the user's ID, as well as editing the profile page. Fetching complex data on the server with the correct custom type was challenging , but mission was accomplished.",
            ],
          },
          {
            title: "Profile Pages",
            description:
              "Needed to set up a complex profile page, which displays users personal information, their posts, content of interest, as well as an option to follow/unfollow users.",
            goal: "For users to have their own personal page that displays all the content they've contributed, as well as links to other platforms they're on.",
            result:
              "Starting with the layout, set up a DOM that matched our design, then adding functionality to the page.  Using the power of Typescript Types, Prisma's ability to query data easily through either SQL or their own modules, NextJS's server actions, and TailwindCSS convenient and flexible styling, it took somewhere between 2 and 3 weeks to complete this feature.",
            takeaways: [
              "NextJS dynamic routing came in handy here in order to load the correct profile page based on the user's ID, as well as editing the profile page. Fetching complex data on the server with the correct custom type was challenging , but mission was accomplished.",
            ],
          },
          {
            title: "Content Overview Pages (Home)",
            description:
              "The first thing you see when you load the site, consisting of a center area displaying paginated links to recent content.  Sidebars contain previews of content not selected at the time, as well as popular posts of other types.",
            goal: "Using the momentum I'd gained from working on the auth and profile pages, and identifying the similarities between some of the elements on the profile page as well as projects I've done before, design the DOM, and set up a sorting and pagination system.",
            result:
              "Leveraging the power of Prisma's ability to use raw sql queries, and using the URLSearchparams and useSearchParams features of HTML and React, I was able to set up a system that allowed users to sort by date, popularity, and other factors, as well as paginate through the content.  I completed it rather quickly and even added some animation to the page using framer motion.  I especially am fond of the group cards that fade in and then cascade outward.  Using query-strings, I was able to make the page dynamic and responsive to user input.",
            takeaways: [
              "Framer motion used in spurts is a great way to spice up the look of a page, but overdoing it can be distracting. The ability to query data on the server and then send it to the client is a powerful tool that can be used to make a page dynamic, fast, and save on resources.  Following the pattern of designing the HTML first, then adding the dynamic elements, is a good way to keep the project organized and my workflow on track.",
            ],
          },
          {
            title: "AUdio Player",
            description:
              "A site wide audio-player that allows users to listen to audio content while they browse the site.",
            goal: "To create a site-wide audio player that allows users to listen to audio content while they browse the site.",
            result:
              "Using a Context Provider, the <audio /> HTML API, and a custom hook, I was able to create a site-wide audio player that allows users to listen to audio content while they browse the site.  The player is responsive and can be controlled from any page on the site.  ",
            takeaways: ["use context"],
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
        role: "Content Overview Pages, Profile Pages, Audio Player, Auth and Onboarding System",
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
            takeaways: [
              "Integrating AI into a Q&A platform opens up new ways to provide real-time, accurate answers.",
            ],
          },
          {
            title: "Interactivity and User Engagement System",
            description:
              "Users can earn badges, follow others, and interact with questions and answers. Popular questions and active users are displayed.",
            goal: "To create an interactive system that encourages engagement.",
            result:
              "The badge system and user activity features were implemented, increasing user engagement and interaction.",
            takeaways: [
              "Gamification through badges and following systems creates stronger user retention.",
            ],
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
            takeaways: [
              "Developers can stay organized and track their growth by documenting their progress.",
            ],
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
