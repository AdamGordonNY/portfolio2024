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
} from "@tabler/icons-react";
export const TechStack = async ({ tech }: { tech: string }) => {
  const techCheck = () => {
    switch (tech) {
      case "NodeJS":
        return <NodeJS className="size-6 md:size-12" />;
      case "HTML5":
        return <IconBrandHtml5 className="size-6 md:size-12" />;
      case "Git":
        return <IconBrandGit className="size-6 md:size-12" />;
      case "GitHub":
        return <IconBrandGithub className="size-6 md:size-12" />;
      case "GitHub Copilot":
        return <IconBrandGithubCopilot className="size-6 md:size-12" />;
      case "NextJS":
        return <IconBrandNextjs className="size-6 md:size-12" />;
      case "Amazon":
        return <IconBrandAmazon className="size-6 md:size-12" />;
      case "TypeScript":
        return <IconBrandTypescript className="size-6 md:size-12" />;
      case "Tailwind":
        return <IconBrandTailwind className="size-6 md:size-12" />;
      case "Laravel":
        return <IconBrandLaravel className="size-6 md:size-12" />;
      case "React":
        return <IconBrandReact className="size-6 md:size-12" />;
      case "Prisma":
        return <IconBrandPrisma className="size-6 md:size-12" />;
      case "Stripe":
        return <IconBrandStripe className="size-6 md:size-12" />;
      case "StackOverflow":
        return <IconBrandStackoverflow className="size-6 md:size-12" />;
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
  return <div>TechStacks</div>;
};

export default TechStacks;
