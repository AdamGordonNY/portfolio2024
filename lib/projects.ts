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
      "A Social Media platform for developers to share their knowledge, organize meetups, and share audio content. Incorporates CMDK for searching, Prisma as an ORM, NextJS server actions for fast queries and data fetching, Shadcn-UI and Framer Motion for a crisp UI with just enough animations so that it adds something to the site without going overboard, the Google Maps API for location based meetups, and ClerkJS for authentication.  The site is ",
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
          "To start the project, We needed to decide what packages made sense to add to our project, and how to best leverage NextJS14 to make our idea work as well as possible.  We had to prioritize what the logical order to build our project in, and how we can get what we needed to do done between the 2 of us within about 9 weeks.  ",
        steps: [
          {
            step: 1,
            description:
              "We set up an Asana board in order to make sure the requirements for each ticket were defined, and that our work didn't overlap.",
          },
          {
            step: 2,
            description:
              "We met once a day for about an hour, 5 days a week to check in on our progress, discuss what we did and what we planned to do next, and how we solved certain problems. ",
          },
          {
            step: 3,
            description:
              "We needed to choose where and what kind of DB to use/host, uploaded files, what authentication system to use , Clerk or NextAuth.",
          },
          {
            step: 4,
            description:
              "After the initial steps, we delegated responsibilities and got to work. I took care of, respectively and chronologically, the Auth/Onboarding System first, then moved to the profile pages, both editing and viewing them and functionalities associated like follows.  After completing the profile page work, I made our front facing landing page which also functions as the main page to browse content.  Unique, complex sql queries with extremely fast retrieval were used to grab the data needed for the metrics, and the data was then passed to the front end to be displayed. My last task during our 9 week period of teamwork, was to do the Audio content pages. I'm proud of the how this turned out, which can be used even when navigating to other parts of the site, and uses the <audio /> browser API.  Using the Audio API with the context provider, we were able to create a seamless experience for users to listen to podcasts while also browsing through posts and other areas of the site.",
          },
        ],
      },
      {
        id: 2,
        title: "Tech Stack Choice",
        purpose:
          "We needed to decide what packages made sense to add to our project, and how to best leverage NextJS14 to make our idea work as well as possible.  We had to prioritize what the logical order to build our project in, and how we can get what we needed to do done between the 2 of us within about 9 weeks.",
        steps: [
          {
            step: 1,
            description:
              "For Authentication, we chose ClerkJS over NextAuth.  ClerkJS offers premade components that can be customized and themed to the developer's desire, offers integrations with most social login platforms and many options for customization where necessary.  It's session management and user metadata is both scalable, practical, and enables proper onboarding with the ability to set metadata flags.",
          },
          {
            step: 2,
            description:
              "We decided to use Shadcn-UI for some components, and customized some of our own as well.  The ability to edit these components at their roots to adhere to the design was efficient and integrates well with framer motion to create modern, visually stunning but not distracting components.",
          },
          {
            step: 3,
            description:
              "We used the CMDK package to searching, set up a seperate socket.io server for notifications, and we used Prisma as an ORM that is integrated with Supabase's PostgreSQL database.  React Hook Form with Zod Validations were agreed upon, which also integrate well with Prisma's ORM and Server Actions that perform CRUD operations server side.  Prisma's querying system allows for fairly intuitive searches for most things, and the ability to use Raw SQL queries for more complicated fetches.",
          },
          {
            step: 4,
            description:
              "In order to take full advantage of NextJS's SSR capabilities, we decided to set up server actions with Prisma's ORM in order for faster loading times, with the data being fetched quickly on the server and taken in by client components, if there were any.  Cacheing and Suspense boundaries are used to reduce the amount of data needed to be fetched, and Suspense boundaries signal to the user that the site is loading on client components.",
          },
          {
            step: 5,
            description:
              "Prisma is a powerful ORM that integrates well with Supabase's PostgreSQL database.  It's querying system allows for fairly intuitive searches for most things, and the ability to use Raw SQL queries for more complicated fetches. The DB could be seeded with data easily, and it integrates with Zod validations and React Hook Form well.  Prisma's server actions perform CRUD operations server side, and the ORM is very easy to use and understand.",
          },
        ],
      },
      {
        id: 2,
        title: "ClerkJS Authentication",
        purpose:
          "We wanted a reliable, secure authentication system that could be adapted to work with Prisma, required little setup, and could be customized to our needs.  ClerkJS was the best choice for this because it offers premade components that can be customized and themed to the developer's desire, offers integrations with most social login platforms and many options for customization where necessary.  It's session management and user metadata is both scalable, practical, and enables proper onboarding with the ability to set metadata flags to make sure our onboarding flow was followed as we designed it to be.",
        steps: [
          {
            step: 1,
            description:
              "Using NPM, installing the @clerk/nextjs package, and follow the instructions to set up the ClerkJS project. This involved creating a seperate route group (auth) inside the app folder, where I creaed a catchall sign-in and sign-up route signifying the intent with double brackets '[[...catchall]]'.",
          },
          {
            step: 2,
            description:
              "Added the SignIn and SignUp components to the page.tsx files on these routes, as well as wrapping the entire app in the ClerkProvider component.",
          },
          {
            step: 3,
            description:
              "Set up a layout for this route, as it's noticeably different and also incorporates the onboarding flow into this route group.",
          },
          {
            step: 4,
            description:
              "Created an onboarding context to manage the onboarding flow, and set up the metadata flags to make sure the onboarding flow was followed as we designed it to be. The step was modeled as part of our User schema and was set up to be a number that would increment as the user completed each step of the onboarding process. When complete, the metadata flag would be set to true, and the user would be redirected to the home page. Middleware needed to be configured to check if the user was onboarding, and if so, redirect them to the next step in the onboarding process, if not send them to the home page.  ",
          },
        ],
      },
      {
        id: 4,
        title: "Profile Pages",
        purpose:
          "Every Social Media site needs users, and users need profile pages to identify themselves, and to be able to see what they've done on the site.  The profile pages needed to be able to be edited by the user, and to be able to be viewed by other users.  The profile pages needed to be able to show the user's posts, podcasts, and groups they are in, and to show the user's followers and who they are following.",
        steps: [
          {
            step: 1,
            description:
              "Using NPM, installing the @clerk/nextjs package, and follow the instructions to set up the ClerkJS project. This involved creating a seperate route group (auth) inside the app folder, where I creaed a catchall sign-in and sign-up route signifying the intent with double brackets '[[...catchall]]'.",
          },
        ],
      },
      {
        id: 5,
        title: "Audio Player",
        purpose:
          "The Audio Player can be used even when navigating to other parts of the site, and uses the <audio /> browser API. Using the Audio API with the context provider, we were able to create a seamless experience for users to listen to podcasts while also browsing through posts and other areas of the site.  The Audio Player is a key feature of the site, and it was important to get it right.",
        steps: [
          {
            step: 1,
            description:
              "The Audio player integrates the current standard HTML <audio> API, so the first step was to look over the documentation regarding how to use this.  ",
          },
          {
            step: 2,
            description: "",
          },
          { step: 3, description: "" },
        ],
      },
    ],
    summary:
      "DevToday is a modern , efficient site for developers to create content to share with each other on.  Users can join or create groups, where they can upload Audio in the form of podcasts, create written posts to share knowledge, and organize real life meetups to network and get offline every now and then. Besides these features, users can easily search for relevant subjects, get notifications when new content is posted, and have a true , low stress social media app in which to share information with each other.",
    mission:
      "The mission of the project was to give Developers a space to socialize and network, and share information and connect with each other.  User Profile's and the Follow/Like/Share system and the ability to filter content by specific criteria should give a stress free, personally tailored social media experience that is not as intrusive as typical social media but can be used to enrich your network and skills as a developer.",

    result: {
      outcome:
        "The project was successfully done to about 95 % completion in the target time frame, with only a few features not implemented.  The most impressive parts of the application as it stands are the ultra fast queries done in raw sql, the Audio Player which can be used even when navigating to other parts of the site, and our Google Maps integration.  When our socket.io server launches, and we optimize for SEO, the project will have met our target goals.",
      goals:
        "After the initial steps, we delegated responsibilities and got to work - 9 weeks was a relatively short deadline for a project of this size, and we made a strong effort to deliver in time. I took care of, respectively and chronologically, the Auth/Onboarding System first, then moved to the profile pages, both editing and viewing them and functionalities associated like follows.  After completing the profile page work, I made our front facing landing page which also functions as the main page to browse content.  Unique, complex sql queries with extremely fast retrieval were used to grab the data needed for the metrics, and the data was then passed to the front end to be displayed. My last task during our 9 week period of teamwork, was to do the Audio content pages. I'm proud of the how this turned out, which can be used even when navigating to other parts of the site, and uses the <audio /> browser API.  Using the Audio API with the context provider, we were able to create a seamless experience for users to listen to podcasts while also browsing through posts and other areas of the site.",
      learning:
        "We had a very good working chemistry as a team, and despite real life interruptions such as illness, vacation, and general distractions, we got about 95 % done with our tasks on our Asana board.  Our Project manager was impressed with the Audio API implementation and our use of framer motion in certain spots, especially the animation on the group card.  Key takeaways for me personally were using Audio API with the context provider, Seamlessly integrating filtering using searchParams and query strings to filter content appropriately.  Using framer motion added just enough flare to the project to polish the look.  It would have been great to have completed the socket.io portion of the site and done an SEO optimization scan on the project, we ran out of time for that though. I also learned alot about how framer motion works and what you can do with it, and finding a balance in being fancy and being functional.  The animations added are fairly subtle, but effective.  I especially like how the users unfurl on the Group Card. This project was a great experience to work with another talented, motivated developer on a complex project with a supervisor who was very supportive and helpful in explaining some lesser practiced areas of the project.  I gained alot of knowledge and most importantly, confidence in my ability to work on a team and deliver a complex NextJS project.",
      challenges:
        "Some challenges were setting up webhooks to synchronize users and their profiles with the database and make sure authentication and authorization flows worked as intended.  Another challenge was being able to use our Podcast feature while browsing the site, and another challenge was how to notify users when their content is liked/shared/viewed, in which we set up a demo socket.io server that needs to be reconstituted in order to work with the extended version I've continued to work on.  The biggest challenge was the time constraint, as we had to get the project done in 9 weeks, and we were about 95 % done with the project when the time was up.  We also had to make sure that the site was responsive and looked good on all devices, and that the site was accessible to all users.  We also had to make sure that the site was secure, and that the site was optimized for SEO.  We also had to make sure that the site was fast, and that the site was easy to use.",
      nextSteps: [
        { step: 1, description: "Reconstitute the socket.io server" },
        {
          step: 2,
          description:
            "Optimize for SEO and use analytical tools to assist in doing so.",
        },
      ],
    },
    teamMembers: [
      {
        name: "Adam Gordon",
        role: "Content Overview Pages + Profile Pages + Audio Player",
      },
      {
        name: "Darshin Von Parijs",
        role: "Theme + Layout + Content Pages",
      },
      {
        name: "Brandon Etter",
        role: "Project Manager and Code Reviewer",
      },
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
