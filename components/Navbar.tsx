"use client";

import NavButton from "./NavButton";
const buttons = [
  { text: "about", route: "/about" },
  { text: "projects", route: "/projects" },
  { text: "skills", route: "/skills" },
  { text: "social", route: "/social" },
];
export function Navbar() {
  return (
    <header className=" z-50 mb-10 flex min-w-[400px] flex-1 justify-center">
      <nav className="z-50 flex  h-16 items-center justify-between capitalize text-white-900 max-md:w-full md:w-[500px] ">
        {buttons.map((btn) => (
          <NavButton key={btn.text} text={btn.text} route={btn.route} />
        ))}
      </nav>
    </header>
  );
}
