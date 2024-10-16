export type Theme = "system" | "dark" | "light";

export function getDarkMode(theme: Theme): boolean {
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
