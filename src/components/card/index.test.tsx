import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Card from ".";

test("Card Snapshot", () => {
  expect(snapshot(Card, null)).toMatchSnapshot();
});
