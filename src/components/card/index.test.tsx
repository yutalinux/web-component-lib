import { snapshotElement } from "@/utils/snapshot";
import { expect, test } from "vitest";
import { Card } from ".";

test("Card Snapshot", () => {
  expect(snapshotElement(Card, null)).toMatchSnapshot();
});
