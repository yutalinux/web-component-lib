import { snapshotElement } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Box from ".";

test("Box Snapshot", () => {
  expect(snapshotElement(Box, { orientation: "vertical" })).toMatchSnapshot();
  expect(snapshotElement(Box, { orientation: "horizontal" })).toMatchSnapshot();
});
