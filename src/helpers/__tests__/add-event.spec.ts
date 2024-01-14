/**
 * @jest-environment jsdom
 */
import { attachEvent } from "../add-event";

describe("add event", () => {
  test("it should attach a onclick event", () => {
    const target = document.createElement("div");
    const instanceMock = jest.spyOn(target, "click");

    const event = "onclick";
    const method = jest.fn();
    const props = {
      target,
      event,
      method,
    };

    target.addEventListener = jest.fn();

    attachEvent(props);
    target.click();

    expect(target.addEventListener).toBeCalledWith("click", method, false);
    expect(instanceMock).toBeCalledTimes(1);
  });
});
