# [Base](https://robertleroy.github.io/base/)

## Build and push
- **Un-Comment** paths variable in `svelte.config` for build
- **Save** all files
- **Build and push** to github
``` sh
npm run build
git add . && git commit -m "update"
git push
```
- **Comment** paths variable in `svelte.config` for dev
``` sh
npm run dev
```


<br><br><br>

stck-overflow workaround 
https://stackoverflow.com/questions/72730192/how-to-host-a-sveltekit-adapter-static-project-on-github-pages