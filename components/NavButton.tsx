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
    if (text === "blog") setActive(pathname === "/posts");
    else setActive(pathname === `/${text}`);
  }, [pathname, text]);

  const className = `hover:text-white-900 focus:text-white-900 font-satoshi rounded-2xl capitalize text-2xl text-white-800 small-regular md:body-regular text-center`;

  return (
    <>
      {active ? (
        <BackgroundGradient
          containerClassName="flex items-center justify-center md:w-[80px] flex-1"
          animate={false}
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
          className={cn(className + `flex flex-col`)}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default NavButton;
