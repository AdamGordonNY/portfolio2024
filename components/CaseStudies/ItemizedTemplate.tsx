import { Process } from "@/lib/types";
import React from "react";

interface ItemizedTemplateProps {
  process: Process;
}

const ItemizedTemplate = ({ process }: ItemizedTemplateProps) => {
  return (
    <section className="md:paragraph-regular body-regular mq450:w-full flex w-4/5 flex-1 items-center justify-center font-satoshi text-white-900">
      <div className="custom-responsive-width my-10 flex flex-col items-center justify-center gap-y-5 max-md:px-3 md:px-5">
        {/* Title of the Process */}
        <h3 className="modern-h3 max-mq450:body-regular basis-1/2 align-top text-white-900">
          {process.title}
        </h3>

        {/* Purpose of the Process */}
        <p className="body-regular mq450:base-regular flex flex-col gap-y-4 text-center">
          {process.purpose}
        </p>

        {/* Steps */}

        <div className="body-regular mq450:small-regular flex flex-col gap-y-4 text-left">
          <span className="body-regular">Steps</span>
          <ul className="body-regular mq450:small-regular flex list-inside list-decimal flex-col gap-y-4 text-left">
            {process.steps.map((step) => (
              <li key={step.step} className="px-2 text-start">
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
