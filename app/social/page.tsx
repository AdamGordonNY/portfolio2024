import EmbeddedPage from "@/components/EmbeddedPage";
import React from "react";

const Page = () => {
  return (
    <div className="mq450:w-[375px] flex min-w-full flex-col font-satoshi">
      <EmbeddedPage />
    </div>
  );
};

export default Page;
