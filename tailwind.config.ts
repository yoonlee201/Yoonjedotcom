import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      "krona-one": ["Krona One", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      beige: {
        DEFAULT: "hsl(44, 65%, 95%)",
        2: "hsl(30, 36%, 90%)",
      },
      blue: {
        DEFAULT: "hsl(230, 11%, 57%)",
        2: "hsl(230, 14%, 46%)",
      },
    },

    extend: {
      fontSize: {
        h1: [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: 600,
          },
        ],
        p: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: 400,
          },
        ],
        button: [
          "1.125rem",
          {
            lineHeight: "1",
            fontWeight: 600,
          },
        ],
        "button-sm": [
          "0.9375rem",
          {
            lineHeight: "1",
            fontWeight: 600,
          },
        ],
        navlink: [
          "0.9375rem",
          {
            lineHeight: "1",
            fontWeight: 500,
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
          },
        ],
        xs: [
          "0.625rem",
          {
            lineHeight: "1.5",
          },
        ],
      },
      borderRadius: {
        lg: ".5rem",
        md: "calc(.5rem - 2px)",
        sm: "calc(.5rem - 4px)",
      },
      borderWidth: {
        sm: "1px",
        md: "2px",
        lg: "4px",
      },
      padding: {
        "root-top": "5rem",
        "root-top-md": "4rem",
        "root-top-sm": "5rem",
        "root-inline": "5rem",
        "root-inline-sm": "2.5rem",
        "section-block": "4rem",
        "section-block-sm": "3rem",
        "section-block-xs": "2rem",
        "btn-block": ".75rem",
        "btn-inline": "1.5rem",
        "tag-block": "0.5rem",
        "tag-inline": "1rem",
        "tag-block-sm": "0.3rem",
        "tag-inline-sm": "0.8rem",
        "input-block": "1rem",
        "input-inline": "1.5rem",
        "card-inline": "1.5rem",
        "section-inline": "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
