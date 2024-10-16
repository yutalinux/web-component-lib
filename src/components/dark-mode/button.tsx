"use client";
import { Menu, MenuItem } from "../menu";
import { MdDarkMode, MdLightMode, MdMonitor } from "react-icons/md";
import { useDarkMode } from ".";
import { type ReactNode, useEffect, useState } from "react";

export function DarkModeButton() {
  const [getDarkMode, setDarkMode] = useDarkMode();
  const [icon, setIcon] = useState<ReactNode>(null);
  const theme = getDarkMode();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    switch (theme) {
      case "system":
        setDarkMode("system");
        setIcon(<MdMonitor />);
        break;
      case "dark":
        setDarkMode("dark");
        setIcon(<MdDarkMode />);
        break;
      case "light":
        setDarkMode("light");
        setIcon(<MdLightMode />);
        break;
    }
  }, [theme]);

  return (
    <Menu buttonChildren={icon} icon={true} color={"secondary"}>
      <MenuItem
        color="secondary"
        onAction={() => setDarkMode("system")}
        label="System"
      />
      <MenuItem
        color="secondary"
        onAction={() => setDarkMode("dark")}
        label="Dark"
      />
      <MenuItem
        color="secondary"
        onAction={() => setDarkMode("light")}
        label="Light"
      />
    </Menu>
  );
}
