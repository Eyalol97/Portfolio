/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#ffffff",
          100: "#fbf9f6",
          200: "#f4f0ea",
          300: "#e9e3d8",
          400: "#dcd3c2",
        },
        ink: {
          500: "#6b655a",
          700: "#55524c",
          900: "#262522",
        },
        rust: {
          400: "#c98f68",
          500: "#b5713f",
          600: "#9c5a2e",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(38,37,34,0.05)",
      },
    },
  },
  plugins: [],
}
