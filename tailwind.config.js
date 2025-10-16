/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}", './node_modules/@heroui/**/*.{js,ts,jsx,tsx}', ],
  theme: {
    extend: {
      colors: {
        primary: require('tailwindcss/colors').blue,
        neutral: require('tailwindcss/colors').gray,
      },
    },
  },
  plugins: [heroui()],
};