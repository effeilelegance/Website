/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          800: "#0b0b0b",
          700: "#121212",
          600: "#181818",
        },
        gold: {
          50: "#fbf3da",
          100: "#f6dfa2",
          200: "#f4d98f",
          300: "#e9c873",
          400: "#d6b159",
          500: "#c9a24a",
          600: "#a9853a",
          700: "#7c602a",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.42em",
        wide2: "0.25em",
      },
      boxShadow: {
        glow: "0 0 35px rgba(214,177,89,0.35)",
        "glow-sm": "0 0 25px rgba(214,177,89,0.25)",
        card: "0 30px 60px -25px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg,transparent,rgba(214,177,89,0.6),transparent)",
        "luxe-radial":
          "radial-gradient(circle at top left,rgba(214,177,89,0.18),transparent 34%),radial-gradient(circle at bottom right,rgba(255,255,255,0.06),transparent 28%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 3.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
