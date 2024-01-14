import { h } from "../../src/core";

interface ButtonProps {
  text: string;
  onclick?: () => void;
  type?: string;
}

function button({ text, ...props }: ButtonProps) {
  return h("button", { ...props }, text);
}

export function baseButton(props: ButtonProps) {
  return button(props);
}
