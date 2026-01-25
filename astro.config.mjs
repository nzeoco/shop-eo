import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // <--- Import this

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react() // <--- Add this to the list
  ]
});