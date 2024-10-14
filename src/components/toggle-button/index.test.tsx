import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import ToggleButton from ".";

test("ToggleButton Snapshot", () => {
  expect(snapshot(ToggleButton, { label: "Toggle Button" })).toMatchSnapshot();
});
