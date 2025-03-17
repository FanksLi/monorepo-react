import { defineConfig } from 'rolldown';
import babel from '@rollup/plugin-babel';


export default defineConfig({
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        name: 'MyReactComponents',
        format: 'es',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        })
    ],

    external: ['react', 'react-dom'],
});