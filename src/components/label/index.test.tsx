import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Label from ".";

test("Label Snapshot", () => {
  expect(snapshot(Label, { label: "Label" })).toMatchSnapshot();
});
