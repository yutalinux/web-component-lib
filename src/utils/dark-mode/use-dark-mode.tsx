"use client";

import { Dispatch, useEffect, useState } from "react";
import { getDarkMode, Theme } from "./get-dark-mode";

export function useDarkMode(): [Theme, Dispatch<Theme>] {
  if (typeof document === "undefined") {
    throw new Error("document is not found");
  }

  const storageTheme = localStorage.getItem("theme") || "system";
  const [theme, setTheme] = useState<Theme>(storageTheme as Theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const classList = document.documentElement.classList;
    if (getDarkMode(theme)) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme];
}
