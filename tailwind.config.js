/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
      screens: {
        sm: "600px", // For small devices (smaller smartphones)
        md: "768px", // For medium devices (most tablets)
        lg: "992px", // For large devices (larger tablets and small laptops)
        xl: "1200px", // For extra large devices (standard laptops and desktops)
        "2xl": "1600px", // For ultra-wide screens
      },
    },
  },
};

