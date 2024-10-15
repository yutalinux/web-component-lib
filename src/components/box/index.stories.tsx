import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "./index";

const meta = {
  title: "Design System/Components/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="w-10 h-10 bg-blue-700" />
        <div className="w-10 h-10 bg-red-700" />
        <div className="w-10 h-10 bg-green-700" />
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    children: (
      <>
        <div className="w-10 h-10 bg-blue-700" />
        <div className="w-10 h-10 bg-red-700" />
        <div className="w-10 h-10 bg-green-700" />
      </>
    ),
  },
};
