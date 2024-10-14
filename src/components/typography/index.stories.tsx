import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./index";

const meta = {
  title: "Design System/Components/Typography",
  component: Typography,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    type: 1,
    label: "Typography",
  },
};

export const H2: Story = {
  args: {
    type: 2,
    label: "Typography",
  },
};

export const H3: Story = {
  args: {
    type: 3,
    label: "Typography",
  },
};

export const H4: Story = {
  args: {
    type: 4,
    label: "Typography",
  },
};

export const H5: Story = {
  args: {
    type: 5,
    label: "Typography",
  },
};

export const H6: Story = {
  args: {
    type: 6,
    label: "Typography",
  },
};
