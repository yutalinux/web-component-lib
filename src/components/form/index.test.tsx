import { snapshotElement } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import { Form } from ".";

test("Form Snapshot", () => {
  expect(snapshotElement(Form, null)).toMatchSnapshot();
});
