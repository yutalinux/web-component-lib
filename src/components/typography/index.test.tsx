import { snapshotElement } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Typography from ".";

test("ToggleButton Snapshot", () => {
  expect(
    snapshotElement(Typography, { type: 1, label: "Heading1" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: 2, label: "Heading2" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: 3, label: "Heading3" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: 4, label: "Heading4" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: 5, label: "Heading5" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: 6, label: "Heading6" }),
  ).toMatchSnapshot();
});
