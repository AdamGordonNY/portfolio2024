import React from "react";
import github from "@/public/github.svg";
import Image from "next/image";
import Link from "next/link";
const SocialButton = ({ social, url }: { social: string; url: string }) => {
  return (
    <Link
      className="flex items-center justify-center gap-x-2.5 px-5 py-2.5"
      href={url}
    >
      <Image src={github} alt="github" width={24} height={34} />
      <span className="paragraph-regular">{social}</span>
    </Link>
  );
};

export default SocialButton;
