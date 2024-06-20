/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sora)",
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      boxShadow: {
        "custom-inset": "inset 10px -50px 94px 0 rgba(199, 199, 199, 0.2)",
      },
    },
  },
  plugins: [],
};
