import type { Config } from "tailwindcss";

// Tokens Néphélie — valeurs reprises telles quelles du design system fourni
// dans le handoff (_ds/.../tokens/*.css), voir CLAUDE.md pour la source.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#17160F",
          700: "#2E2C24",
          500: "#5A564A",
          300: "#8C8778",
          200: "#B8B2A2",
          100: "#DCD6C8",
        },
        paper: {
          DEFAULT: "#FFFDF9",
          100: "#F8F4EC",
          200: "#F0EADF",
          300: "#E4DBCB",
        },
        bocage: {
          900: "#20302A",
          700: "#33473C",
          600: "#3F5647",
          500: "#4E6A58",
          100: "#DCE4DC",
        },
        terre: {
          600: "#A9552F",
          500: "#BE6838",
          100: "#F4E3D6",
        },
        or: {
          500: "#B79256",
        },
        line: {
          DEFAULT: "#DCD4C4",
          soft: "#EEE7DA",
          strong: "#BFB6A3",
        },
        info: { 600: "#4A6472", 100: "#E2EAEE" },
        success: { 600: "#4C6B4F", 100: "#E2EBDF" },
        warning: { 600: "#9A7325", 100: "#F6EBD3" },
        danger: { 600: "#9B3A2B", 100: "#F5E0DA" },
      },
      fontFamily: {
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["64px", { lineHeight: "1.02", letterSpacing: "-1.6px", fontWeight: "300" }],
        display: ["46px", { lineHeight: "1.08", letterSpacing: "-1px", fontWeight: "300" }],
        h1: ["36px", { lineHeight: "1.12", letterSpacing: "-.6px", fontWeight: "400" }],
        h2: ["28px", { lineHeight: "1.18", letterSpacing: "-.4px", fontWeight: "400" }],
        h3: ["22px", { lineHeight: "1.25", letterSpacing: "-.2px", fontWeight: "500" }],
        lead: ["19px", { lineHeight: "1.6", fontWeight: "300" }],
        body: ["16px", { lineHeight: "1.65" }],
        "body-sm": ["14px", { lineHeight: "1.55" }],
        caption: ["13px", { lineHeight: "1.45" }],
        eyebrow: ["11px", { lineHeight: "1.3", letterSpacing: ".22em", fontWeight: "500" }],
        price: ["20px", { lineHeight: "1.2", fontWeight: "500" }],
        "price-lg": ["30px", { lineHeight: "1.2", fontWeight: "500" }],
        "big-number": ["44px", { lineHeight: "1", fontWeight: "300" }],
      },
      borderRadius: {
        // sm(2px)/DEFAULT(4px)/md(6px)/full(9999px) correspondent déjà aux
        // tokens r-xs/r-sm/r-md/r-pill — seul r-lg (10px, modales/plates
        // photo) diffère du lg par défaut de Tailwind (8px).
        lg: "10px",
      },
      boxShadow: {
        raise: "0 1px 2px rgba(23,22,15,.04), 0 6px 18px -8px rgba(23,22,15,.12)",
        float: "0 2px 6px rgba(23,22,15,.06), 0 18px 40px -16px rgba(23,22,15,.22)",
      },
      maxWidth: {
        container: "1180px",
      },
      backgroundImage: {
        "hero-scrim":
          "linear-gradient(to top, rgba(23,22,15,.74) 0%, rgba(23,22,15,.20) 55%, rgba(23,22,15,.36) 100%)",
        "photo-scrim": "linear-gradient(to top, rgba(23,22,15,.55) 0%, rgba(23,22,15,0) 62%)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.22,.61,.36,1)",
        entrance: "cubic-bezier(.16,.84,.44,1)",
        exit: "cubic-bezier(.4,0,1,1)",
      },
      transitionDuration: {
        120: "120ms",
        220: "220ms",
        420: "420ms",
        700: "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
