import React from "react";
import {
  IconBrandReact,
  IconSchool,
  IconBrandLaravel,
  IconBrandVue,
  IconBriefcase,
  IconBrandNextjs,
} from "@tabler/icons-react";

export const testimonials = [
  {
    name: "Adrian Hajdin",
    description: null,
    img: "/adrianendorsement.png",
    idx: 1,
  },
  {
    name: "Moses Cowan - MNC Consulting",
    description:
      "...He trained a multitude of new interns on the framework, and before he left to pursue full employment, made sure that the staff taking over knew what they were doing. He was a great communicator with both the interns and myself. He also learned the ReactJS library and laid the groundwork for many students that followed him. Additionally, Adam also stayed on as a guide to some interns even after his official departure and has demonstrated a capacity to work well with team members, learn new skills on the job, and be a leader in his time working for this firm. He would be a great addition to any team, and I have no doubt he will impress, given the chance to thrive.",
    img: null,
    idx: 2,
  },
  {
    name: "Riva Kantowitz - Founder",
    description:
      "...Adam was able to clearly explain the different options we had in a way that we could understand, and he worked through challenges with our partners, to create this for our organization.  We have not deployed it live yet due to unrelated complications with other partners ,I found Adam as an honest, hardworking individual who would be an asset to any organization.... ",
    img: null,
    idx: 3,
  },
] as const;

export const experiencesData = [
  {
    title: "Javascript Mastery Masterclass",
    location: "Remote",
    description:
      "Completed 500+ hours of training in NextJS w/ TypeScript, React, and TailwindCSS, in a professional setting.",
    icon: React.createElement(IconBrandReact),
    date: "2024",
  },
  {
    title: "NextJS 14 Pro Mastery Certified - JavaScript Mastery",
    location: "Online",
    description:
      "Certified in NextJS 14 Pro Mastery by JavaScript Mastery with DevOverflow Project",
    icon: React.createElement(IconBrandNextjs),
    date: "2023",
  },
  {
    title: "Freelance Web Developer",
    location: "Long Island, NY",
    description:
      "Creating Projects both for myself and for clients, using React(with TS), Next.js, Laravel/InertiaJS (using Vue3 as a UI) and Tailwind CSS.",
    icon: React.createElement(IconBrandLaravel),
    date: "December 2022-Present",
  },
  {
    title: "Lead Front-End Developer, MNC Consulting LLC (Internship)",
    location: "Brooklyn, NY",
    description:
      "Learning React on my own, working with Google Firebase, built a Real Estate website as both the project manager, and trainer of new interns.",
    icon: React.createElement(IconBrandReact),
    date: "2022-2023 (12 months)",
  },
  {
    title: "Full-Stack Developer",
    location: "DIAM International, Melville, NY",
    description:
      "Inherited a Nuxt2 w/ Laravel API and MySQL database, and built on the work of my predecessor, adding new features, and fixing bugs.",
    icon: React.createElement(IconBrandVue),
    date: "July 2022-December 2022",
  },
  {
    title: "B.S. in Computer Proramming and Information Systems",
    location: "SUNY Farmingdale, NY",
    description:
      "Graduated in in 2022 with a 3.31 Cumulative GPA, 3.87 in my major. Returned as an adult student in 2019.",
    icon: React.createElement(IconSchool),
    date: "2019-2022",
  },
  {
    title: "Account Manager, Renewal By Andersen Long Island",
    location: "Farmingdale, NY",
    description:
      "Starting from entry level, I worked my way up to Account Manager, where I was functioning as the last point of contact between our in home customers and our sales representatives who went out for consultations.  I frequently received awards for leading the office in various performance metrics.",
    icon: React.createElement(IconBriefcase),
    date: "2016-2018",
  },
] as const;

export const projectsData = [
  {
    title: "Dev Overflow - A Stack Overflow Clone enhanced with AI",
    description:
      "A NextJS 13 Project, using the OpenAI API - Hosted on a VPS with Nginx and PM2",
    tags: [
      "Next.JS",
      "OpenAI",
      "Tailwind",
      "App Router",
      "TypeScript",
      "Server Actions",
      "shadcn-ui",
      "MongoDB",
      "Webhooks",
      "Nginx",
    ],
    imageUrl: "/devoverflow.png",
    siteURL: "https://devoverflow.gordon-webdesign.com",
    githubURL: "https://github.com/agordon123/devoverflow.git",
  },
  {
    title: "Car Showcase",
    description:
      "A Next 13 TypeScript Project, using the Imagin Studio API to display cars, and their details.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Imagin Studio API"],
    imageUrl: "/carshowcase.png",
    siteURL: "https://car-showcase-theta-six.vercel.app/",
    githubURL: "https://github.com/agordon123/carshowcase2",
  },
  {
    title: "Threads Clone",
    description: "A pared down version of the new hit social media site.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Shadcn-UI",
      "Clerk JS",
      "Mongo DB",
    ],
    imageUrl: "/threadsclone.png",
    siteURL: "https://threadz-eosin.vercel.app/",
    githubURL: "https://github.com/agordon123/threadz",
  },
  {
    title: "Learning Management System",
    description:
      "NextJS 13 project, creating a Udemy like page for learning and creating courses ",
    tags: [
      "Next.JS",
      "Prisma",
      "PlanetScale",
      "Tailwind",
      "App Router",
      "TypeScript",
      "Server Actions",
      "Zod Resolver",
      "shadcn-ui",
    ],
    imageUrl: "/LearningManagementSystem.png",
    siteURL: "https://lms-smokey-project.vercel.app",
    githubURL: "https://github.com/agordon123/lms-project.git",
  },
  {
    title: "Radical Flexibility Fund's payment processing site",
    description:
      "Using NextJS13, Supabase, Stripe, TailwindCSS, this site provides a way for the Radical Flexibility Fund to accept donations.",
    tags: [
      "Next.JS",
      "Supabase",
      "Stripe",
      "Tailwind",
      "App Router",
      "TypeScript",
      "Server Actions",
      "shadcn-ui",
    ],
    imageUrl: "/radicalflexfund.png",
    siteURL: "https://radicalflexfundnext.vercel.app",
    githubURL: "https://github.com/agordon123/radicalflexfundnext.git",
  },
] as const;

export const skillsData = [
  "HTML",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript/TypeScript",
  "React/Vue3.0",
  "Next.js/Nuxt.js",
  "Node.js",
  "Redux",
  "Git",
  "PostgreSQL / MYSQL",
  "MongoDB",
  "Laravel",
  "Inertia.js",
  "PHP",
  "Docker",
  "Google Firebase",
  "Android Development w/ Java",
  "Java 16",
  ".NET Core",
  "C#",
  "Python",
  "REST API",
  "VPS Configuration/Linux",
] as const;
export const certs = [
  {
    title: "NextJS 14 Pro Mastery Certified - JavaScript Mastery",
    issuer: "JavaScript Mastery",
    image:
      "https://my.certifyme.online/static/fileStore/img/926/10546/221644_badge_1200A2.png",
  },
  {
    title: "Javascript Mastery Masterclass",
    issuer: "JavaScript Mastery",
    image:
      "https://my.certifyme.online/static/fileStore/img/926/6408/315427_badge_06DF5C.png",
  },
] as const;

export const SecondarySkillsData = [] as const;
