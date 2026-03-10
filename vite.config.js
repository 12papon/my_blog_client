import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // প্রোডাকশনে eval এরর এড়াতে এটি সাহায্য করে
  },
  server: {
    hmr: {
      overlay: false, // অনেক সময় এরর ওভারলে eval ব্যবহার করে
    },
  },
});
