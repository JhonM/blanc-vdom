import { attachEvent } from "./add-event";

type SetPropsType = {
  target: any;
  name: string;
  value: any;
};

export const matchOn = (req: RegExp) => (key: string) => req.test(key);
const matchOnChar = matchOn(/^on/);

export const setBooleanProp = ({ target, name, value }: SetPropsType) => {
  if (value) {
    target.setAttribute(name, value);
    target[name] = true;
  } else {
    target[name] = false;
  }
};

export const setProp = ({ target, name, value }: SetPropsType) => {
  if (matchOnChar(name)) {
    attachEvent({ target, event: name, method: value });
  } else if (isCustomProp(name)) {
    return;
  } else if (name === "className") {
    target.setAttribute("class", value);
  } else if (name === "boolean" || name === "selected") {
    setBooleanProp({ target, name, value });
  } else {
    target.setAttribute(name, value);
  }
};

// TODO: need to make this work, now its just redundant code
export const isCustomProp = (name: any) => {
  return false;
};

export const setProps = (target: any, props: any) => {
  Object.keys(props).forEach((name) => {
    setProp({ target, name, value: props[name] });
  });
};
