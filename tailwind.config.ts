import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "10%, 90%": {
            transform: "translate3d(-0.5px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(1px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-2px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(2px, 0, 0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
