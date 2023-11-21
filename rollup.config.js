
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import fs from "fs-extra";

if(fs.existsSync("./lib")) {
    fs.emptyDirSync("./lib");
}

const isDev = process.env["NODE_ENV"] == "development";

const prodPlugins = [];

if (!isDev) {
    prodPlugins.push(terser());
}

/**
 * @type {import("rollup").RollupOptions[]}
 */
const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: './lib/index.cjs.js',
                format: 'cjs',
                sourcemap: isDev
            },
            {
                file: './lib/index.esm.js',
                format: 'es',
                sourcemap: isDev
            },
            {
                file: './lib/index.umd.js',
                name: "UnitConversion",
                format: 'umd',
                sourcemap: isDev
            }
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json'
            }),
            ...prodPlugins
        ]
    },
    {
        input: "src/index.ts",
        output: [
            {
                file: "lib/index.d.ts",
                format: "es"
            }
        ],
        plugins: [dts()]
    }
]
export default config;