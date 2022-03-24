1. create react library
    `npm init vite@latest my-ui-library -- --template react-ts`

    `npm i --save-dev @types/node`

    `npm i --save-dev @vitejs/plugin-react-refresh`

2. vite config:

```
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
```

2. set build output

package.json
```json
{
    ...
    "main": "./dist/ui-lib.umd.js",
    "module": "./dist/ui-lib.es.js",
}
```

3. storybook

`npx sb init --builder storybook-builder-vite`

fix main:

.storybook/main.js 

```javascript
module.exports = {
  ...
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
    };
  }

```