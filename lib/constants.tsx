import { IconHome, IconMail } from "@tabler/icons-react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

export const techStacks = [];
export const items = [
  {
    title: "about",
    href: "/about",
    icon: <IconHome size={50} className="dark:stroke-white-500" />,
  },
  {
    title: "projects",
    href: "/projects",
    icon: (
      <BsPersonWorkspace
        size={50}
        className="dark:fill-white-500 dark:stroke-white-500"
      />
    ),
  },
  {
    title: "skills",
    href: "/skills",
    icon: (
      <GiSkills
        size={50}
        className="dark:fill-white-500 dark:stroke-white-500"
      />
    ),
  },
  {
    title: "blog",
    href: "/posts",
    icon: (
      <FaBlog size={50} className="dark:fill-white-500 dark:stroke-white-500" />
    ),
  },
];
export const tabs = [
  {
    title: "Home",
    icon: <IconHome size={50} className="dark:stroke-white-500" />,
    href: "/",
  },
  {
    title: "Projects",
    icon: (
      <BsPersonWorkspace
        size={50}
        className="dark:fill-white-500 dark:stroke-white-500"
      />
    ),
    href: "/projects",
  },
  {
    title: "Background",
    icon: (
      <MdWorkHistory
        size={50}
        className="dark:fill-white-500 dark:stroke-white-500"
      />
    ),
    href: "/background",
  },
  {
    title: "Skills",
    icon: (
      <GiSkills
        size={50}
        className="dark:fill-white-500 dark:stroke-white-500"
      />
    ),
    href: "/skills",
  },
  {
    title: "Contact",
    icon: <IconMail size={50} className="dark:stroke-white-500" />,
    href: "/contact",
  },
];
