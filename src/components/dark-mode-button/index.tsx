"use client";
import { Menu, MenuItem } from "../menu";
import { MdDarkMode, MdLightMode, MdMonitor } from "react-icons/md";
import { type ReactNode, useEffect, useState } from "react";
import { useDarkMode } from "@/utils/dark-mode/use-dark-mode";

export function DarkModeButton() {
  const [theme, setDarkMode] = useDarkMode();
  const [icon, setIcon] = useState<ReactNode>(null);

  useEffect(() => {
    switch (theme) {
      case "system":
        setIcon(<MdMonitor />);
        break;
      case "dark":
        setIcon(<MdDarkMode />);
        break;
      case "light":
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
