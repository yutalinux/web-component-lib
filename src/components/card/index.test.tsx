import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import Card from ".";

test("Card Snapshot", () => {
  expect(snapshot(Card, null)).toMatchSnapshot();
});
