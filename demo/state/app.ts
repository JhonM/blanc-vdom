import { render } from "../../src/core";
import type { ActionType, Model } from "./types";

type DispatchType = (action: ActionType) => void;

// Handling all inpure state here
export default function App(
  initModel: Model,
  update: (msg: ActionType, model: Model) => Model,
  view: (dispatch: DispatchType, model: Model) => any,
  node: HTMLElement | null
) {
  let model = initModel;
  let currentView = render(view(dispatch, model));
  node?.appendChild(currentView);

  function dispatch(msg: ActionType) {
    model = update(msg, model);
    const updatedView = render(view(dispatch, model));
    node?.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}
