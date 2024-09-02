"use client";

import NavButton from "./NavButton";
const buttons = [
  { text: "projects", route: "/projects" },
  { text: "skills", route: "/skills" },
  { text: "blog", route: "/posts" },
  { text: "contact", route: "/contact" },
];
export function Navbar() {
  return (
    <header className=" z-50 flex min-w-[400px] flex-1 justify-center">
      <nav className="z-50 flex  h-16 items-center justify-between capitalize text-white-900 max-md:w-full md:w-[500px] ">
        {buttons.map((btn) => (
          <NavButton key={btn.text} text={btn.text} route={btn.route} />
        ))}
      </nav>
    </header>
  );
}
