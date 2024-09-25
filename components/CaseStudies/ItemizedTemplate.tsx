import { Process } from "@/lib/types";
import React from "react";

interface ItemizedTemplateProps {
  process: Process;
}

const ItemizedTemplate = ({ process }: ItemizedTemplateProps) => {
  return (
    <section className="md:base-regular body-regular mq450:w-full mq450:text-center flex flex-1 items-center justify-between font-satoshi text-white-900 md:w-full md:px-2">
      <div className="custom-responsive-width my-10 flex flex-1 flex-col items-center justify-center gap-y-5 max-md:px-3">
        {/* Title and Purpose */}
        <div className="flex w-full flex-col gap-y-3 md:flex-row md:items-start md:justify-between">
          {/* Title of the Process */}
          <h3 className="modern-h3 max-mq450:body-regular items-center text-left font-inter text-gradient max-md:text-center md:w-1/5">
            {process.title}
          </h3>

          {/* Purpose of the Process */}
          <p className="base-regular max-md:body-regular flex flex-col gap-y-4 text-center md:w-4/5 md:text-left">
            {process.purpose}
          </p>
        </div>

        {/* Steps */}
        <div className="body-regular mq450:text-center flex w-full flex-col gap-y-8 text-center align-text-top md:flex-row md:items-start">
          {/* This empty div aligns with the title on large screens */}
          <div className="hidden md:block md:w-1/5"></div>

          {/* Steps and List */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end max-md:text-center">
              Steps
            </h3>
            <ul className="body-regular mq450:small-regular flex list-inside list-disc flex-col gap-y-4">
              {process.steps.map((step) => (
                <li key={step.step} className="px-2 text-left">
                  {step.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemizedTemplate;
