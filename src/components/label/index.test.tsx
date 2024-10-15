import { snapshotElement } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import { Label } from ".";

test("Label Snapshot", () => {
  expect(snapshotElement(Label, { label: "Label" })).toMatchSnapshot();
});
