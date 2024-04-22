import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            primary: "Robotaur",
            secondary: "Sukplena Roman",
        },
        colors: {
            background: "#111111",
            primary: "#f9f9f9",
            secondary: "#929292" 
        },
    },
  },
  plugins: [],
};
export default config;
