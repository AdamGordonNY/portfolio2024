import React from "react";
import { Separator } from "../ui/separator";
interface ItemizedTemplateProps {
  task: {
    title: string;
    description: string;
    goal: string;
    result: string;
    takeaways: string[];
  };
}

const ItemizedTemplate = ({ task }: ItemizedTemplateProps) => {
  return (
    <section className="md:base-regular body-regular mq450:w-full mq450:text-center flex flex-1 items-center justify-between font-satoshi text-white-900 md:w-full md:px-2">
      <div className="custom-responsive-width my-10 flex flex-1 flex-col items-center gap-5 max-md:px-3">
        {/* Title and Description */}
        <div className="flex w-full flex-col gap-y-8 align-text-top md:flex-row">
          <h3 className="modern-h3 max-mq450:body-regular text-gradient-highlight text-wrap text-left font-inter max-md:text-center md:w-1/5">
            {task.title}
          </h3>

          <p className="base-regular max-md:body-regular flex flex-col gap-y-4 text-center md:w-4/5 md:text-left">
            {task.description}
          </p>
        </div>

        {/* Goal, Result, and Takeaways */}
        <div className="body-regular mq450:text-center my-2 flex w-full flex-col gap-y-8 py-2 text-left align-text-top md:flex-row md:items-start">
          {/* Goal */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end">
              Goal
            </h3>
            <p className="px-2 text-left">{task.goal}</p>
          </div>

          {/* Result */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end">
              Result
            </h3>
            <p className="px-2 text-left">{task.result}</p>
          </div>

          {/* Takeaways */}
          <div className="md:w-4/5">
            <h3 className="mq450:text-center modern-base-regular mb-4 text-left text-gradient-end">
              Takeaways
            </h3>
            <ul className="list-inside list-disc px-2 text-left">
              {task.takeaways.map((take, index) => (
                <li
                  key={index}
                  className="flex list-inside list-disc flex-col gap-y-2 text-left"
                >
                  {take}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator orientation="horizontal" className="my-2" />
      </div>
    </section>
  );
};

export default ItemizedTemplate;
