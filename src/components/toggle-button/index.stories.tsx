import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import ToggleButton from ".";

const meta = {
  title: "Design System/Components/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
