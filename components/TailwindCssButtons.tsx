"use client";
import React from "react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
export const GradientButton = ({
  text,
  className,
  handleNavigate,
  icon,
}: {
  text: string;
  className: string;
  handleNavigate?: () => void;
  icon?: string;
}) => {
  const sendMail = () => {
    window.location.href = `mailto: ${text}`;
  };
  const renderIcon = () => {
    switch (icon?.toLowerCase()) {
      case "github":
        return (
          <IconBrandGithub
            size={20}
            className="fill-white-900 stroke-white-900"
          />
        );
      case "linkedin":
        return (
          <IconBrandLinkedin
            size={20}
            className="fill-white-900 stroke-white-900"
          />
        );
      case "email":
        return (
          <IconMail
            size={20}
            className="fill-white-900 stroke-white-900"
            onClick={() => sendMail()}
          />
        );
    }
  };
  return (
    <div
      className={`${className} from-gradient-start  to-gradient-end text-white-900 inline-flex h-16 w-[225px] items-center justify-center gap-x-[10px] rounded-full bg-gradient-to-b px-8 py-1 text-center transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400`}
    >
      <button
        type="button"
        onClick={handleNavigate}
        className="inline-flex max-h-full items-center justify-between "
      >
        <span className="mr-2">{text}</span>

        {icon && renderIcon()}
      </button>
    </div>
  );
};
