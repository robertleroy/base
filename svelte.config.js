import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';
// console.log("NODE_ENV", dev);
/*
Changing base seems to change {process.env.NODE_ENV === 'development'} to false ..??..
*/

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs', /* +++++++++++ */
      assets: 'docs', /* +++++++++++ */
      // pages: 'build',
      // assets: 'build',
      fallback: null,
      precompress: false
    }),

    paths: {
      base: '/base',
    },
    
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    },

    trailingSlash: 'ignore',
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
};

export default config;
