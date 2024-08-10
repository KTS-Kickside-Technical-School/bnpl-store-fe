/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ["inter"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          hover: "#2f2f2f",
        },
        accent: {
          DEFAULT: "#008FE6",
          hover: "#d6001c",
        },
      },
    },
  },
};

