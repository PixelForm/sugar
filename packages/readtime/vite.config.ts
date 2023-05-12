import { defineConfig } from 'vite'
import path from 'path'
import * as url from 'url'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve( __dirname, 'src/main.ts' ),
            name: 'sugarReadtime',
            formats: [ 'iife' ],
            fileName: () => 'readtime.js'
        }
    }
})