import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js', // Replace with your actual entry file
  output: {
    file: 'dist/bundle.js', // Replace with your actual output file
    format: 'es', // or 'iife' for browser
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
