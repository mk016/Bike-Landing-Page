/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          100: "#243034",
          200: "rgba(49, 77, 80, 0.6)",
        },
        slategray: "rgba(79, 115, 120, 0.51)",
        white: "#fff",
        darkturquoise: "#00b9d4",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
