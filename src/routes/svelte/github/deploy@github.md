## Build & Deploy


<br>


1. Uncomment **paths/base** variable of **svelte.config.js**
2. Save all files
3. Build & Push

``` sh
npm run build
git add . && git commit -m "update"
git push
```  

4. Comment **paths/base** variable of **svelte.config.js** for dev server