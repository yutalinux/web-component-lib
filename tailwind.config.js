const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "var(--color-light-bg)",
          "active-bg": "var(--color-light-active-bg)",
          border: "var(--color-light-border)",
          text: "var(--color-light-text)",
          primary: {
            bg: "var(--color-light-primary-bg)",
            "active-bg": "var(--color-light-primary-active-bg)",
            border: "var(--color-light-primary-border)",
            text: "var(--color-light-primary-text)",
          },
          secondary: {
            bg: "var(--color-light-secondary-bg)",
            "active-bg": "var(--color-light-secondary-active-bg)",
            border: "var(--color-light-secondary-border)",
            text: "var(--color-light-secondary-text)",
          },
        },
        dark: {
          bg: "var(--color-dark-bg)",
          "active-bg": "var(--color-dark-active-bg)",
          border: "var(--color-dark-border)",
          text: "var(--color-dark-text)",
          primary: {
            bg: "var(--color-dark-primary-bg)",
            "active-bg": "var(--color-dark-primary-active-bg)",
            border: "var(--color-dark-primary-border)",
            text: "var(--color-dark-primary-text)",
          },
          secondary: {
            bg: "var(--color-dark-secondary-bg)",
            "active-bg": "var(--color-dark-secondary-active-bg)",
            border: "var(--color-dark-secondary-border)",
            text: "var(--color-dark-secondary-text)",
          },
        },
      },
    },
  },
  darkMode: "class",
};
