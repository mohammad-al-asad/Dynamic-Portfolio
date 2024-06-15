/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a95db",
        background: "#191f36",
        old: "#6499E9",
      },
      fontFamily: {
        body: ["Poppins", "Nunito", "Kanit"],
      },
    },
  },
  plugins: [],
};
