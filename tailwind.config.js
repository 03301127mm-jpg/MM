/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf7ef",
        ink: "#202020",
        mist: "#e9f3ff",
        sky: "#7cb7ff",
        cyan: "#9ce0ea",
        butter: "#fff0b8",
        peach: "#ffd8c8",
        leaf: "#cfe8c5",
        lilac: "#ded7ff"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(30, 42, 72, 0.10)",
        sticker: "0 12px 30px rgba(35, 53, 82, 0.12)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Microsoft YaHei",
          "PingFang SC",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
