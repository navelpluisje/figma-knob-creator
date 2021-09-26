import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy-watch'

export default {
  input: './src/code.ts',
  output: {
    file: './dist/code.js',
    format: 'cjs'
  },

  plugins: [
    typescript(/*{ plugin options }*/),
    copy({
      watch: 'src',
      targets: [
        { src: 'src/ui/index.html', dest: 'dist/ui' },
      ]
    })
  ]
};
