import { snapshotElement } from "@/utils/snapshot";
import { expect, test } from "vitest";
import { Typography } from ".";

test("Typography Snapshot", () => {
  expect(
    snapshotElement(Typography, { type: "h1", label: "Heading1" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h2", label: "Heading2" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h3", label: "Heading3" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h4", label: "Heading4" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h5", label: "Heading5" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h6", label: "Heading6" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "p", label: "Heading6" }),
  ).toMatchSnapshot();
});
