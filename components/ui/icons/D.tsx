import IconWrapper from "./IconWrapper";
import React from "react";

const D = (props: any) => {
  return (
    <svg
      {...props}
      width="190"
      height="238"
      viewBox="0 0 190 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="95" cy="119.458" rx="95" ry="114.458" fill="#C9C9C9" />
      <rect y="0.25" width="59.375" height="237.5" fill="white" />
    </svg>
  );
};

export default IconWrapper(D);
