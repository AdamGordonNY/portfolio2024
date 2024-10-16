import React from "react";

const ShadcnUI = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="128" height="128" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  );
};

export default ShadcnUI;
