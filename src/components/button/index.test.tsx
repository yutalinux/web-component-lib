import { snapshotElement } from "@/utils/snapshot";
import { expect, test } from "vitest";
import { Button } from ".";

test("Button Snapshot", () => {
  expect(snapshotElement(Button, { label: "Button" })).toMatchSnapshot();
  expect(
    snapshotElement(Button, { color: "secondary", label: "Button" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Button, { size: "small", label: "Button" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Button, { size: "large", label: "Button" }),
  ).toMatchSnapshot();
});
