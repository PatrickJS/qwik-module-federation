/*
 * WHAT IS THIS FILE?
 *
 * Development entry point using only client-side modules:
 * - Do not use this mode in production!
 * - No SSR
 * - No portion of the application is pre-rendered on the server.
 * - All of the application is running eagerly in the browser.
 * - More code is transferred to the browser than in SSR mode.
 * - Optimizer/Serialization/Deserialization code is not exercised!
 */
import { render as qwikRender, type RenderOptions } from "@builder.io/qwik";
// TODO: qwikCity is not working
// import Root from "./root";
import Root from "./routes/index";

import "./global.css";

export function render(el = document.body, opts: RenderOptions) {
  return qwikRender(el, <Root />, opts);
}

export function destroy() {
  console.log("destroy");
}
