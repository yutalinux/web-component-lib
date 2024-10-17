import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta = {
  title: "Design System/Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "TextBox",
  },
};
