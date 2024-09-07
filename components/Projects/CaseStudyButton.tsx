import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CaseStudyButton = ({ title, href }: { title: string; href: string }) => {
  const router = useRouter();
  return (
    <Button
      className="relative p-[3px] font-satoshi"
      onClick={() => router.push(`${href}`)}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500  " />
      <div className="bg-black group  relative rounded-[6px]  px-8 py-2 text-white-900 transition duration-200 hover:bg-transparent">
        {title}
      </div>
    </Button>
  );
};

export default CaseStudyButton;
