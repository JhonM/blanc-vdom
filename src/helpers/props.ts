import { attachEvent } from "./add-event";

type SetPropsType = {
  target: Element;
  name: string;
  value: any;
};

export const matchOn = (req: RegExp) => (key: string) => req.test(key);
const matchOnChar = matchOn(/^on/);

export const setProp = ({ target, name, value }: SetPropsType) => {
  if (matchOnChar(name)) {
    attachEvent({ target, event: name, method: value });
  } else if (name === "className") {
    target.setAttribute("class", value);
  } else {
    target.setAttribute(name, value);
  }
};

export const setProps = (target: Element, props: any) => {
  Object.keys(props).forEach((name) => {
    setProp({ target, name, value: props[name] });
  });
};
