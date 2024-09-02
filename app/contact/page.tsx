import Contact from "@/components/Contact";

import React from "react";

const Page = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-normal bg-transparent">
      <Contact />
      <div className="body-regular bottom-0 flex w-full justify-between dark:text-white-500 ">
        <span>2024 - by Adam Gordon</span>
        <span>adam@adam-gordon.info</span>
      </div>
    </div>
  );
};

export default Page;
