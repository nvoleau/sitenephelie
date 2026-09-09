import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vendee: {
          50: "#f6f5f0",
          100: "#eae6d9",
          200: "#d3cbae",
          300: "#b7a97e",
          400: "#9c8c5c",
          500: "#7c6e45",
          600: "#5f5536",
          700: "#463f29",
          800: "#312c1d",
          900: "#1c1912",
        },
        terracotta: {
          50: "#fdf3ef",
          100: "#fbe1d6",
          200: "#f3bea6",
          300: "#e79572",
          400: "#d96f45",
          500: "#c2552d",
          600: "#9d4224",
          700: "#79331d",
          800: "#4f2113",
          900: "#2c120a",
        },
        forest: {
          50: "#f1f5f0",
          100: "#dde7da",
          200: "#b9cfb2",
          300: "#93b487",
          400: "#6f9760",
          500: "#527842",
          600: "#3f5e33",
          700: "#334c2a",
          800: "#243620",
          900: "#141f12",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
