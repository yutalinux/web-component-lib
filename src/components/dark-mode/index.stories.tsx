import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DarkModeButton, useDarkMode } from ".";

const meta = {
  title: "Design System/Components/DarkModeButton",
  component: DarkModeButton,
  tags: ["autodocs"],
} satisfies Meta<typeof DarkModeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [get, set] = useDarkMode();

    return <DarkModeButton />;
  },
};
