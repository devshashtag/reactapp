# info

reactapp.ir template

# todo

## global todo

- [ ] define global colors
- [ ] remove all colors and use global colors [ each page 2 extra color ]
- [ ] refactor classes, scss files
- [ ] reafactor js files
- [ ] reafactor html files
- [ ] convert transitions, transform, flex to mixin ones
- [ ] optimize template
- [ ] create other pages

## devshashtag todo

- [x] scroll to top in pages/courses/javascript.html
- [x] \_variables move the sizes to the bottom of the colors
- [x] fix size of each cart in learning-steps
- [x] use components/\_main-banner for learning-steps banner
- [x] make footer responsive
- [x] create footer template in display.js
- [x] add footer with js
- [x] add footer to all pages
- [x] make forums responsive
- [x] forums pages > use root selector for styles
- [x] change .main class
- [x] fix forums size and add margin or padding into main content
- [x] change table heading color to lighter gray
- [x] remove footer extra padding
- [ ] javascript page > use root selector for styles
- [ ] create side-menu component
- [ ] javascript > change .main
- [x] courses/javascript remove repeated course chapter list
- [x] complete pages/terms.html main
- [x] complete pages/contact.html main
- [ ] refactor navbar, topbar, sidebar classes
- [x] add link to topbar icons
- [x] remove global.js if not used
- [x] check firefox issue on navbar>search-bar font
- [x] land it on github pages
- [ ] minify js, css files with webpack
- [ ] export an kit-starter scss for later-use
- [ ] format/reafactor all html files
- [ ] format/reafactor all scss files
- [ ] format/reafactor all js files

## david todo

- [x] fix comment section in pages/courses/javascript js
- [x] fix size of each cart in learning-steps
- [x] fix send-comment section border and box-shadow
- [x] remove extra padding from send-comment
- [ ] format html
- [ ] format/refactor scss

## kamal-h todo

- [ ] fix cart fonts
- [ ] fix cursor pointer in carts
- [ ] fix cursor pointer in posts
- [ ] add urls for each cart
- [ ] add cursor pointer for search button in pages/blog.html
- [ ] format html
- [ ] format scss
- [ ] format js

# npm scripts

## http server

\*runs a **http server** on port **8000\***

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

_Auto-Compiles your **sass** files every time it changes_ _`assets/scss/styles.scss` to `assets/css/styles.css`_

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
