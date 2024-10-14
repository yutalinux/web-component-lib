import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import HeaderMenu from ".";
import MenuLinkItem from "../menu/link-item";
import HeaderMenuLinks from "./links";

const meta = {
  title: "Design System/Menu/Header Menu",
  component: HeaderMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <HeaderMenuLinks>
          <MenuLinkItem href="#">About</MenuLinkItem>
          <MenuLinkItem href="#">Projects</MenuLinkItem>
        </HeaderMenuLinks>
      </>
    ),
  },
};
