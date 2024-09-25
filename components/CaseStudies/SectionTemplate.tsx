import React from "react";

const SectionTemplate = ({
  topic,
  content,
}: {
  topic: string;
  content?: string;
}) => {
  return (
    <section className="md:paragraph-regular body-regular flex w-full flex-col items-center justify-center font-satoshi text-white-900 md:px-2">
      <div className="my-10 flex w-full flex-col items-center justify-between gap-y-5 max-md:px-3 md:flex-row md:gap-x-2 ">
        {/* Topic */}
        <span className="modern-h3 px-1 text-center font-inter text-gradient md:w-1/5 md:text-left">
          {topic}
        </span>
        {/* Content */}
        <p className="body-regular mq450:text-center flex w-full flex-col gap-y-4 text-left md:w-4/5">
          {content}
        </p>
      </div>
    </section>
  );
};

export default SectionTemplate;
