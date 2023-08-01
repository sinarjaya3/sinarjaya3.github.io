// astro.config.ts
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import yaml from "vite-plugin-yaml2";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { presetTypography, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sinarjaya3.github.io",
  integrations: [
    UnoCSS({
      injectReset: true,
      // or a path to the reset file
      transformers: [transformerVariantGroup()],
      presets: [
        presetTypography(),
        presetUno(),
        presetIcons({
          /* options */
        }),
      ],
    }),
    svelte(),
    sitemap(),
  ],
  vite: {
    plugins: [yaml()],
  },
});
