// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',  // Make sure this is 'static' or 'dist' depending on your setup
  adapter: 'static', // Use the default static adapter
  base: '/blog/',    // Ensure your base path is correctly set
});
