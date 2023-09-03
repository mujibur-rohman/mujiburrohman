import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ["washed-purple"]: {
          100: "#f0f0ff",
          200: "#e1e0ff",
          300: "#d3d1ff",
          400: "#c4c1ff",
          500: "#b5b2ff",
          600: "#918ecc",
          700: "#6d6b99",
          800: "#484766",
          900: "#242433",
        },
        ["washed-blue"]: {
          100: "#e1e7ff",
          200: "#c3d0ff",
          300: "#a4b8ff",
          400: "#86a1ff",
          500: "#6889ff",
          600: "#536ecc",
          700: "#3e5299",
          800: "#2a3766",
          900: "#151b33",
        },
        ["primary-blue"]: {
          100: "#cde1ff",
          200: "#9bc3ff",
          300: "#68a5ff",
          400: "#3687ff",
          500: "#0469ff",
          600: "#0354cc",
          700: "#023f99",
          800: "#022a66",
          900: "#011533",
        },
        ["primary-purple"]: {
          100: "#e2ccff",
          200: "#c699ff",
          300: "#a966ff",
          400: "#8d33ff",
          500: "#7000ff",
          600: "#5a00cc",
          700: "#430099",
          800: "#2d0066",
          900: "#160033",
        },
        ["neutral"]: {
          100: "#cdccd0",
          200: "#9a99a1",
          300: "#686672",
          400: "#353343",
          500: "#030014",
          600: "#020010",
          700: "#02000c",
          800: "#010008",
          900: "#010004",
        },
      },
    },
  },
  plugins: [],
};
export default config;
