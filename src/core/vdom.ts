import { setProps } from "../helpers";

export const h = (type: any, props: any, ...children: any[]) => {
  return { type, props: props || {}, children };
};

export const render = (vnode: any) => {
  // convert strings to text nodes
  if (vnode.split) return document.createTextNode(vnode);

  // create DOM element with nodeName
  let node = document.createElement(vnode.type);

  // copy props onto new node
  let props = vnode.props || {};
  setProps(node, props);

  // render and append child nodes
  (vnode.children || []).forEach((child: any) => node.append(render(child)));

  return node;
};

export const changed = (node1: any, node2: any) => {
  return (
    typeof node1 !== typeof node2 ||
    (typeof node1 === "string" && node1 !== node2) ||
    node1.type !== node2.type
  );
};
