import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: "cjs",
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    nodeResolve(),
    postcss(),
    image(),
    commonjs(),
  ],
}