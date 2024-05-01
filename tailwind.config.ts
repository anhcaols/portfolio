import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px"
      },
      center: true,
      padding: {
        xs: "20px",
        sm: "20px",
        md: "20px",
        lg: "20px",
        xl: "20px"
      }
    },
    colors: {
      primary: "#14c2a3",
      white: "#fff",
      black: "#000",
      dark: "#141414",
      darkGray: "#1a1919",
      light: "#fafafa",
      gray: "#b9b9bf",
      transparent: "transparent",
      destructive: "#dc2626",
      hover: "#2b2b2b",
      accent: "#b9b9bf80",
    },
    fontSize: {
      xs: "0.625rem", //10px
      sm: "0.75rem", // 12px
      md: "0.8125rem", //13px
      base: "0.875rem", //14px
      lg: "1rem", //16px
      xl: "1.125rem", //18px
      xxl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", //28px
      "4xl": "2rem", //32px
      "5xl": "2.25rem", //36px
      "6xl": "2.5rem", // 40px
      "7xl": "3rem", //48px
      "8xl": "4rem", // 64px
      "9xl": "6rem", //96px
      "10xl": "8rem" //128px
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    extend: {
      backgroundImage: {}
    }
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;
