"use client";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "../menu";
import { MdDarkMode, MdLightMode, MdMonitor } from "react-icons/md";

export type Theme = "system" | "dark" | "light";

export interface DarkModeButtonProps {
  label: string;
  size?: "medium" | "small" | "large";
}

export function DarkModeButton({ size, label }: DarkModeButtonProps) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme as Theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("system");
    }
  }, [theme]);

  let icon = <></>;
  switch (theme) {
    case "dark":
      icon = <MdDarkMode className="w-6 h-6" />
      break;
    case "light":
      icon = <MdLightMode className="w-6 h-6" />
      break;
    default:
      icon = <MdMonitor className="w-6 h-6" />
      break;
  }


  return (
    <Menu buttonChildren={icon} icon={true} color={"secondary"} size={size}>
      <MenuItem color="secondary" onAction={() => setTheme("system")} label="System"/>
      <MenuItem color="secondary" onAction={() => setTheme("dark")} label="Dark"/>
      <MenuItem color="secondary" onAction={() => setTheme("light")} label="Light"/>
    </Menu>
  );
}
