 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  base: "/portfolio/", // Change "portfolio" to your repo name
  plugins: [react()],
});
