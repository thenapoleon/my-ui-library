import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

const path = require("path");

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "UI LIBRARY",
      fileName: (format) => `ui-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["react", "react-dom"],
    },
  },
});