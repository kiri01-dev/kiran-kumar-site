import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#3B5BA5",
          light: "#5272BC",
          dark: "#2A4280",
        },
      },
    },
  },
  plugins: [],
};

export default config;
