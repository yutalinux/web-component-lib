import { snapshotElement } from "@/utils/snapshot";
import { expect, test } from "vitest";
import { DarkModeButton } from ".";

test("Button Snapshot", () => {
  expect(snapshotElement(DarkModeButton, {})).toMatchSnapshot();
  expect(snapshotElement(DarkModeButton, { size: "small" })).toMatchSnapshot();
  expect(snapshotElement(DarkModeButton, { size: "large" })).toMatchSnapshot();
});
