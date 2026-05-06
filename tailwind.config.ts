import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-subtle": "var(--color-primary-subtle)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)"
      },
      maxWidth: {
        content: "1100px"
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
        mono: "var(--font-heading)"
      }
    }
  },
  plugins: []
};

export default config;
