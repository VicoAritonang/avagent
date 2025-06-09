'use client'

import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg p-2.5 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5 text-foreground" />
      ) : (
        <FiMoon className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
} 