import { expect, test } from "bun:test";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import Card from ".";

test("Button Snapshot", () => {
  const button = createElement(Card, null)
  const renderedString = renderToString(button)
  expect(renderedString).toMatchSnapshot()
})
