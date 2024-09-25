import { Process } from "@/lib/types";
import React from "react";

interface ItemizedTemplateProps {
  process: Process;
}

const ItemizedTemplate = ({ process }: ItemizedTemplateProps) => {
  return (
    <section className="md:paragraph-regular body-regular mq450:w-full mq450:text-left flex flex-1 items-center justify-center font-satoshi text-white-900 md:w-full md:px-2">
      <div className="custom-responsive-width my-10 flex flex-col items-center justify-center gap-y-5 max-md:px-3 ">
        <div className="flex w-full items-center gap-y-3 max-md:flex-col max-md:text-center">
          {/* Title of the Process */}
          <h3 className="modern-h3 max-mq450:body-regular align-text-top  font-inter text-gradient md:w-1/5">
            {process.title}
          </h3>

          {/* Purpose of the Process */}
          <p className="body-regular mq450:base-regular mq450:text-center flex flex-col gap-y-4 text-left md:w-4/5 ">
            {process.purpose}
          </p>

          {/* Steps */}
        </div>
        <div className="body-regular  mq450:text-center flex flex-col gap-y-8 md:flex-row md:text-left">
          <h3 className="mq450:text-center md:modern-h3 gradient-heading-backward w-1/5 text-left font-inter">
            Steps
          </h3>
          <ul className="body-regular mq450:small-regular flex w-full list-inside list-decimal flex-col gap-y-4 md:w-4/5 ">
            {process.steps.map((step) => (
              <li key={step.step} className="px-2 md:w-4/5">
                {step.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ItemizedTemplate;
