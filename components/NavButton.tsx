"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NavButton = ({ text }: { text: string }) => {
  const router = useRouter();
  const pathName = usePathname();
  let route = `/${text}`;
  let active: boolean;
  const className = `text-white-900 hover:text-white-900 focus:text-white-900 font-satoshi paragraph-regular rounded-2xl`;
  switch (text) {
    case "about":
      route = "/about";
      pathName === route ? (active = true) : (active = false);
      break;
    case "projects":
      route = "/projects";
      pathName === route ? (active = true) : (active = false);
      break;
    case "skills":
      route = "/skills";
      pathName === route ? (active = true) : (active = false);
      break;
    case "experience":
      route = "/experience";
      pathName === route ? (active = true) : (active = false);
      break;
    case "contact":
      route = "/contact";
      pathName === route ? (active = true) : (active = false);
      break;
    default:
      route = "/";
      pathName === route ? (active = true) : (active = false);
      break;
  }
  useEffect(() => {});
  return (
    <Button
      onClick={() => router.push(route)}
      className={cn(className + `mq450:max-w-[450px] w-[450px]`)}
    >
      {text}
    </Button>
  );
};

export default NavButton;
