/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3252DF",
          900: "#152C5B",
        },
        gray: {
          200: "#E5E5E5",
          400: "#B0B0B0",
        },
        pink: {
          500: "#FF498B",
        },
        green: {
          500: "#1ABC9C",
        },
        red: {
          500: "#E74C3C",
        },
      },
      maxWidth: {
        1140: "1140px",
      },
      screens: {
        md: "1188px",
      },
    },
  },
  plugins: [],
};
