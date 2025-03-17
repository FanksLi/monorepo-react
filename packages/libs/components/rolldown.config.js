import { defineConfig } from 'rolldown';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';

export default defineConfig({
    input: 'src/elements/index.js',
    output: {
        file: 'build/index.js',
        name: 'MyReactComponents',
        format: 'es',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    plugins: [
        del({ targets: ['build/*'] }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react', '@babel/preset-env']
        }),
    ],
    external: ['react', 'react-dom'],
});