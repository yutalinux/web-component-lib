import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Button from ".";

test("Button Snapshot", () => {
  expect(snapshot(Button, { label: "Button" })).toMatchSnapshot();
  expect(
    snapshot(Button, { color: "secondary", label: "Button" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Button, { size: "small", label: "Button" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Button, { size: "large", label: "Button" }),
  ).toMatchSnapshot();
});
