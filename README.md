# info                      
reactapp.ir template 

# todo
## global todo
- [ ] define global colors
- [ ] remove all colors and use global colors [ each pages 2 extra color ]
- [ ] refactor pages/courses/javascript js, scss, javascript
- [ ] refactor classes, scss files
- [ ] reafactor js files
- [ ] reafactor html files
- [ ] convert transitions, transform, flex to mixin ones
- [ ] optimize template
- [ ] create other pages

## devshashtag todo
- [x] scroll to top in pages/courses/javascript.html
- [ ] \_variables change colors order and sizes
- [ ] create footer template 
- [ ] add footer with js
- [ ] add footer to all pages
- [ ] complete pages/terms.html, pages/contact.html 
- [ ] refactor navbar, topbar, sidebar classes
- [ ] add link to topbar icons
- [ ] remove global.js if not used
- [ ] check firefox issue on search-bar in navbar letter-spacing
- [ ] remove lost-password, javascript.html, my-account.html from navbar while project completed
- [ ] land it on github pages
- [ ] minify js, css files with webpack
- [ ] export an kit-starter scss for later-use 

## sajjad todo
- [ ] use root selector for styles
- [ ] create side-menu component
- [ ] change .main, .comment class 

## david todo
- [x] fix comment section in pages/courses/javascript js
- [ ] fix size of each cart in learning-steps
- [ ] fix send-comment section border and box-shadow
- [ ] remove extra padding from send-comment

## kamal-h todo
- [ ] fix cart fonts 
- [ ] fix cursor pointer in carts
- [ ] fix cursor pointer in posts
- [ ] add urls for each cart
- [ ] add cursor pointer for search button in pages/blog.html

## ansari todo
- [ ] use root selector for styles
- [ ] change .main class 
- [ ] fix forums size and add margin or padding into main content
- [ ] fix footer responsive
- [ ] change table heading color to lighter gray
- [ ] remove footer extra padding


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
