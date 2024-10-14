import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Form from ".";

test("Form Snapshot", () => {
  expect(snapshot(Form, null)).toMatchSnapshot();
});
