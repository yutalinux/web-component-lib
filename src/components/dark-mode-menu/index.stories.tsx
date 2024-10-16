import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DarkModeButton } from ".";
import { MenuItem } from "../menu/item";

const meta = {
  title: "Design System/Components/DarkModeButton",
  component: DarkModeButton,
  tags: ["autodocs"],
} satisfies Meta<typeof DarkModeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
