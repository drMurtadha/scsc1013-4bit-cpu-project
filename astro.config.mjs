import { defineConfig } from 'astro/config';
import rehypeDoc from './plugins/rehype-doc.mjs';

export default defineConfig({
  site: 'https://drmurtadha.github.io',
  base: '/scsc1013-4bit-cpu-project',
  markdown: { rehypePlugins: [rehypeDoc] },
});
