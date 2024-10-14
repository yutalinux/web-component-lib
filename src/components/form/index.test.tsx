import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import Form from ".";

test("Form Snapshot", () => {
  expect(snapshot(Form, null)).toMatchSnapshot();
});
