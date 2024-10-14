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
    <header className="custom-responsive-width sticky top-0 z-50  flex w-full min-w-full flex-1 justify-center bg-dark-200">
      <nav className="custom-responsive-width z-50 flex h-16 w-full items-center justify-between bg-dark-200 capitalize text-white-900 max-md:w-full md:w-[500px]">
        {buttons.map((btn) => (
          <NavButton key={btn.text} text={btn.text} route={btn.route} />
        ))}
      </nav>
    </header>
  );
}
