const $ea8453028f417f8e$export$dda1d9f60106f0e9 = (type, props, ...children)=>{
    return {
        type: type,
        props: props || {},
        children: children
    };
};
const $ea8453028f417f8e$export$b3890eb0ae9dca99 = (vnode)=>{
    // convert strings to text nodes
    if (vnode.split) return document.createTextNode(vnode);
    // create DOM element with nodeName
    let node = document.createElement(vnode.type);
    // copy props onto new node
    let props = vnode.props || {};
    $ea8453028f417f8e$export$938ca3893886de06(node, props);
    // render and append child nodes
    (vnode.children || []).forEach((child)=>node.append($ea8453028f417f8e$export$b3890eb0ae9dca99(child)));
    return node;
};
const $ea8453028f417f8e$export$a9c18da36281d08 = (node1, node2)=>{
    return typeof node1 !== typeof node2 || typeof node1 === "string" && node1 !== node2 || node1.type !== node2.type;
};
const $ea8453028f417f8e$export$938ca3893886de06 = (target, props)=>{
    Object.keys(props).forEach((name)=>{
        $ea8453028f417f8e$export$8a39838a0f735648({
            target: target,
            name: name,
            value: props[name]
        });
    });
};
const $ea8453028f417f8e$export$8a39838a0f735648 = ({ target: target , name: name , value: value  })=>{
    if ($ea8453028f417f8e$export$9e50b82494158dc4(name)) return;
    else if (name === "className") target.setAttribute("class", value);
    else if (name === "boolean" || name === "selected") $ea8453028f417f8e$export$ab8fe88d34ec47a5({
        target: target,
        name: name,
        value: value
    });
    else if (name === "onclick") target.addEventListener("click", (e)=>value(e));
    else if (name === "onchange") target.addEventListener("change", (e)=>value(e));
    else target.setAttribute(name, value);
};
const $ea8453028f417f8e$export$ab8fe88d34ec47a5 = ({ target: target , name: name , value: value  })=>{
    if (value) {
        target.setAttribute(name, value);
        target[name] = true;
    } else target[name] = false;
};
const $ea8453028f417f8e$export$9e50b82494158dc4 = (name)=>{
    return false;
};






export {$ea8453028f417f8e$export$dda1d9f60106f0e9 as h, $ea8453028f417f8e$export$b3890eb0ae9dca99 as render};
//# sourceMappingURL=module.js.map
