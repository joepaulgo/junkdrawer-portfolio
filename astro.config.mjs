import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [],
  // Enable type checking
  typescript: {
    // Enable TypeScript strict mode
    strict: true,
    // Enable TypeScript type checking
    typeCheck: true
  }
});