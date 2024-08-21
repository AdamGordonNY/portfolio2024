import React from "react";

interface TemplateProps {
  title: string;
  description: string;
  image: string;
  link: string;
  summary: string;
  mission: string;
  challenge: string;
  process: {
    id: number;
    title: string;
    description: string;
  }[];

  result: string;
}
const Template = ({
  title,
  description,
  image,
  summary,
  mission,
  challenge,
  process,
  result,
}: TemplateProps) => {
  return <div className="w-full ">Template</div>;
};

export default Template;
