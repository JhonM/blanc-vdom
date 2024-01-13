type SetPropsType = {
  target: any;
  name: string;
  value: any;
};

export const setBooleanProp = ({ target, name, value }: SetPropsType) => {
  if (value) {
    target.setAttribute(name, value);
    target[name] = true;
  } else {
    target[name] = false;
  }
};

export const setProp = ({ target, name, value }: SetPropsType) => {
  if (isCustomProp(name)) {
    return;
  } else if (name === "className") {
    target.setAttribute("class", value);
  } else if (name === "boolean" || name === "selected") {
    setBooleanProp({ target, name, value });
  } else if (name === "onclick") {
    target.addEventListener("click", (e: any) => value(e));
  } else if (name === "onchange") {
    target.addEventListener("change", (e: any) => value(e));
  } else if (name === "onsubmit") {
    target.addEventListener("submit", (e: any) => value(e));
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
