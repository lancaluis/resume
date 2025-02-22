import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 1s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-40rem 0" },
          "100%": { backgroundPosition: "40rem 0" },
        },
      },
    },
  },
} satisfies Config;
