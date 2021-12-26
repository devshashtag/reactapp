# info                      
reactapp.ir template 

# todo
- [] refactor pages/courses/javascript js, scss, javascript
- [] refactor classes in all pages
- [] reafactor js files
- [] remove global.js if no needed
- [] remove lost-password and javascript.html from navbar while project completed
- [] convert transitions to mixins
- [] convert transform and flex to mixins
- [] create other pages
- [] optimize template
- [] minify js, css files with webpack
- [] land it on github pages
- [] export an kit-starter scss for later-use 


# npm scripts

## http server

*runs a **http server** on port **8000***

**command**:
```bash 
npm run server
```
**output**:
```console
> reactapp@1.0.0 server
> python scripts/http-server.py

Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

## sass compiler
*Auto-Compiles your **sass** files every time it changes* *`assets/scss/styles.scss` to `assets/css/styles.css`*

**command**:
```bash 
npm run sass
```

**output**:
```console
>  reactapp@1.0.0 sass
>  sass --watch assets/scss/styles.scss assets/css/styles.css

Sass is watching for changes. Press Ctrl-C to stop.
```



## new page creator
*create **html** pages, **sass** files and **javascript** files for new pages*

**command**:
```bash 
npm run new_page
```

**input**:
```console
terms.html
3
```

**output**:
```console
> reactapp@1.0.0 new_page
> chmod +x scripts/page_creator.sh; ./scripts/page_creator.sh

Enter html path (example: folder_name/file_name.html):
ReactApp/pages/terms.html
========================================
html file successfully created at:
ReactApp/pages/terms.html
========================================
scss path: ReactApp/assets/scss/pages/_terms.scss
js   path: ReactApp/assets/js/pages/terms.js
========================================
for scss file Enter 1
for js   file Enter 2
for both file Enter 3
for exit Enter other numbers
Enter a number: 3
========================================
scss file successfully created at:
> ReactApp/assets/scss/pages/_terms.scss
========================================
js file successfully created at:
> ReactApp/assets/js/pages/terms.js
========================================
```
