export const buttons = [
  {
    name: "Sketch",
    description: "Sketch button for your website",

    component: (
      <button className="border-black bg-white text-black rounded-md border px-4 py-2 text-sm transition duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
        Sketch
      </button>
    ),
  },
  {
    name: "Simple",
    description: "Elegant button for your website",
    component: (
      <button className="border-neutral-300 bg-neutral-100 text-neutral-500 rounded-md border px-4 py-2 text-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
        Simple
      </button>
    ),
  },
  {
    name: "Invert",
    description: "Simple button that inverts on hover",
    component: (
      <button className="bg-teal-500 text-white hover:bg-white hover:text-black border-transparent hover:border-teal-500 rounded-md border-2 px-8 py-2 font-bold transition duration-200">
        Invert it
      </button>
    ),
  },
  {
    name: "Tailwindcss Connect",
    description: "Button featured on Tailwindcss Connect website",
    showDot: false,
    component: (
      <button className="bg-slate-800 shadow-zinc-900 text-white group relative inline-block cursor-pointer rounded-full p-px text-xs font-semibold leading-6  no-underline shadow-2xl">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="bg-zinc-950 ring-white/10 relative z-10 flex items-center space-x-2 rounded-full px-4 py-0.5 ring-1 ">
          <span>{`Tailwind Connect`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    ),
  },
  {
    name: "Gradient",
    description: "Simple Gradient button with rounded corners",
    component: (
      <button className="from-blue-500 to-blue-600 text-white focus:ring-blue-400 rounded-full bg-gradient-to-b px-8 py-2 transition duration-200 hover:shadow-xl focus:ring-2">
        Gradient
      </button>
    ),
  },
  {
    name: "Unapologetic",
    description: "Unapologetic button with perfect corners",
    component: (
      <button className="border-black bg-transparent text-black dark:border-white group relative  border px-8 py-2 transition duration-200">
        <div className="bg-yellow-300 absolute -bottom-2 -right-2 -z-10 size-full transition-all duration-200 group-hover:bottom-0 group-hover:right-0" />
        <span className="relative">Unapologetic</span>
      </button>
    ),
  },
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="relative p-[3px]">
        <div className="from-indigo-500 to-purple-500 absolute inset-0 rounded-lg bg-gradient-to-r" />
        <div className="bg-black text-white  hover:bg-transparent group  relative rounded-[6px] px-8 py-2 transition duration-200">
          Lit up borders
        </div>
      </button>
    ),
  },
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="focus:ring-slate-400 focus:ring-offset-slate-50 relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-offset-2">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="bg-slate-950 text-white inline-flex size-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl">
          Border Magic
        </span>
      </button>
    ),
  },

  {
    name: "Brutal",
    description: "Brutal button for your website",
    component: (
      <button className="border-black dark:border-white  bg-white text-black border-2 px-8 py-0.5 text-sm uppercase shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        Brutal
      </button>
    ),
  },
  {
    name: "Favourite",
    description: "Favourite button for your website",
    component: (
      <button className="bg-black text-white  hover:bg-black/[0.8] rounded-md px-8 py-2 text-sm font-semibold hover:shadow-lg">
        Favourite
      </button>
    ),
  },
  {
    name: "Outline",
    description: "Outline button for your website",
    component: (
      <button className="border-neutral-600 text-black bg-white hover:bg-gray-100 rounded-xl border px-4 py-2 transition duration-200">
        Outline
      </button>
    ),
  },
  {
    name: "Shimmer",
    description: "Shimmer button for your website",
    showDot: false,
    component: (
      <button className="animate-shimmer border-slate-800 text-slate-400 focus:ring-slate-400 focus:ring-offset-slate-50 inline-flex h-12 items-center justify-center rounded-md border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
        Shimmer
      </button>
    ),
    code: `
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>
  
        // tailwind.config.js code
        {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
        }
      `,
  },
  {
    name: "Next.js Blue",
    description: "Next.js Blue button for your website",
    component: (
      <button className="text-white rounded-md bg-[#0070f3] px-8 py-2 font-light shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
        Next.js Blue
      </button>
    ),
  },
  {
    name: "Next.js White",
    description: "Next.js White button for your website",
    component: (
      <button className="rounded-md bg-[#fff] px-8 py-2 font-light text-[#696969] shadow-[0_4px_14px_0_rgb(0,0,0,10%)] transition duration-200 ease-linear hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]">
        Next White
      </button>
    ),
  },
  {
    name: "Spotify",
    description: "Spotify button for your website",
    component: (
      <button className="text-white rounded-full bg-[#1ED760] px-12 py-4 font-bold uppercase tracking-widest transition-colors duration-200 hover:scale-105 hover:bg-[#21e065]">
        Spotify
      </button>
    ),
  },
  {
    name: "Backdrop Blur",
    description: "Outline button for your website",
    showDot: false,
    component: (
      <button className="text-black border-black bg-white/[0.2] rounded-md border px-4 py-2 text-sm backdrop-blur-sm transition duration-200 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]">
        Backdrop blur
      </button>
    ),
  },
  {
    name: "Playlist",
    description: "Playlist button for your website",
    component: (
      <button className="text-black bg-transparent hover:text-white dark:text-neutral-200 rounded-full px-12 py-4 font-bold uppercase tracking-widest shadow-[inset_0_0_0_2px_#616467] transition duration-200 hover:bg-[#616467]">
        Playlist
      </button>
    ),
  },
  {
    name: "Figma",
    description: "Figma button for your website",
    component: (
      <button className="bg-black text-white duration-400 rounded-lg px-6 py-2 font-bold transition hover:-translate-y-1">
        Figma
      </button>
    ),
  },
  {
    name: "Figma Outline",
    description: "Figma Outline button for your website",
    component: (
      <button className="bg-transparent border-black dark:border-white dark:text-white text-black duration-400 rounded-lg border px-6 py-2 font-bold shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1">
        Figma Outline
      </button>
    ),
  },
  {
    name: "Top Gradient",
    description: "Top Gradient button for your website",
    showDot: false,
    component: (
      <button className="bg-slate-700 text-white hover:shadow-white/[0.1] border-slate-600 relative rounded-full border px-8 py-2 text-sm transition duration-200 hover:shadow-2xl">
        <div className="from-transparent via-teal-500 to-transparent absolute inset-x-0 -top-px mx-auto  h-px w-1/2 bg-gradient-to-r shadow-2xl" />
        <span className="relative z-20">Top gradient</span>
      </button>
    ),
  },
];
