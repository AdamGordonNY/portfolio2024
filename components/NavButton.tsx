"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";

const NavButton = ({ text, route }: { text: string; route: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (route === pathname || (text === "home" && pathname === "/")) {
      setActive(true);
    } else if (pathname.startsWith("/projects/")) {
      const projectRoutes = [
        "/projects/devtoday",
        "/projects/gitnote",
        "/projects/devoverflow",
      ];
      console.log(pathname);
      setActive(projectRoutes.includes(route));
    } else {
      setActive(false);
    }
  }, [pathname, route, text]);

  const className = `hover:text-white-900 focus:text-white-900 font-satoshi max-md:body-regular rounded-2xl capitalize md:text-2xl text-white-800 paragraph-regular items-center max-md:w-1/4 text-center`;

  return (
    <>
      {active ? (
        <BackgroundGradient
          containerClassName="flex items-center justify-center text-center max-md:w-1/4 md:w-[80px] flex-1"
          animate
        >
          <Button
            onClick={() => router.push(route)}
            className={cn(className + ` flex-col`)}
          >
            {text}
          </Button>
        </BackgroundGradient>
      ) : (
        <Button
          onClick={() => router.push(route)}
          className={cn(
            className + `items-center mx-auto flex text-white-500 flex-col`
          )}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default NavButton;
