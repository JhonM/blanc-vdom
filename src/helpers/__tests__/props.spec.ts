/**
 * @jest-environment jsdom
 */
import { setProps, setProp, setBooleanProp } from "../props";

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

  test("setProp with boolean", () => {
    const target = document.createElement("div");
    setProp({ target, name: "boolean", value: "true" });
    expect(target.attributes.item(0)?.name).toEqual("boolean");
    expect(target.attributes.item(0)?.value).toEqual("true");
  });

  test("setBooleanProp on true", () => {
    const target = document.createElement("div");
    setBooleanProp({ target, name: "boolean", value: "true" });
    expect(target.attributes.item(0)?.name).toEqual("boolean");
    expect(target.attributes.item(0)?.value).toEqual("true");
  });

  test("setBooleanProp on false", () => {
    const target = document.createElement("div") as any; // use a better type or different kind of test
    setBooleanProp({ target, name: "boolean", value: "" });
    expect(target.boolean).toEqual(false);
  });
});
