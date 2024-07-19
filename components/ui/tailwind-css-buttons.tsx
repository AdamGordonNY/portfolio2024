"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-60 w-full bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="dark:bg-dot-white/[0.1] bg-dot-black/[0.1] absolute inset-0" />
      <IconClipboard className="text-neutral-300 absolute right-2 top-2 hidden size-4 transition duration-200 group-hover/btn:block" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};
