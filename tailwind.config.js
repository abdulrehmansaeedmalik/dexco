/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1526",
        panel: "#161F35",
        panel2: "#1B2640",
        paper: "#E9EAE4",
        muted: "#8B93A8",
        copper: "#C9814F",
        copperBright: "#E39A64",
        teal: "#5FA89E",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}

