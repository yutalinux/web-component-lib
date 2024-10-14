import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Box from ".";

test("Box Snapshot", () => {
  expect(snapshot(Box, { orientation: "vertical" })).toMatchSnapshot();
  expect(snapshot(Box, { orientation: "horizontal" })).toMatchSnapshot();
});
