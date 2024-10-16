import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Container } from ".";

const meta = {
  title: "Design System/Components/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="bg-black w-full h-full" />,
  },
};
