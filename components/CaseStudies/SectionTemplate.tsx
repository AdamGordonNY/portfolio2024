import React from "react";

const SectionTemplate = ({
  topic,
  content,
}: {
  topic: string;
  content: string;
}) => {
  return (
    <div className="md:paragraph-regular body-regular flex w-full flex-1 items-center justify-center font-satoshi  text-white-900">
      <div className="custom-responsive-width my-10 flex max-md:flex-col max-md:gap-y-5 max-md:px-3">
        <span className="base-regular max-mq450:body-regular basis-1/2 justify-start align-top text-white-900">
          {topic}
        </span>
        <p className="body-regular flex flex-col gap-y-4">{content}</p>
      </div>
    </div>
  );
};

export default SectionTemplate;
