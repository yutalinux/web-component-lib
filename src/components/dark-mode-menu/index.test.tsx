import { snapshotElement } from "@/utils/snapshot";
import { expect, test } from "vitest";
import { DarkModeButton } from ".";

test("Button Snapshot", () => {
  expect(snapshotElement(DarkModeButton, { label: "Button" })).toMatchSnapshot();
  expect(
    snapshotElement(DarkModeButton, { size: "small", label: "Button" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(DarkModeButton, { size: "large", label: "Button" }),
  ).toMatchSnapshot();
});
