import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

function serve(){
    let server;

    function toExit(){
        if(server)
            server.kill(0);
    }

    return {
        writeBundle() {
            if(server)
                return;
            
            server = require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
                stdio: ["ignore", "inherit", "inherit"],
                shell: true
            });

            process.on("SIGTERM", toExit);
            process.on("exit", toExit);
        }
    }
}

export default {
    input: "src/index.js",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "dist/build/bundle.js"
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production
            }
        }),

        postcss({
            extract: true
        }),

        resolve({
            browser: true,
            dedupe: ["svelte"]
        }),

        commonjs(),
        
        !production && serve(),
        !production && livereload("dist"),

        production && terser()
    ],
    watch: {
        clearScreen: false
    }
}