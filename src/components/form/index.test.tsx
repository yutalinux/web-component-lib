import { snapshotElement } from "@/utils/snapshot.test";
import { expect, test } from "vitest";
import { Form } from ".";

test("Form Snapshot", () => {
  expect(snapshotElement(Form, null)).toMatchSnapshot();
});
