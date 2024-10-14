import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import TextBox from ".";

test("TextBox Snapshot", () => {
  expect(
    snapshot(TextBox, {
      placeholder: "Placeholder",
    }),
  ).toMatchSnapshot();
  expect(
    snapshot(TextBox, {
      type: "password",
    }),
  ).toMatchSnapshot();
});
