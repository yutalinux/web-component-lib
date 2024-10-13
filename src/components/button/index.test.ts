import { expect, test } from "bun:test";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import Button from ".";

test("Button renders correctly", () => {
	const button = createElement(Button, { onClick: () => {}, label: "Click me" });
	const renderedString = renderToString(button);
	expect(renderedString).toMatchSnapshot();
});
