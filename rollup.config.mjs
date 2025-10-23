import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import fs from "fs";
const pkg = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url)));

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,        // CommonJS
      format: "cjs",
      sourcemap: true,
      exports: "named",      // ensures named exports work
    },
    {
      file: pkg.module,      // ES Module
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto", // helps with CJS interop
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.stories.tsx"],
      },
    }),
  ],
};
