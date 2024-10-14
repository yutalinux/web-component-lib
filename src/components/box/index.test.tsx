import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import Box from ".";

test("Box Snapshot", () => {
  expect(snapshot(Box, { orientation: "vertical" })).toMatchSnapshot();
  expect(snapshot(Box, { orientation: "horizontal" })).toMatchSnapshot();
});
