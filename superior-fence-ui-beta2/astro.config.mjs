import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    
  ],
  output: "server",
  // adapter: vercel({
  //   devImageService: "sharp",
  // }),
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 14258, // Use the desired port
  },
  vite: {
    optimizeDeps: {
      include: ["@apollo/client"],
    },
  },
});
