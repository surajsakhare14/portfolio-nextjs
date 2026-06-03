import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("light", !dark);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      document.documentElement.classList.toggle("light", !next);
      return next;
    });
  };

  return { isDark, toggle };
};
