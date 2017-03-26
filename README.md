# ng4 - Small Angular 4 Projects for Learning and Fun

## First App

__Download Node.js, if necessary__

I tried to upgrade to the latest version (7.7.4 with npm 4.1.2), but was then unable to install the Angular CLI (see below), so I downgraded to the LTS version (6.10.1 with npm 3.10.10). I was then able to install the CLI and create a new Angular app (see below). NOTE: I ran `$ npm cache clean` after each Node.js installation to make sure a package isn't loading anything from npm's cache. Not sure if that was necessary.

__Install CLI tool and create new app__

```
$ npm install -g @angular/cli
$ ng new app1 # 'app1' is the name of the new app
```

__Build and serve it__

```
$ ng serve
```

Visit http://localhost:4200 and you should see "app works!"

## CLI Deep Dive & Troubleshooting

If you want to dive deeper into the CLI and learn more about its usage, have a look at its official documentation: https://github.com/angular/angular-cli/wiki

You encountered issues during the installation of the CLI or setup of a new Angular project?

A lot of problems are solved by making sure you're using the latest version of NodeJS, npm and the CLI itself.

__Updating Node.js__

Go to http://nodejs.org and download the latest version. May be good/necessary to uninstall older versions first (Google it).

__Updating npm__

```
$ npm install -g npm
```
(`sudo` may be required on Mac/Linux)

__Updating the CLI__

```
$ npm uninstall -g angular-cli @angular/cli
$ npm cache clean
$ npm install -g @angular/cli
```

__Some common issues & solutions__

1. EADDR error (Address already in use). You might already have another ng serve process running - make sure to quit that or use `$ ng serve --port ANOTHERPORT` to serve your project on a new port

2. Changes not reflected in browser (App is not compiling). Check if the window running `$ ng serve` displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI

## Install Bootstrap

From inside the `app1` folder:
```
$ npm i -S bootstrap
```

Edit the `.angular-cli.json` file to include Bootstrap:
```
"../node_modules/bootstrap/dist/css/bootstrap.min.css",
```

## How an Angular App Gets Loaded and Started

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655700?start=0)

## Creating a New Component

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655710?start=0)

## Understanding the Role of AppModule and Component Declaration

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655726?start=0)

## Using Custom Components

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655732?start=0)

## Creating Components with the CLI & Nesting Components

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655742?start=0)

Example: Generate `servers` component:
```
$ ng generate component servers
```
Same command using shorthand syntax:
```
$ ng g c servers
```

## Formatting With *Prettier*

While I've used Sublime and experimented with WebStorm and VS Code, I'm currently using Atom. To format code, I'm currently using the [prettier-atom package](https://atom.io/packages/prettier-atom).
