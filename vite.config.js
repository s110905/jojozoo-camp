import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/jojozoo-camp/", // ← repo 名稱（你的是 jojozoo-camp）
});
