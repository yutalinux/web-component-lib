import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
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
