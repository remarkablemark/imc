import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'umd/imc.js',
    format: 'umd',
    name: 'IMC',
  },
  plugins: [typescript()],
};
