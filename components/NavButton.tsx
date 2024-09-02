"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import indicator from "@/public/images/indicator.svg";
const NavButton = ({ text }: { text: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(pathname === `/${text}`);
    if (text === "home" && pathname === "/") setActive(true);
  }, [pathname, text]);

  const route = `/${text}`;

  const className = `hover:text-white-900 focus:text-white-900 font-satoshi paragraph-regular rounded-2xl capitalize text-2xl text-white-800 font-satoshi text-center`;

  return (
    <Button
      onClick={() => router.push(route)}
      className={cn(className + `mq450:max-w-[450px] w-[450px] flex flex-col`)}
    >
      {text}
      {active && (
        <Image
          src={indicator}
          alt="indicator"
          className="w-4 h-4 fill-white-500"
        />
      )}
    </Button>
  );
};

export default NavButton;
