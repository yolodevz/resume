import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      /** to resolve absolute imports in worskspace package */
      "@yolo/ui": path.resolve(__dirname, "../../packages/yolo-ui"),
      "@monogram/ui": path.resolve(__dirname, "../../packages/monogram-ui"),
    },
  },
});
