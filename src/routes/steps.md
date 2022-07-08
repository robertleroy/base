
#### 1. Create Project
``` sh
# Init & follow prompts ~ svelte vite
npm init @svelte-add/kit@latest

# Add plugins
npm i -D postcss-nested
```
<br>

#### 2. Configure Plugins
``` js
/* postcss.config.cjs */
const autoprefixer = require("autoprefixer");
const postcss_nested = require('postcss-nested');

const config = {
  plugins: [
    autoprefixer, 
    postcss_nested
  ],
};

module.exports = config;
```
<br>

#### 3. ID app element
``` html
<!-- app.html -->
<body>
  <div id="app">%sveltekit.body%</div>
</body>
```
<br>

#### 4. Add `lib` structure & `styles` folder 
<br>

#### 5. import css files / add global base styles
<br>


``` css
/* app.css -- Write your global styles here, in PostCSS syntax */

@import '$lib/styles/variables.css'; 
@import '$lib/styles/base.css';
@import '$lib/styles/lists.css'; 
@import '$lib/styles/links.css'; 
@import '$lib/styles/forms.css'; 
@import '$lib/styles/shadows.css'; 
@import '$lib/styles/vs-dark.css'; 
/* @import '$lib/styles/codeblock.css';  */
/* @import '$lib/styles/blockquote.css';  */
/* @import '$lib/styles/tables.css';  */
```

<br>

#### 8. Git init
``` sh
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/robertleroy/base.git
git push -u origin main
```