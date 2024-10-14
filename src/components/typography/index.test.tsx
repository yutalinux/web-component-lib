import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import Typography from ".";

test("ToggleButton Snapshot", () => {
  expect(
    snapshot(Typography, { type: 1, label: "Heading1" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Typography, { type: 2, label: "Heading2" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Typography, { type: 3, label: "Heading3" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Typography, { type: 4, label: "Heading4" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Typography, { type: 5, label: "Heading5" }),
  ).toMatchSnapshot();
  expect(
    snapshot(Typography, { type: 6, label: "Heading6" }),
  ).toMatchSnapshot();
});
