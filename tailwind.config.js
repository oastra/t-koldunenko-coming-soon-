/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}", // required for @layer in typography.css
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fixel Display"', "sans-serif"],
        text: ['"Fixel Text"', "sans-serif"],
      },
      colors: {
        mainBlue: "#092E84",
        background: "#FBFDFC",
        blackCustom: "#000924",
        grayCustom: "#C3C3C3",
        additionalBlue: "#5FA0FF",
        white: "#FFFFFF",
      },
      backgroundImage: {
        mainGradient:
          "linear-gradient(90deg, #000924 0%, #092B79 35%, #00D4FF 98%)",
        gradient10:
          "linear-gradient(90deg, rgba(2, 0, 36, 0.10) 0%, rgba(9, 9, 121, 0.10) 35%, rgba(0, 212, 255, 0.10) 98%)",
        portfolioBlock:
          "linear-gradient(180deg, #E7E9EB 0%, rgba(9, 82.8, 132, 0.05) 100%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // This allows base styles to apply to raw elements like h1/p
  },
};

/*

Tailwind Class	Value (px)
gap-1	4px
gap-2	8px
gap-3	12px
gap-4	16px
gap-5	20px
gap-6	24px
gap-7	28px
gap-8	32px



Breakpoint	Suggested Size	Tailwind	Clamp (Responsive)
Mobile	36px	text-[2.25rem]	clamp(2.25rem, 5vw, 3rem)
md	48px	text-[3rem]	clamp(2.5rem, 4vw, 3rem)
lg	64px	text-[4rem]	clamp(3rem, 5vw, 4rem)
xl	80–96px	text-[5rem] or more	clamp(3.5rem, 6vw, 6rem) or text-[6rem]

<768px → text-2xl

≥768px (md) → text-4xl

≥1024px (lg) → text-6xl

≥1280px (xl) → text-7xl

Breakpoint	Prefix	Min Width	Common Devices
sm	sm:	640px	Small tablets (e.g., iPhone Plus)
md	md:	768px	Tablets
lg	lg:	1024px	Laptops
xl	xl:	1280px	Large laptops / desktops
2xl	2xl:	1536px	Large/ultrawide screens

*/
