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
    if (text === "home" && pathname === "/") setActive(true);
    if (text === "social") setActive(pathname === "/social");
    else setActive(pathname === `/${text}`);
  }, [pathname, text]);

  const className = `hover:text-white-900 focus:text-white-900 font-satoshi max-md:body-regular  rounded-2xl capitalize md:text-2xl text-white-800 paragraph-regular items-center max-md:w-1/4 text-center`;

  return (
    <>
      {active ? (
        <BackgroundGradient
          containerClassName="flex items-center text-center  justify-center max-md:body-regular max-md:w-1/4 md:w-[80px] max-md:w-fit flex-1"
          animate
        >
          <Button
            onClick={() => router.push(route)}
            className={cn(className + `flex-col`)}
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
