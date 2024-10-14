import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import Box from "../box";
import Button from "../button";
import Label from "../label";
import TextBox from "../text-box";
import Form from "./index";

const meta = {
  title: "Design System/Components/Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
  args: {
    children: (
      <>
        <h2>Login</h2>
        <Box orientation="vertical">
          <div>
            <Label label="Email" />
            <TextBox />
          </div>
          <div>
            <Label label="Password" />
            <TextBox />
          </div>
        </Box>
        <Button label="Submit" />
      </>
    ),
  },
};
