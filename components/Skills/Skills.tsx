import { DevSkills } from "@/lib/types";
import React from "react";
import { renderIcon } from "@/lib/utils";
import { Badge } from "../ui/badge";
const Skills = ({ devSkills }: { devSkills: DevSkills }) => {
  return (
    <>
      <section className="custom-responsive-width w-full font-satoshi p-2">
        {devSkills.categories.map((category, index) => (
          <div key={index} className="category text-center">
            <h1 className="md:modern-h1 modern-h3 mx-auto my-2 text-center text-white-900 md:text-left">
              {category.category}
            </h1>
            {/* Use a grid with responsive columns */}
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4 text-white-900">
              {category.skills.map(
                (skill, skillIndex) =>
                  skill.icon && (
                    <div
                      className="flex flex-col items-center justify-center p-4"
                      key={skillIndex}
                    >
                      {renderIcon(skill.name.toLowerCase())}
                      <Badge
                        className="mt-2 text-sm text-center capitalize border border-white-800 text-white-800"
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
