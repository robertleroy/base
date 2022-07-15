<script>
  // import { page } from '$app/stores';
  import { base } from '$app/paths';
	// import { svelteNav, sidebarOpen } from '$lib/stores/store';
	// import { titlecase } from '$lib/stores/filters';
  
</script>

## Github Pages

#### Adapter-Static
``` sh
npm i -D @sveltejs/adapter-static
npm uninstall @sveltejs/adapter-auto
```

#### .nojekyll File
* Create **.nojekyll** file in **static** folder

#### Svelte Config
``` js
/* Add these options to your config file" */

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {

  kit: {
    adapter: adapter({
      pages: 'docs', 
      assets: 'docs', 
    }),

    paths: {
      // base: '/REPO_NAME',
    },

    trailingSlash: 'ignore',
  },
};

export default config;
```

#### Paths { base } bug [workaround](https://stackoverflow.com/questions/72730192/how-to-host-a-sveltekit-adapter-static-project-on-github-pages)  &nbsp; ~ &nbsp; [more info](https://github.com/sveltejs/kit/issues/4528)  
  
* Each page with relative links need to import base
``` js
import { base } from '$app/paths';
```
* All relative links need to be prefaced by **base**

``` html 
<div class:active='{base + url === $page.url.pathname}'>
  <a href="{base}{url}">{title}</a>
</div>
```
* For dev-server, comment out **paths/base** variable of **svelte.config**
* Uncomment **paths/base** variable before pushing to github.
* Save all files, build, push
``` sh
npm run build
git add . && git commit -m "update"
git push
```
* Comment **paths/base** variable of **svelte.config**


<br><br><br>
