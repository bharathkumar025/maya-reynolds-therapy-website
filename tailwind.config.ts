import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#24312f",
        sage: "#667c70",
        moss: "#435a50",
        cream: "#f5f1e8",
        sand: "#ddd2bf",
        clay: "#b77861",
        mist: "#e8eee8"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(36,49,47,.10)"
      }
    }
  },
  plugins: []
};
export default config;