import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row px-2 py-5">
      <div className="flex flex-row gap-x-10"></div>
    </div>
  );
};
const NavButton = ({ children }: { children: React.ReactNode }) => {
  return <button className="bg-transparent text-white-900"> {children}</button>;
};
export default Header;
