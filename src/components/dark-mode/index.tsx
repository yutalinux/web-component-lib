"use client";
import { useEffect, useState, type Dispatch } from "react";

export type Theme = "system" | "dark" | "light";

export interface DarkModeProps {
  children: string;
  theme: Theme;
  setTheme: Dispatch<Theme>;
}

function getDarkMode(theme: Theme): boolean {
  switch (theme) {
    case "system":
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true;
      }
      return false;
    case "dark":
      return true;
    case "light":
      return false;
  }
}

export function useDarkMode(): [() => Theme, (theme: Theme) => void] {
  const classList = document.documentElement.classList;
  const storageTheme = localStorage.getItem("theme") || "system";
  const [theme, setTheme] = useState<Theme>(storageTheme as Theme);
  const get = () => {
    return theme;
  };

  const set = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);

    if (getDarkMode(theme)) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  };

  return [get, set];
}

export * from "./button";
