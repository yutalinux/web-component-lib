import { snapshotElement } from "@/utils/snapshot";
import { test, expect } from "vitest";
import { Typography } from ".";

test("Typography Snapshot", () => {
  expect(
    snapshotElement(Typography, { type: "h1", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h2", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h3", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h4", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h5", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "h6", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
  expect(
    snapshotElement(Typography, { type: "p", label: "Typography Snapshot" }),
  ).toMatchSnapshot();
});
