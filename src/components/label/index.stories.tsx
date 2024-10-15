import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./index";

const meta = {
  title: "Design System/Components/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label",
  },
};
