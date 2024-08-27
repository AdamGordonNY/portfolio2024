import React from "react";

const NavButton = ({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: React.JSX.Element;
}) => {
  return (
    <button className="dark:border-white/[0.2] text-black dark:text-white modern-paragraph-medium relative rounded-full border border-neutral-200 px-4 py-2">
      <span>Login</span>
      <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
    </button>
  );
};

export default NavButton;
