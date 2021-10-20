module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "poppins",
    },
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      backgroundColor: {
        prim: "#f9f9f9",
        darkSec: "#0f0f10",
      },
      textColor: {
        prim: "#222222",
        sec: "#777777",
      },
      backgroundImage: {
        "with-image": "url('/src/assets/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "500px",
          padding: "0 16px",
          margin: "0 auto",
        },
      });
    },
  ],
};
