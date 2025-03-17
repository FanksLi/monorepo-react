import { defineConfig } from 'rolldown';
import babel from '@rollup/plugin-babel';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import del from 'rollup-plugin-delete';


export default defineConfig({
    input: 'src/index.js',
    mode: 'development',
    output: {
        file: 'dist/index.js',
        name: 'MyReactComponents',
        format: 'es',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
        sourcemap: true // 确保启用源映射以支持 HMR
    },
    plugins: [
        del({ targets: ['dist/*'] }),
        htmlTemplate({
            target: 'dist/index.html',
            template: 'src/index.html'
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react', '@babel/preset-env']
        }),
        serve({
            open: true,
            contentBase: ['dist'],
            host: 'localhost',
            port: 3000
        }),
        livereload({
            watch: 'dist',
            verbose: false
        }),
    ],
});