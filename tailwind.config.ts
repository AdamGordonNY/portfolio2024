const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      gradient: {
        end: "#C1A4FF",
        start: "#0026FF",
      },
      primary: {},
      accent: {
        secondary: "#FFBE62",
        primary: { light: "#0252CD", dark: "#428DFF" },
      },
      black: {
        200: "#151E2C",
        300: "#192333",
        400: "#778295",
      },
      dark: {
        200: "#191939",
        100: "#08080F",
      },

      white: {
        900: "#FFFFFF",
        800: "#F3F8FF",
        500: "#6F74A7",
      },
    },
  },
  fontFamily: {
    default: ["Inter", "FigTree"],
  },
  keyframes: {
    shimmer: {
      from: {
        backgroundPosition: "0 0",
      },
      to: {
        backgroundPosition: "-200% 0",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
