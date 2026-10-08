import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#29443B",
        sage: "#748C7D",
        sand: "#E8DED0",
        ivory: "#FAF8F3",
        terracotta: "#B86F58",
        charcoal: "#26312D",
        mist: "#EEF1EC"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(38,49,45,.08)"
      }
    }
  },
  plugins: []
};

export default config;
