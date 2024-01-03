export const MSGS = {
  INCREASE_COUNT: "INCREASE_COUNT",
  DECREASE_COUNT: "DECREASE_COUNT",
} as const;

export type Model = {
  count: number;
};

export type ActionType =
  | { type: "INCREASE_COUNT"; count: number }
  | { type: "DECREASE_COUNT"; count: number };

export type DispatchType = (action: ActionType) => void;
