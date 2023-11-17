import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        cityguard: 'cityguard.html',
        fieldwork: 'fieldwork.html',
        foodpile: 'foodpile.html',
        heatscape: 'heatscape.html',
        dataviz: 'dataviz.html',
        digitalart: 'digitalart.html' 
      }
    }
  }
});
