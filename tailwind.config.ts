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
      // Brand colors from Haki & Ink guidelines
      colors: {
        brand: {
          navy:       "#182E4B", // Deep Navy — primary headings, logo, dark surfaces
          green:      "#7FB082", // Sage Green — accents, links, highlights
          white:      "#FFFFFF",
          "light-gray": "#F2F2F2", // Light Gray — backgrounds, card surfaces
          charcoal:   "#333333", // Dark Charcoal — body text
          // Dark mode variants
          "dark-bg":  "#0F0F0E",
          "dark-surface": "#1A1A18",
          "dark-border":  "#2A2A28",
        },
      },
      // Brand fonts from guidelines
      fontFamily: {
        heading: ["var(--font-roboto-slab)", "Georgia", "serif"],   // Roboto Slab Bold
        body:    ["var(--font-montserrat)", "system-ui", "sans-serif"], // Montserrat Regular
      },
      // Typography scale (from PRD section 8.2)
      fontSize: {
        "display":  ["3rem",   { lineHeight: "1.15", letterSpacing: "-0.03em" }], // 48px H1
        "title":    ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.02em" }], // 36px H2
        "subtitle": ["1.75rem", { lineHeight: "1.3"  }],                           // 28px H3
        "body":     ["1rem",   { lineHeight: "1.75" }],                            // 16px body
        "caption":  ["0.875rem", { lineHeight: "1.5" }],                           // 14px
      },
      // Spacing tokens (base unit 4px, from PRD section 8.3)
      spacing: {
        "4":  "4px",
        "8":  "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
      },
      maxWidth: {
        content:   "65ch",    // Article prose max-width
        container: "1200px",  // Page container max-width
      },
      borderRadius: {
        card: "4px",
      },
      boxShadow: {
        // Layered, color-tinted shadows (not flat shadow-md)
        card:       "0 2px 4px rgba(24, 46, 75, 0.06), 0 4px 12px rgba(24, 46, 75, 0.08)",
        "card-hover": "0 4px 8px rgba(24, 46, 75, 0.1), 0 8px 24px rgba(24, 46, 75, 0.12)",
        elevated:   "0 8px 16px rgba(24, 46, 75, 0.1), 0 16px 40px rgba(24, 46, 75, 0.12)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
