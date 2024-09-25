import React from "react";
import { Separator } from "../ui/separator";
interface ItemizedTemplateProps {
  task: {
    title: string;
    description: string;
    goal: string;
    result: string;
    takeaways: string;
  };
}

const ItemizedTemplate = ({ task }: ItemizedTemplateProps) => {
  return (
    <section className="md:base-regular body-regular mq450:w-full mq450:text-center flex flex-1 items-center justify-between font-satoshi text-white-900 md:w-full md:px-2">
      <div className="custom-responsive-width my-10 flex flex-1 flex-col items-center justify-center gap-y-5 max-md:px-3">
        <div className="flex w-full flex-col gap-y-8 md:flex-row">
          {/* Title */}
          <h3 className="modern-h3 max-mq450:body-regular items-center text-left font-inter text-gradient max-md:text-center md:w-1/5">
            {task.title}
          </h3>

          {/* Description */}
          <p className="base-regular max-md:body-regular flex flex-col gap-y-4 text-center md:w-4/5 md:text-left">
            {task.description}
          </p>
        </div>
        {/* Goal, Result, and Takeaways */}
        <div className="body-regular mq450:text-center flex w-full flex-col gap-y-8 text-center align-text-top md:flex-row md:items-start">
          {/* Goal */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end max-md:text-center">
              Goal
            </h3>
            <p className="px-2 text-left">{task.goal}</p>
          </div>

          {/* Result */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end max-md:text-center">
              Result
            </h3>
            <p className="px-2 text-left">{task.result}</p>
          </div>

          {/* Takeaways */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end max-md:text-center">
              Takeaways
            </h3>
            <p className="px-2 text-left">{task.takeaways}</p>
          </div>
        </div>
        <Separator orientation="horizontal" />
      </div>
    </section>
  );
};

export default ItemizedTemplate;
