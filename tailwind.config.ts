import type { Config } from "tailwindcss";
const v = (n: string) => `hsl(var(--${n}) / <alpha-value>)`;
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { background: v("background"), foreground: v("foreground"), card: v("card"), border: v("border"),
      muted: v("muted"), "muted-foreground": v("muted-foreground"), primary: v("primary"), "primary-foreground": v("primary-foreground"),
      secondary: v("secondary"), accent: v("accent"), danger: v("danger") },
    borderRadius: { DEFAULT: "var(--radius)", lg: "calc(var(--radius) + 4px)" },
    boxShadow: { panel: "var(--shadow-panel)" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
  } },
} satisfies Config;
