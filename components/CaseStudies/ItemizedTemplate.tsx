import React from "react";

interface ItemizedTemplateProps {
  topic: string;
  content: {
    id: number;
    description: string;
  }[];
}
const ItemizedTemplate = ({ topic, content }: ItemizedTemplateProps) => {
  return <section>ItemizedTemplate</section>;
};

export default ItemizedTemplate;
