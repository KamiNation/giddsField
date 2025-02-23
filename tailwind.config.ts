import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "primary": "#06123c"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      screens: {
        sm: { min: "320px", max: "480px" },
        md: { min: "481px", max: "650px" },
        lg: { min: "651px", max: "768px" },
        xl: { min: "769px", max: "1023px" },
        "xl-flex": { min: "800px", max: "1023px" },
        "2xl": { min: "1024px" },
      },
    },
  },
  plugins: [],
});

export default config;
