import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set this to your GitHub repo name, e.g. '/portfolio/'
// For a user/org page (username.github.io), set to '/'
const REPO_NAME = '/portfolio-site/'

export default defineConfig({
  base: REPO_NAME,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
