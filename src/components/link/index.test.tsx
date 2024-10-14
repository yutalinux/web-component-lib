import { expect, test } from "bun:test";
import { snapshot } from "@/utils/tests/snapshot";
import Link from ".";

test("Link Snapshot", () => {
  expect(
    snapshot(Link, {
      href: "https://github.com/yutalinux/web-component-lib",
      label: "Link",
    }),
  ).toMatchSnapshot();
});
