import { defineConfig } from 'vite'

// Allow overriding the base at build time so we can produce a build for
// GitHub Pages (which serves from /<repo>/) while keeping a default
// relative base for local testing.
// Usage:
//  - Local build (default): npm run build  => base './'
//  - GitHub Pages build: npm run build:gh => base '/Oslo-Toastmaters-Meeting/'
const base = process.env.BUILD_BASE || process.env.VITE_BASE || './'

export default defineConfig({
  base,
})
