import { h } from "../src/core";
import { baseButton } from "./components/button";
import { DispatchType, Model } from "./state/types";
import {
  decrementCountMsg,
  incrementCountMsg,
  submitFormMsg,
} from "./state/update";

function heading(type: string, text: string, props?: { [key: string]: any }) {
  return h(type, { ...props }, text);
}

function input({ ...props }: { [key: string]: any }) {
  return h("input", { ...props });
}

function form(dispatch: DispatchType, model: Model) {
  return h(
    "form",
    {
      onsubmit: (e: Event) => {
        e.preventDefault();
        dispatch(submitFormMsg((e.target as HTMLFormElement).formNumber.value));
      },
    },
    ...[
      input({
        type: "number",
        name: "formNumber",
        value: model.form.value.toString(),
      }),
    ],

    baseButton({
      type: "submit",
      text: "Submit",
    })
  );
}

function formResult(model: Model) {
  if (Number(model.form.value) > 0) {
    return h("span", {}, `Form result: ${model.form.value}`);
  }

  return h("span", {}, "");
}

export default function DemoAppView(dispatch: DispatchType, model: Model) {
  return h(
    "div",
    {},
    heading("H1", "Examples"),
    heading("H2", "Counter"),
    h(
      "div",
      { style: "display: flex; justify-content: space-evenly;" },
      ...[
        baseButton({
          onclick: () => dispatch(decrementCountMsg(model.count)),
          text: "DECREASE",
        }),
        h("div", {}, model.count.toString()),
        baseButton({
          onclick: () => dispatch(incrementCountMsg(model.count)),
          text: "INCREASE",
        }),
      ]
    ),
    heading("H2", "Form"),
    form(dispatch, model),
    formResult(model)
  );
}
