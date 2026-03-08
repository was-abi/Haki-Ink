import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        site: {
          primary:      "#0A3200", // deep dark green — headings, nav, buttons
          secondary:    "#379634", // forest green — accents, links, hover
          mint:         "#74F2CE", // medium teal-green — highlights, badges
          "mint-light": "#7CFFCB", // bright mint — hover states
          "mint-pale":  "#BFFFF1", // lightest mint — backgrounds, soft areas
          dark:         "#061a00", // deeper dark green — footer background
          text:         "#0A3200", // body text
          muted:        "#4a6741", // muted green
          border:       "#c8f0e0", // light mint border
          bg:           "#ffffff",
          "bg-soft":    "#f4fff9", // very soft mint-white
        },
        // Haki & Ink brand (kept for logo tinting)
        brand: {
          navy:  "#182E4B",
          green: "#7FB082",
        },
      },
      fontFamily: {
        body:    ['"Inter"', "sans-serif"],
        heading: ['"Playfair Display"', "Georgia", "serif"],
      },
      fontSize: {
        "xs":   ["0.834rem",  { lineHeight: "1.5" }],
        "sm":   ["0.9375rem", { lineHeight: "1.6" }],
        "base": ["1rem",      { lineHeight: "1.625" }],
        "md":   ["1.125rem",  { lineHeight: "1.6" }],
        "lg":   ["1.25rem",   { lineHeight: "1.5" }],   // --mv-trellis-font-size
        "xl":   ["1.406rem",  { lineHeight: "1.4" }],   // --mv-trellis-font-size-lg
        "2xl":  ["1.75rem",   { lineHeight: "1.3" }],
        "3xl":  ["2.25rem",   { lineHeight: "1.2" }],   // --mv-trellis-h1-font-size
        "4xl":  ["2.75rem",   { lineHeight: "1.1" }],
      },
      maxWidth: {
        site:    "1200px",
        content: "720px",
      },
      boxShadow: {
        card:        "0 2px 8px rgba(10,50,0,0.08), 0 1px 3px rgba(10,50,0,0.05)",
        "card-hover":"0 6px 20px rgba(10,50,0,0.14), 0 2px 6px rgba(10,50,0,0.08)",
      },
      borderRadius: {
        card: "4px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
