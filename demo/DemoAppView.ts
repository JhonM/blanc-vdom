import { h } from "../src/core";
import { buttonPlus, buttonMinus } from "./components/button";

function h1() {
  return h("H1", {}, "Simple Example");
}

export function DemoAppView() {
  return h(
    "div",
    { id: "demo_app_view_id" },
    ...[
      h1(),
      buttonMinus({
        onclick: () => console.info("Subtract"),
        text: "Subtract-",
      }),
      h("div", {}, "fjskf"),
      buttonPlus({
        onclick: () => console.info("Add"),
        text: "Add+",
      }),
    ]
  );
}
