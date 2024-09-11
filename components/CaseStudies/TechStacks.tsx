import React from "react";
import NodeJS from "../ui/icons/NodeJS";
import {
  IconBrandHtml5,
  IconBrandGit,
  IconBrandGithub,
  IconBrandGithubCopilot,
  IconBrandNextjs,
  IconBrandAmazon,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandPrisma,
  IconBrandStripe,
  IconBrandStackoverflow,
  IconBrandFramerMotion,
} from "@tabler/icons-react";
export const TechStack = async ({ tech }: { tech: string }) => {
  const techCheck = () => {
    switch (tech) {
      case "nodejs":
        return <NodeJS className="size-5 md:size-11" />;
      case "html":
        return <IconBrandHtml5 className="size-5 md:size-11" />;
      case "git":
        return <IconBrandGit className="size-5 md:size-11" />;
      case "gitHub":
        return <IconBrandGithub className="size-5 md:size-11" />;
      case "copilot":
        return <IconBrandGithubCopilot className="size-5 md:size-11" />;
      case "nextjs":
        return <IconBrandNextjs className="size-5 md:size-11" />;
      case "amazon":
        return <IconBrandAmazon className="size-5 md:size-11" />;
      case "typescript":
        return <IconBrandTypescript className="size-5 md:size-11" />;
      case "tailwind":
        return <IconBrandTailwind className="size-5 md:size-11" />;
      case "laravel":
        return <IconBrandLaravel className="size-5 md:size-11" />;
      case "react":
        return <IconBrandReact className="size-5 md:size-11" />;
      case "prisma":
        return <IconBrandPrisma className="size-5 md:size-11" />;
      case "stripe":
        return <IconBrandStripe className="size-5 md:size-11" />;
      case "stackoverflow":
        return <IconBrandStackoverflow className="size-5 md:size-11" />;
      case "framer":
        return <IconBrandFramerMotion className="size-5 md:size-11" />;
      default:
        return (
          <div className="size-[50px] items-center justify-center rounded-full md:size-[100px]">
            {tech}
          </div>
        );
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-full">
        {techCheck()}
      </div>
    </div>
  );
};
const TechStacks = ({ tech }: { tech: string[] }) => {
  return (
    <div className="flex flex-col bg-dark-100">
      <div className="flex flex-row justify-between">
        {tech.map((tek) => (
          <TechStack key={tek} tech={tek} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
