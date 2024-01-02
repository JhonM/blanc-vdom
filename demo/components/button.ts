import { h } from "../../src/core";

interface ButtonProps {
  onclick: () => void;
  text: string;
}

function button({ onclick, text }: ButtonProps) {
  return h("button", { onclick }, text);
}

export function buttonPlus(props: ButtonProps) {
  return button(props);
}

export function buttonMinus(props: ButtonProps) {
  return button(props);
}
