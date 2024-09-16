import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), icon(), tailwind(), mdx()],
  site: "https://www.aliabdoli.com",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
