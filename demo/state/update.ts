import { ActionType, Model } from "./types";
import { MSGS } from "./types";

export function incrementCountMsg(count: Model["count"]) {
  return { type: MSGS.INCREASE_COUNT, count };
}

export function decrementCountMsg(count: Model["count"]) {
  return { type: MSGS.DECREASE_COUNT, count };
}

export function submitFormMsg(value: string) {
  return {
    type: MSGS.SUBMIT_FORM,
    value,
  };
}

export default function update(msg: ActionType, model: Model): Model {
  switch (msg.type) {
    case MSGS.INCREASE_COUNT:
      return {
        ...model,
        count: msg.count + 1,
      };
    case MSGS.DECREASE_COUNT:
      if (msg.count === 0) {
        return { ...model, count: 0 };
      }
      return {
        ...model,
        count: msg.count - 1,
      };
    case MSGS.SUBMIT_FORM:
      return {
        ...model,
        form: {
          value: msg.value,
        },
      };
    default:
      return model;
  }
}
