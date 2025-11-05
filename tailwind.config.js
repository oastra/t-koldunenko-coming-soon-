/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Green Scale
        primary: {
          100: "#27472e", // Darkest green
          80: "#3e6947",
          60: "#568b61",
          40: "#71ad7d",
          20: "#8ecf9b",
          10: "#d2f9da", // Lightest green
        },
        // Grey Scale
        grey: {
          100: "#212529", // Darkest grey/Black
          80: "#4d5154",
          60: "#7a7c7f",
          40: "#a6a8a9",
          20: "#d3d3d4",
          10: "#e9e9ea", // Lightest grey
        },
        // Blog Badge Colors - Pastel Palette
        badge: {
          yellow: "#fff7c4", // Exhibitions
          blue: "#dde8ff", // Interviews
          mint: "#d9fbfa", // Publications
          pink: "#ffddfe", // Workshops
          purple: "#e5ceff", // Art
        },
        // Base Colors
        white: "#ffffff",
        black: "#000000",
        bg: "#e4e4e4",
      },
      fontFamily: {
        display: ["var(--font-raleway)", "sans-serif"],
        text: ["var(--font-lexend)", "sans-serif"],
      },
      spacing: {
        "gutter-mobile": "16px",
        "gutter-tablet": "24px",
        "gutter-desktop": "24px",
        "margin-mobile": "20px",
        "margin-tablet": "32px",
        "margin-desktop": "100px",
      },
      screens: {
        mobile: "375px",
        tablet: "640px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
