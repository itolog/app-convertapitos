import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-ignore
import oxlintPlugin from 'vite-plugin-oxlint'
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        oxlintPlugin({
            path: 'src',
        }),
        eslintPlugin()],
})
