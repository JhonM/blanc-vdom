export const MSGS = {
  INCREASE_COUNT: "INCREASE_COUNT",
  DECREASE_COUNT: "DECREASE_COUNT",
  SUBMIT_FORM: "SUBMIT_FORM",
} as const;

export type Model = {
  count: number;
  form: { value: string };
};

export type ActionType =
  | { type: "INCREASE_COUNT"; count: number }
  | { type: "DECREASE_COUNT"; count: number }
  | { type: "SUBMIT_FORM"; value: string };

export type DispatchType = (action: ActionType) => void;
