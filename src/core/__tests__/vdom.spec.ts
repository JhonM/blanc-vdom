/**
 * @jest-environment jsdom
 */
import { h, changed, render } from "../vdom";

describe("h function", () => {
  test("it renders the h function with required arguments", () => {
    const hyper = h("div", { id: "foo" });
    expect(hyper).toEqual({ type: "div", props: { id: "foo" }, children: [] });
  });

  test("it renders h function with all arguments", () => {
    const hyper = h(
      "button",
      { className: "some-classname" },
      "Hello!!",
      "How are you",
      { type: "span" }
    );
    const response = {
      type: "button",
      props: { className: "some-classname" },
      children: ["Hello!!", "How are you", { type: "span" }],
    };

    expect(hyper).toEqual(response);
  });

  test("it renders nested functions as children of h function", () => {
    const multipleHypers = [
      h("div", { className: "some-classname" }, "Title in div"),
      h("div", { className: "some-other-classname" }, "Some other title"),
    ];
    const hyper = h(
      "div",
      { className: "some-classname" },
      "Title in div",
      ...multipleHypers
    );
    const response = {
      type: "div",
      props: { className: "some-classname" },
      children: [
        "Title in div",
        {
          children: ["Title in div"],
          props: { className: "some-classname" },
          type: "div",
        },
        {
          children: ["Some other title"],
          props: { className: "some-other-classname" },
          type: "div",
        },
      ],
    };

    expect(hyper).toEqual(response);
  });
});

describe("render", () => {
  test("it creates a div element based on string", () => {
    const element = render("div");
    const resultDiv = document.createTextNode("div");

    expect(element).toEqual(resultDiv);
  });

  test("it should create a text node", () => {
    const node = h("div", { id: "foo" }, "Hello");
    const textNode = render(node);

    expect(textNode?.nodeType).toBe(1);
  });
});

describe("Update element", () => {
  test("it update", () => {
    const node = h(
      "div",
      { id: "id-name" },
      h("button", { className: "button" }, "Button text")
    );

    render(node);
  });
});

describe("changed functions", () => {
  test("it should have changed", () => {
    const node1 = h("div", { id: "one" }, "Node 1");
    const node2 = h("button", { id: "two" }, "Node 2");

    expect(changed(node1, node1)).toEqual(false);
    expect(changed(node1, node2)).toEqual(true);
    expect(changed(render("div"), node1)).toEqual(true);
  });
});
