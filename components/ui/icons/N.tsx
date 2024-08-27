import IconWrapper from "@/components/ui/icons/IconWrapper";
import React from "react";

const N = (props: any) => {
  return (
    <svg
      {...props}
      width="268"
      height="257"
      viewBox="0 0 268 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M266.696 17.4094L210.232 17.4094L156.225 239.577L212.688 239.577L266.696 17.4094Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M112.037 17.4092L55.5745 17.4092L0.413608 239.617L56.9257 239.619L112.037 17.4092Z"
        fill="white"
      />
      <path
        d="M126.559 17.4843L207.778 239.577L156.227 239.577L73.3746 17.4844L126.559 17.4843Z"
        fill="#C9C9C9"
      />
    </svg>
  );
};

export default IconWrapper(N);
