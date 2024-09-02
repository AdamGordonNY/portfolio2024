"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import indicator from "@/public/images/indicator.svg";
import { BackgroundGradient } from "./ui/background-gradient";
const NavButton = ({ text, route }: { text: string; route: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (text === "home" && pathname === "/") setActive(true);
    else setActive(pathname === `/${text}`);
  }, [pathname, text]);

  const className = `hover:text-white-900 focus:text-white-900 font-satoshi paragraph-regular rounded-2xl capitalize text-2xl text-white-800 font-satoshi text-center`;

  return (
    <>
      {active ? (
        <BackgroundGradient>
          <Button
            onClick={() => router.push(route)}
            className={cn(className + ` mq450:max-w-[450px] flex flex-col`)}
          >
            {text}
          </Button>
        </BackgroundGradient>
      ) : (
        <Button
          onClick={() => router.push(route)}
          className={cn(className + ` mq450:max-w-[450px] flex flex-col`)}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default NavButton;
