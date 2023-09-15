import { render } from "../dist/module";
import { DemoAppView } from "./DemoAppView";

const app = document.getElementById("app");

app?.appendChild(render(DemoAppView));
