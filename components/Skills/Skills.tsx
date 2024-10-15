import { DevSkills } from "@/lib/types";
import React from "react";
import { renderIcon } from "@/lib/utils";
const Skills = ({ devSkills }: { devSkills: DevSkills }) => {
  return (
    <>
      <section className="custom-responsive-width flex w-full flex-col p-2">
        {devSkills.categories.map((category, index) => (
          <div key={index} className="category text-center">
            <p className="modern-h1 mx-auto my-2 text-center font-inter text-white-900 md:text-left">
              {category.category}
            </p>
            <ul className="flex w-full justify-evenly">
              {category.skills.map((skill, skillIndex) => (
                <li className="list-inside" key={skillIndex}>
                  {renderIcon(skill.toLowerCase())}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
