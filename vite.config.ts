import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dts from 'vite-plugin-dts'

const path = require("path");

export default defineConfig({
  // dts to automatically output types in dist
  plugins: [reactRefresh(), dts()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "nap-ui-library",
      fileName: (format) => `ui-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["react", "react-dom"],
    },
  },
});