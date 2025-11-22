import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#e6f7ed',
          100: '#b3e6cd',
          200: '#80d6ad',
          300: '#4dc58d',
          400: '#1ab56d',
          500: '#00a651',
          600: '#008541',
          700: '#006431',
          800: '#004321',
          900: '#002211',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
