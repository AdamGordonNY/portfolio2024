"use client";
import { CaseStudy } from "@/lib/types";
import { cn } from "@/lib/utils";
interface ProjectCardProps {
  caseStudy: CaseStudy;
  className?: string;
}
export default function ContentCard({
  caseStudy,
  className,
}: ProjectCardProps) {
  return (
    <div className="group/card w-full min-w-[390px] max-w-[600px] font-satoshi">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card md:h-[600px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          ` bg-[url(/images/${caseStudy.cardImage})] bg-cover ${className}`
        )}
      >
        <div className="group-hover/card:bg-black absolute left-0 top-0 size-full opacity-60 transition duration-300"></div>

        <div className="text content">
          <h2 className="modern-h3 w-full text-center text-white-900">
            {caseStudy.title}
          </h2>
          <p className="relative z-10 my-4 text-sm font-normal text-lightsteelblue">
            {caseStudy.description}
          </p>
        </div>
      </div>
    </div>
  );
}
