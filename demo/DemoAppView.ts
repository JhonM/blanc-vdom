import { h } from "../src/core";
import { buttonPlus, buttonMinus } from "./components/button";
import { DispatchType, Model } from "./state/types";
import { decrementCountMsg, incrementCountMsg } from "./state/update";

function h1() {
  return h("H1", {}, "Simple Example");
}

export default function DemoAppView(dispatch: DispatchType, model: Model) {
  return h(
    "div",
    {},
    h1(),
    h(
      "div",
      { style: "display: flex; justify-content: space-evenly;" },
      ...[
        buttonMinus({
          onclick: () => dispatch(decrementCountMsg(model.count)),
          text: "DECREASE",
        }),
        h("div", {}, model.count.toString()),
        buttonPlus({
          onclick: () => dispatch(incrementCountMsg(model.count)),
          text: "INCREASE",
        }),
      ]
    )
  );
}
