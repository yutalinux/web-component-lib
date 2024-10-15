import { snapshotElement } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import { ToggleButton } from ".";

test("ToggleButton Snapshot", () => {
  expect(
    snapshotElement(ToggleButton, { label: "Toggle Button" }),
  ).toMatchSnapshot();
});
