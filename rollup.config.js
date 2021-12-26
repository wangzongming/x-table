import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "umd",
			name: "XTable",
		},
		{
			file: "dist/index.min.js",
			format: "umd",
			name: "XTable",
			plugins: [terser()],
		},
		{
			file: "dist/index.es.js",
			format: "es", 
		},
	],
	plugins: [
		typescript(),
		resolve(),
		commonjs(),
		babel({
			babelrc: false,
			exclude: ["node_modules/**"],
			babelHelpers: "bundled",
			presets: [
				[
					"@babel/preset-env",
					{
						useBuiltIns: "usage",
						corejs: { version: "3.20.1", proposals: true },
					},
				],
			],
		}),
	],
};
