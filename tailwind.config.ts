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
        // From --mv-trellis-color-primary / secondary in the reference site CSS
        site: {
          primary:    "#2F4C4C", // dark teal — headings, nav, buttons
          secondary:  "#CA6C68", // terracotta rust — accents, links, hover
          blush:      "#F0DCD5", // --mv-trellis-color-background-accent
          dark:       "#1a2626", // footer background
          text:       "#1e1e1e",
          muted:      "#6b7280",
          border:     "#e5e0db",
          bg:         "#ffffff",
          "bg-soft":  "#faf8f6",
        },
        // Haki & Ink brand (kept for logo tinting)
        brand: {
          navy:  "#182E4B",
          green: "#7FB082",
        },
      },
      fontFamily: {
        // Century Gothic feel — --mv-trellis-font-body
        body:    ['"Century Gothic"', "CenturyGothic", "AppleGothic", "sans-serif"],
        // Futura feel — --mv-trellis-font-heading
        heading: ["Futura", '"Trebuchet MS"', "Arial", "sans-serif"],
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
        card:        "0 2px 8px rgba(47,76,76,0.08), 0 1px 3px rgba(47,76,76,0.05)",
        "card-hover":"0 6px 20px rgba(47,76,76,0.14), 0 2px 6px rgba(47,76,76,0.08)",
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
