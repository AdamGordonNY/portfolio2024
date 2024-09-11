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
    <header className="sticky top-0 z-50 mb-10 flex justify-center">
      <nav className="custom-responsive-width z-50 flex h-16 items-center justify-between capitalize text-white-900 max-md:w-full md:w-[500px] ">
        {buttons.map((btn) => (
          <NavButton key={btn.text} text={btn.text} route={btn.route} />
        ))}
      </nav>
    </header>
  );
}
