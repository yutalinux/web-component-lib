import { snapshotElement } from "@/utils/snapshot.test";
import { expect, test } from "vitest";
import { TextBox } from ".";

test("TextBox Snapshot", () => {
  expect(
    snapshotElement(TextBox, {
      placeholder: "Placeholder",
    }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(TextBox, {
      type: "password",
    }),
  ).toMatchSnapshot();
});
