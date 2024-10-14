import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import Label from ".";

test("Label Snapshot", () => {
  expect(snapshot(Label, { label: "Label" })).toMatchSnapshot();
});
