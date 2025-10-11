import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" with { type: 'json' };;

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [peerDepsExternal(), typescript({ useTsconfigDeclarationDir: true })],
};