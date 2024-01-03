import view from "./DemoAppView";
import initModel from "./state/model";
import update from "./state/update";
import app from "./state/app";

const appContainer = document.getElementById("app");
app(initModel, update, view, appContainer);
