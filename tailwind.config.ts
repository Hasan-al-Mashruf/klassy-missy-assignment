import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    colors: {
      primary: "#172B4D",
      borderColor: "#ECECEC",
      gray: "#F4F4F4",
      black: "#000",
      white: "#fff",
      yellow: "#FF8A00",
    },
  },
  plugins: [],
};
export default config;
