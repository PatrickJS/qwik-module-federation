import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";


export default defineConfig(() => {
  return {
    build: {
      minify: false,
    },
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
            '.': './src/entry-main.tsx',
        },
        // shared: ['vue']
      })
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
