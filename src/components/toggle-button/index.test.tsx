import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import ToggleButton from ".";

test("ToggleButton Snapshot", () => {
  expect(snapshot(ToggleButton, { label: "Toggle Button" })).toMatchSnapshot();
});
