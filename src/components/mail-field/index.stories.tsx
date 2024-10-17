import type { Meta, StoryObj } from "@storybook/react";

import { MailField } from ".";

const meta = {
  title: "Design System/Components/MailField",
  component: MailField,
  tags: ["autodocs"],
} satisfies Meta<typeof MailField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Mail",
  },
};
