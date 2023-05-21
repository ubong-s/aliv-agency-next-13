/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        "spanish-white": "#F8EDE3",
        "early-dawn": "#FFFAE7",
        "catskill-white": "#F1F5F9;",
        "aqua-haze": "#F1F6F5",
        alabaster: "#F9F9F9",
        concrete: "#F3F3F3",
        ablack: "#151515",
        muted: "#777777",
      },
      height: {
        "1px": "1px",
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "376px": "376px",
      },
      width: {
        50: "50%",
        60: "60%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        600: "600px",
        "200%": "200%",
        "400%": "400%",
        "500%": "500%",
        "724px": "724px",
        "1448px": "1448px",
      },
      fontSize: {
        "48px": ["48px", "48px"],
        "52px": ["52px", "52px"],
        "64px": ["64px", "64px"],
        "96px": ["96px", "96px"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      flex: {
        33: "33%",
      },
      translate: {
        "screen-x": "100vw",
        "screen-y": "100vh",
        "0/0": "0%",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        slide: "slide 8s linear infinite",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
