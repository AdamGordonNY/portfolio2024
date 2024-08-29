import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SocialMediaButton } from "./SocialLinks";
const SocialButton = ({ social }: { social: SocialMediaButton }) => {
  const router = useRouter();

  return (
    <motion.button
      className="p-[3px] relative inline-flex py-2 px-2 my-2 items-center justify-center h-14 hover:scale-120"
      type="button"
      animate={{}}
    >
      {" "}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl h-14" />{" "}
      <Link href={social.href} className="flex flex-col">
        <div className="px-8 py-2 items-center justify-center flex  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          {social.icon}
          <span className="modern-paragraph-regular">{social.title}</span>
        </div>{" "}
      </Link>
    </motion.button>
  );
};

export default SocialButton;
