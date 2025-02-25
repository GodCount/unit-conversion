import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "lib",
        minify: false,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            formats: ["es", "cjs", "umd"],
            name: "UnitConversion",
            fileName: "index",
        },
    },
    resolve: {
        alias: {
            src: resolve("src/"),
        },
    },
    plugins: [dts({ rollupTypes: true })],
});
