import { expect, test } from "bun:test";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import ToggleButton from ".";

test("Button Snapshot", () => {
  const button = createElement(ToggleButton, {
    onChange: () => {},
    label: "Click me",
  });
  const renderedString = renderToString(button);
  expect(renderedString).toMatchSnapshot();
});
