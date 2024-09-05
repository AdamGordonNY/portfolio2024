import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CaseStudyButton = ({ title, href }: { title: string; href: string }) => {
  const router = useRouter();
  return (
    <Button
      className="p-[3px] relative font-satoshi"
      onClick={() => router.push(`${href}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg  " />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </Button>
  );
};

export default CaseStudyButton;
