/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "690px",
      },
      colors: {
        primary: "#f0f2f5",
        secondary: "#ff813f",
        tertiary: "#222222",
        slate: {
          10: "#f1f3f4",
        },
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          20: "#585858",
          20: "#141414",
        },
        brightRed: "hsl(12,88%, 59%)",
        brightRedLight: "hsl(12,88%, 69%)",
        brightRedSupLight: "hsl(12,88%, 95%)",
        darkBlue: "hsl(228,39%, 23%)",
        darkGrayishBlue: "hsl(227,12%, 61%)",
        veryDarkBlue: "hsl(233,12%, 13%)",
        veryPaleRed: "hsl(13,100%, 96%)",
        veryLightGray: "hsl(0,0%, 98%)",
      },
      backgroundImage: {
        hero: "url('/src/assets/react.svg')",
      },
    },
  },
  plugins: [],
};
