import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '0.9px',
      },
      
      screens: {
        'xs': '350px',
        mu: { max: '768px' },
        ms: { max: '400px' },
        msx: { max: '375px' },
        'max-h-816': { raw: '(max-height: 816px)' },
        'not-md': { raw: '(max-width: 767px)' },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ['Manrope', "sans-serif"],
        sora: ['Sora', 'sans-serif'],
        montserrat: ['Montserrat','sans-serif'],
        inter:['Inter','sans-serif']

      },
    },
  },
  plugins: [require('tailwindcss-animated'),
    require("tailwindcss-motion")
  ],
} satisfies Config;
