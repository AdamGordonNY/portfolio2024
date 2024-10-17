import { DevSkills } from "@/lib/types";
import React from "react";
import { renderIcon } from "@/lib/utils";
import { Badge } from "../ui/badge";
const Skills = ({ devSkills }: { devSkills: DevSkills }) => {
  return (
    <>
      <section className="custom-responsive-width w-full p-2 font-satoshi">
        {devSkills.categories.map((category, index) => (
          <div key={index} className="category space-y-10 text-center">
            <h1 className="md:modern-h1 modern-h3 mx-auto my-2 text-center text-white-900 ">
              {category.category}
            </h1>
            {/* Use a grid with responsive columns */}
            <div className="grid w-full grid-cols-2 gap-4 p-4 text-white-900 md:grid-cols-3 lg:grid-cols-4">
              {category.skills.map(
                (skill, skillIndex) =>
                  skill.icon && (
                    <div
                      className="flex flex-col items-center justify-center p-4"
                      key={skillIndex}
                    >
                      {renderIcon(skill.name.toLowerCase())}
                      <Badge
                        className="mt-2 border border-white-800 text-center text-sm capitalize text-white-800"
                        variant="outline"
                      >
                        {skill.name}
                      </Badge>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
