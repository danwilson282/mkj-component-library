/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}", './node_modules/@heroui/**/*.{js,ts,jsx,tsx}', ],
  theme: {
    extend: {
    colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: "var(--primary)",
            secondary: "var(--secondary)",
          },
    },
  },
  plugins: [heroui()],
};