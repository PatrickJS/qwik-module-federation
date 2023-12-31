import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  // ServiceWorkerRegister,
} from "@builder.io/qwik-city";
// import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  return (
    <>
      <div>
        <QwikCityProvider>
          <RouterOutlet />
        </QwikCityProvider>
      </div>
    </>
  );
});
