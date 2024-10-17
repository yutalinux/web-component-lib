import { type Attributes, type FunctionComponent, createElement } from "react";
import { renderToString } from "react-dom/server";

export function snapshotElement<T extends object>(
  type: FunctionComponent<T>,
  args: (Attributes & T) | null,
) {
  const element = createElement(type, args);
  return renderToString(element);
}
