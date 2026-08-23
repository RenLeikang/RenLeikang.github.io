import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const preferredTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>(preferredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#020617" : "#f8fafc");
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")) };
}
