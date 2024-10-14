import { snapshot } from "@/utils/tests/snapshot";
import { expect, test } from "vitest";
import Link from ".";

test("Link Snapshot", () => {
  expect(
    snapshot(Link, {
      href: "https://github.com/yutalinux/web-component-lib",
      label: "Link",
    }),
  ).toMatchSnapshot();
});
