interface AddEventType {
  target: EventTarget;
  event: string;
  method: (e: Event) => void;
}

export const attachEvent = ({ target, event, method }: AddEventType) => {
  if (target.addEventListener) {
    const eventType = event.substring(2);
    target.addEventListener(eventType, (e: Event) => method(e), false);
  }
};
