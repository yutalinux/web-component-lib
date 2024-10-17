import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "../box";
import { Button } from "../button";
import { Form } from "./index";
import { MailField } from "../mail-field";
import { PasswordField } from "../password-field";
import { TextField } from "../text-field";

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
          <MailField label="Email" />
          <PasswordField autoComplete="current-password" label="Password" />
        </Box>
        <Button label="Submit" />
      </>
    ),
  },
};

export const SignUpForm: Story = {
  args: {
    children: (
      <>
        <h2>Sign Up</h2>
        <Box orientation="vertical">
          <TextField label="User" />
          <MailField autoComplete="email" label="Email" />
          <PasswordField autoComplete="new-password" label="Password" />
          <input type="date" />
        </Box>
        <Button label="Submit" />
      </>
    ),
  },
};
