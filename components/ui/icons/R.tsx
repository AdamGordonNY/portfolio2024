import IconWrapper from "@/components/ui/icons/IconWrapper";
import React from "react";

const R = (props: any) => {
  return (
    <svg
      width="192"
      height="227"
      viewBox="0 0 192 227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41.3528 21.6834C145.236 21.6834 198.695 32.0717 97.3795 110.976L175 214.275"
        stroke="#C9C9C9"
        stroke-width="41.7516"
      />
      <path
        d="M0.5 0.673355L42.2483 0.805562V214.634H0.5V0.673355Z"
        fill="white"
      />
    </svg>
  );
};

export default IconWrapper(R);
