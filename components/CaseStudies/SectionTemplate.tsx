import React from "react";
import { Process } from "@/lib/types";

const SectionTemplate = ({
  topic,
  content,
  procedure,
}: {
  topic: string;
  content?: string;
  procedure?: Process[];
}) => {
  return (
    <section className="md:paragraph-regular body-regular mq450:w-full mq450:flex-col flex w-full flex-1 items-center justify-center font-satoshi   text-white-900 ">
      <div className="custom-responsive-width  mq450:flex-col  my-10 flex items-center justify-between gap-y-5 max-md:px-3 md:px-1 ">
        {" "}
        <span className="modern-h3 max-mq450:body-regular b  align-top font-inter text-white-900">
          {" "}
          {topic}
        </span>
        <p className="body-regular mq450:small-regular flex flex-col gap-y-4 text-left">
          {content}
        </p>
      </div>
    </section>
  );
};

export default SectionTemplate;
