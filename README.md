# ng4 - Small Angular 4 Projects for Learning and Fun

## First App

__Download Node.js, if necessary__

I tried to upgrade to the latest version (7.7.4 with npm 4.1.2), but was then unable to install the Angular CLI (see below), so I downgraded to the LTS version (6.10.1 with npm 3.10.10). I was then able to install the CLI and create a new Angular app (see below). NOTE: I ran `$ npm cache clean` after each Node.js installation to make sure a package isn't loading anything from npm's cache. Not sure if that was necessary.

__Install CLI tool and create new app__

```
$ npm install -g @angular/cli
$ ng new app1
```

__Build and serve it__

```
$ ng serve
```

Visit http://localhost:4200 and you should see "app works!"
