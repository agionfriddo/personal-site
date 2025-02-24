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
      colors: {
        primary: {
          light: "#F5F9FF",
          DEFAULT: "#4A90E2",
          dark: "#1A2028",
        },
        accent: {
          light: "#A8D1FF",
          DEFAULT: "#4A90E2",
          dark: "#2B6CB0",
        },
        neutral: {
          light: "#F7FAFF",
          DEFAULT: "#D8E6F6",
          dark: "#2D3748",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "#4A90E2",
              "&:hover": {
                color: "#2B6CB0",
              },
            },
            code: {
              color: "#4A90E2",
              "&::before": { content: '""' },
              "&::after": { content: '""' },
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
