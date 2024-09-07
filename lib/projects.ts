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
      "A Social Media platform for developers to share their knowledge and organize gatherings",
    cardImage: "images/devtodayslanted.svg",
    images: ["/images/devtoday-wide.svg", "/images/devtoday.svg"],

    tech: [
      "nextjs",
      "tailwind",
      "prisma",
      "supabase",
      "typescript",
      "uploadthingy",
      "socket.io",
      "framer-motion",
    ],
    links: {
      repo: "https://github.com/AdamGordonNY/DevTodayAdamsVersion",
      liveSite: "https://adam-gordon.info",
      portfolioPath: "/projects/devtoday",
    },
    features: [
      { id: 1, title: "ClerkJS", purpose: "Authentication" },
      {
        id: 2,
        title: "",
        purpose: "",
      },
    ],
    summary:
      "DevToday is a modern , efficient site for developers to create content to share with each other on.  Users can join or create groups, where they can upload Audio in the form of podcasts, create written posts to share knowledge, and organize real life meetups to network and get offline every now and then. Besides these features, users can easily search for relevant subjects, get notifications when new content is posted, and have a true , low stress social media app in which to share information with each other.",
    mission:
      "The mission of the project was to give Developers a space to socialize and network, and share information and connect with each other.  User Profile's and the Follow/Like/Share system and the ability to filter content by specific criteria should give a stress free, personally tailored social media experience that is not as intrusive as typical social media but can be used to enrich your network and skills as a developer.",
    process: [
      {
        id: 1,
        title: "Planning",
        description:
          "To start the project, we set up an Asana board in order to make sure the requirements for each ticket were defined, and that our work didn't overlap.  We met once a day for about an hour, 5 days a week to check in on our progress, discuss what we did and what we planned to do next, and how we solved certain problems.   We needed to choose where and what kind of DB to use/host, uploaded files, what authentication system to use , Clerk or NextAuth.  We needed to decide what packages made sense to add to our project, and how to best leverage NextJS14 to make our idea work as well as possible.  We had to prioritize what the logical order to build our project in, and how we can get what we needed to do done between the 2 of us within about 9 weeks.  ",
      },
      {
        id: 2,
        title: "Tech Stack",
        description:
          "For Authentication, we chose ClerkJS over NextAuth.  ClerkJS offers premade components that can be customized and themed to the developer's desire, offers integrations with most social login platforms and many options for customization where necessary.  It's session management and user metadata is both scalable, practical, and enables proper onboarding with the ability to set metadata flags.  We decided to use Shadcn-UI for some components, and customized some of our own as well.  The ability to edit these components at their roots to adhere to the design was efficient and integrates well with framer motion to create modern, visually stunning but not distracting components.  We used the CMDK package to searching, set up a seperate socket.io server for notifications, and we used Prisma as an ORM that is integrated with Supabase's PostgreSQL database.  React Hook Form with Zod Validations were agreed upon, which also integrate well with Prisma's ORM and Server Actions that perform CRUD operations server side.  Prisma's querying system allows for fairly intuitive searches for most things, and the ability to use Raw SQL queries for more complicated fetches.  Cacheing and Suspense boundaries are used to reduce the amount of data needed to be fetched, and Suspense boundaries signal to the user that the site is loading on client components.  Server components load extremely fast",
      },
      {
        id: 3,
        title: "Stage 1 Development:Theme and Layout",
        description:
          "Stage 1 involved setting up the theme and the layout, as well as shared configurations such as Prettier and ESLint settings so our 2 person team would be in sync.  My partner Darshin handled our theming and dark/light mode, and I handled setting up our Authentication layout and functionality. ",
      },
      {
        id: 4,
        title: "Stage 2 Development",
        description:
          "After we did this, I moved on to the profile layout and my partner handled the outer layout frame, including the navbar and search features.  I handled the profile UI and the edit form, while my partner handled the content pages for posts, groups, and meetups, and notification related items",
      },
      {
        id: 5,
        title: "Stage 3 Development",
        description:
          "After creating the cards that would display content in our tabs on both the profile and home page, I then set up a system for filtering and pagination using query-strings and URLSearchParams, as well as made sure the content layout was filled no matter what tab was selected. As the final major part of the site, I developed the podcast detail section and integrated an Audio Player that uses the <audio /> browser API and allows users to listen to podcasts while also browsing through posts and other areas of the site.",
      },
    ],
    result: {
      outcome:
        "The project was successfully done to about 95 % completion in the target time frame, with only a few features not implemented.  The most impressive parts of the application as it stands are the ultra fast queries done in raw sql, the Audio Player which can be used even when navigating to other parts of the site, and our Google Maps integration.  When our socket.io server launches, and we optimize for SEO, the project will have met our target goals.",
      goals:
        "Despite being on a tight deadline and various real-life interruptions, we were able to complete almost every feature in the requirements document by the end of our 9 week allotment.",
      learning:
        "We had a very good working chemistry as a team, and despite real life interruptions such as illness, vacation, and general distractions, we got about 95 % done with our tasks on our Asana board.  Our Project manager was impressed with the Audio API implementation and our use of framer motion in certain spots, especially the animation on the group card.  Key takeaways for me personally were using Audio API with the context provider, Seamlessly integrating filtering using searchParams and query strings to filter content appropriately.  Using framer motion added just enough flare to the project to polish the look.  It would have been great to have completed the socket.io portion of the site and done an SEO optimization scan on the project, we ran out of time for that though.  Since the project ended I was able to fix a few minor bugs, get our view like and follow metrics to work well across different parts of the site, and feel comfortable using all these tools again in any context. I look forward to putting the finishing touches on the socket.io portion.",
      challenges:
        "Some challenges were setting up webhooks to synchronize users and their profiles with the database and make sure authentication and authorization flows worked as intended.  Another challenge was being able to use our Podcast feature while browsing the site, and another challenge was how to notify users when their content is liked/shared/viewed. ",
      nextSteps: [""],
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
      outcome: "",
      learning: "",
      challenges: "",
      nextSteps: [""],
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
    features: [{ id: 1, title: "", purpose: "" }],
    links: {
      repo: "https://github.com/AdamGordonNY/git_note",
      liveSite: "https://gitnote.adam-gordon.info",
      portfolioPath: "/projects/gitnote",
    },
    cardImage: "/images/gitnoteslanted.svg",
    tech: ["nextjs", "tailwind", "mongo", "supabase", "typescript"],
    summary: "",
    mission: "",
    process: [],
    result: {
      outcome: "",
      learning: "",
      challenges: "",
      nextSteps: [""],
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
  medium: "",
  location: "New York, NY",
  resume: "/resume.pdf",
  discord: "ID: 588407310976679940 Username: _adam_g",
};
