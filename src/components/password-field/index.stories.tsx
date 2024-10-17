import type { Meta, StoryObj } from "@storybook/react";

import { PasswordField } from ".";

const meta = {
  title: "Design System/Components/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Password",
  },
};
