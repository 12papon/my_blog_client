import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // প্রোডাকশনে eval এরর এড়াতে এটি সাহায্য করে
    outDir: "dist", // বিল্ড ফোল্ডারের নাম (ডিফল্ট এটিই থাকে)
    emptyOutDir: true, // প্রতিবার বিল্ড করার সময় পুরনো ফাইল মুছে ফেলবে
    minify: "esbuild", // দ্রুত মিনিফিকেশনের জন্য এটি স্ট্যান্ডার্ড
  },
  server: {
    hmr: {
      overlay: false, // অনেক সময় এরর ওভারলে eval ব্যবহার করে
    },
  },
  base: import.meta.env === "production" ? "./" : "/", // এই লাইনটি সব পাথকে রিলেটিভ (./) করে দেবে
});
