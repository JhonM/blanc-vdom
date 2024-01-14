/**
 * @jest-environment jsdom
 */
import { setProps, setProp } from "../props";

describe("props", () => {
  test("setProps", () => {
    const props = {
      id: "foo",
      className: "some-classname",
      title: "some title",
    };
    const anchor = document.createElement("a");
    setProps(anchor, props);

    expect(anchor.id).toBe("foo");
    expect(anchor.title).toBe("some title");
    expect(anchor.className).toBe("some-classname");
  });

  test("setProp with classname", () => {
    const target = document.createElement("div");
    setProp({ target, name: "className", value: "a-classname" });
    expect(target.className).toBe("a-classname");
  });

  test("setProp with a data-title", () => {
    const target = document.createElement("div");
    setProp({ target, name: "id", value: "data-title" });
    expect(target.id).toBe("data-title");
  });
});
