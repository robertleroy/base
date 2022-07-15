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
      pages: 'docs', 
      assets: 'docs', 
      fallback: null,
      precompress: false
    }),

    paths: {
      base: '/base',
    },
    
    prerender: {
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
