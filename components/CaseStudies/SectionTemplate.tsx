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
    <section className="md:paragraph-regular body-regular mq450:w-full flex w-4/5 flex-1 items-center justify-center font-satoshi  text-white-900">
      <div className="custom-responsive-width my-10 flex flex-col items-center justify-center gap-y-5 max-md:px-3 md:px-5">
        {" "}
        <span className="modern-h3 max-mq450:body-regular basis-1/2  align-top text-white-900">
          {" "}
          {topic}
        </span>
        <p className="body-regular mq450:small-regular flex flex-col gap-y-4 text-center">
          {content}
        </p>
      </div>
    </section>
  );
};

export default SectionTemplate;
