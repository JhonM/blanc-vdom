import { render } from "../src/core";
import { DemoAppView } from "./DemoAppView";

const app = document.getElementById("app");

app?.appendChild(render(DemoAppView()));
