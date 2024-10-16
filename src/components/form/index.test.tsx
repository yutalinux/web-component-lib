import { snapshotElement } from "@/utils/snapshot";
import { expect, test } from "vitest";
import { Form } from ".";

test("Form Snapshot", () => {
  expect(snapshotElement(Form, null)).toMatchSnapshot();
});
