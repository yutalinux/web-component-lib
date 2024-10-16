import type { Meta, StoryObj } from "@storybook/react";

import { Menu, MenuItem } from "./index";
import React from "react";

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "File",
    children: (
      <>
        <MenuItem label="Save" />
      </>
    ),
  },
};
