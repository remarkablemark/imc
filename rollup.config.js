import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

/**
 * Build rollup config for development (default) or production (when minify is true).
 *
 * @param {Boolean} [minify=false]
 * @return {Object}
 */
const getConfig = (minify = false) => ({
  input: 'src/index.ts',
  output: {
    file: `umd/imc${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'IMC',
    sourcemap: true,
  },
  plugins: [typescript(), minify && uglify()],
});

export default [getConfig(), getConfig(true)];
