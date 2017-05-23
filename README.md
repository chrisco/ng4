# ng4 - Small Angular 4 Projects for Learning and Fun

## First App (`app1`)

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
``` javascript
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

While I've used Sublime and experimented with WebStorm and VS Code, I'm currently using Atom. To format code, I'm currently using the [prettier-atom package](https://atom.io/packages/prettier-atom). `Ctrl + Alt + F`

## Fully Understanding the Component Selector

You can select by element (e.g., `<app-servers></app-servers>`), attribute (e.g. `<div app-servers></div>`), or class (e.g., `<div class="app-servers"></div>`). You __can't__ select by id. Typically use elements with/for components.

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655772?start=0)

## Practice Making Components (`ass1`)

* Generated one with `$ ng g c SuccessAlert` and one by hand.
* Used `templateUrl` and `StyleUrls` with one and  `template` and `styles` (i.e., 'inline') with the other.
* Used applicable Bootstrap `alert` classes. See this [video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/practice/266/instructor-solution) for style-by-hand example.

## Data Binding

__Videos__

1. [String Interpolation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655804?start=0) uses `{{ someString }}`
2. [Property Binding](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655806?start=0) uses `[someProperty]`
3. [Event Binding](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655820?start=0) uses `(someEvent)`
4. Combine 'Property' and 'Event' binding with `[(ngModel)]="someProperty"`

[Property Binding vs String Interpolation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655814?start=0)

__Which Properties and Events can you bind to?__

Pretty much all of them. Use `console.log(foo)` to see something properties and events.

Example: Binging a method to a click event:
``` html
<button class="btn btn-primary" (click)="doSomething()">Do Something</button>
```

## Passing and Using Data with Event Binding

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655832?start=0)

## Two-Way Data Binding

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655868?start=0)

For Two-Way-Binding to work, you need to enable the `ngModel`  directive. This is done by adding the `FormsModule`  to the `imports[]`  array in the `AppModule`. You then also need to add the import from `@angular/forms`  in the `app.module.ts` file:
``` javascript
import { FormsModule } from '@angular/forms';
```

## Directives

Directives are instructions in the DOM (Components are a type of Directive with a template). Typically add directives with an Attribute selector (but can add with the other ways as well, if want/necessary).

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655898?start=0)

__ngIf Example__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655904?start=0)

``` javascript
<p *ngIf="serverCreated">Server was created, server name is {{ serverName }}</p>
```
The `*` is required because ngIf is a __Structural Directive__, which means it changes the structure of the DOM (in this case, it either adds the Element or it doesn't).

__ngIf else Example__

[Vide](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655984?start=0)

``` html
<p *ngIf="serverCreated; else noServer">Server was created, server name is {{ serverName }}</p>
<ng-template #noServer>
  <p>Server has not been created yet</p>
</ng-template>
```

The `noServer` is called a 'Local Reference.'

__ngStyle__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655914?start=0)

`ngStyle` is and __Attribute Directive__. Unlike Structural Directives, Attribute Directives don't *add* or *remove* elements. Instead, they *change* the element they are placed on.

__ngClass__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655924?start=0)

__ngFor__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655930?start=0)

## Course Project (`proj1`)

A recipe book / shopping list app. See [video clip](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655594?start=14s).

__Intro Videos__

1. [Intro](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656000?start=0)
2. [Planning](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656004?start=0)
3. [Setup](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656008?start=0)

__Project Setup__

```
$ ng new proj1
$ cd proj1
$ ng serve
```

__Install Bootstrap__

```
$ npm i -S bootstrap
```

Edit `.angular-cli.json` to add `"../node_modules/bootstrap/dist/css/bootstrap.min.css",` line to `styles` array. Edit `app.component.html` to 'Hello World' Bootstrap.

```
$ ng serve
```

__Create Components__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656014?start=60)

1. Create `header` component manually (for practice).
2. Create all other components with the CLI:

```
$ ng g c recipes --spec false
$ ng g c recipes/recipe-list --spec false
$ ng g c recipes/recipe-list/recipe-item --spec false
$ ng g c recipes/recipe-detail --spec false
$ ng g c shopping-list --spec false
$ ng g c shopping-list/shopping-edit --spec false
```

__Place Components__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656016?start=0)

__Unix Command to Find and Remove Files__

I used this to remove files ending in .orig after using resolving merge conflict:
```
$ find . -type f -name '*.orig' -delete
```
1. [Source](http://unix.stackexchange.com/a/116390/224872) (StackExchange *Recursively delete all files with a given extension*)
2. [More about the `find` command]( https://www.cyberciti.biz/faq/howto-find-a-file-under-unix/) (CyberCiti.biz FAQ)

__Configure Navbar__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656020?start=0)

__Create Recipe Model__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656026?start=0)

__Design RecipeItem__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656030?start=0)

__Output List of Recipes With ngFor__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656034?start=0)

__Design RecipeDetail__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656036?start=0)

__Design ShoppingListComponent__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656038?start=0)

__Create Ingredient Model__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656040?start=0)

__Creating and Outputting the Shopping List__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656042?start=0)

__Design ShoppingEditComponent__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656046?start=0)

__Next Steps__

[Video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656048?start=0)

## Debugging Videos

1. [Angular Error Messages](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656252?start=0)
2. [Debugging Code in the Browser Using Sourcemaps](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656260?start=0)
3. [Using Augury to Dive into Angular Apps](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656262?start=0)

## Components & Databinding Deep Dive

* [Intro](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656058?start=0)
* [Splitting Apps into Components](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656060?start=0)
* [Property & Event Binding Overview](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656062?start=0)
* [Binding to Custom Properties](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656066?start=0) (good video to rewatch)
* [Assigning an Alias to Custom Properties](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656072?start=0)
* [Binding to Custom Events](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656076?start=0) (good video to rewatch)
* [Assigning an Alias to Custom Events](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656078?start=0)
* [Custom Property and Event Binding Summary](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656080?start=0)
* [Understanding View Encapsulation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656082?start=0)
* [More on View Encapsulation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656086?start=0)
* [Using Local References in Templates](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656092?start=0) (good video to rewatch)
* [Getting Access to the Template & DOM with @ViewChild](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656094?start=0) (good video to rewatch)
* [Projecting Content into Components with ng-content](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656100?start=0) (good video to rewatch)
* [Understanding the Component Lifecycle, such as ngOnInit](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656102?start=0) (good video to rewatch)
* [Seeing Lifecycle Hooks in Action](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656106?start=0) (good video to rewatch)
* [Lifecycle Hooks and Template Access](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656110?start=0) (good video to rewatch)
* [Getting Access to ng-content with @ContentChild](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656114?start=0) (good video to rewatch)
* [Wrap Up](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656116?start=0)

## Practicing Property & Event Binding and View Encapsulation (`ass4-cmps-dbnd`)

Great practice. See [video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/practice/272/introduction) and [commits](https://github.com/chrisco/ng4/commits/master) for details (`$ git log --grep="Ass 4"`).

## 6. Course Project, Continued (`proj1`)

__Videos__

* [Adding Navigation with Event Binding and ngIf](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656142?start=0)
* [Passing Recipe Data with Property Binding](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656142?start=0)
* [Passing Data with Event and Property Binding (Combined)](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656144?start=0)
* [Allowing the User to Add Ingredients to the Shopping List](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656156?start=0)

## 7. Directives Deep Dive

__Videos__

* [Module Introduction](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656162?start=0)
* [ngFor and ngIf Recap](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656164?start=0)
* [ngClass and ngStyle Recap](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656166?start=0)
* [Creating a Basic Attribute Directive](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656170?start=0)
* [Using the Renderer to build a Better Attribute Directive](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656172?start=0)
```
$ ng g d better-highlight --spec false
```
* [More about the Renderer](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6730946?start=0)
* [Using HostListener to Listen to Host Events](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656176?start=0)
* [Using HostBinding to Bind to Host Properties](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656178?start=0)
* [Binding to Directive Properties](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656180?start=0)
* [What Happens behind the Scenes on Structural Directives](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656182?start=0)
* [Building a Structural Directive](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656186?start=0)
* [Understanding ngSwitch](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656188?start=0)

## 8. Course Project - Directives

[Building and Using a Dropdown Directive video](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656192?start=0)

## 9. Using Services & Dependency Injection

__Videos__

* [What Are Services](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656200?start=0)
* [Why would you Need Services?](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656206?start=0)
* [Creating a Logging Service](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656208?start=0)
* [Injecting the Logging Service into Components](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656210?start=0)
  * [Bug and bugfix with `npm install zone.js@0.8.5 --save`](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/questions/2245542)
* [Creating a Data Service](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656214?start=0)
* [Understanding the Hierarchical Injector](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656218?start=0)
* [How many Instances of Service Should It Be?](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656222?start=0)
* [Injecting Services into Services](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656224?start=0)
* [Using Services for Cross-Component Communication](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656226?start=0)

__Practice__

* [Assignment 5: Practicing Services](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/practice/274)
* [A Solution](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/practice/274/instructor-solution)

# 10. Course Project - Services & Dependency Injection

__Videos__

* [Introduction](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656232?start=0)
* [Setting up the Services](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656234?start=0)
* [Managing Recipes in a Recipe Service](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656236?start=0)
* [Using a Service for Cross-Component Communication](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656238?start=0)
* [Adding the Shopping List Service](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656240?start=0)
* [Using Services for "Push Notifications"](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656242?start=0)
* [Adding Ingredients to Recipes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656244?start=0)
* [Passing Ingredients from Recipes to the Shopping List (via a Service)](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656246?start=0)

## 11: Changing Pages with Routing

* [Module Introduction](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656272?start=0)
* [Why do we need a Router?](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656274?start=0)
* [Understanding the Example Project](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656276?start=0)
* [Setting up and Loading Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656280?start=0)
* [Navigating with Router Links](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656284?start=0)
* [Understanding Navigation Paths](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656286?start=0)
* [Styling Active Router Links](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656288?start=0)
* [Navigating Programmatically](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656292?start=0)
* [Using Relative Paths in Programmatic Navigation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656294?start=0)
* [Passing Parameters to Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656296?start=0)
* [Fetching Route Parameters](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656298?start=0)
* [Fetching Route Parameters Reactively](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656302?start=0)
* [An Important Note about Route Observables](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656306?start=0)
* [Passing Query Parameters and Fragments](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656308?start=0)
* [Retrieving Query Parameters and Fragments](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656314?start=0)
* [Practicing and some Common Gotchas](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656318?start=0)
* [Setting up Child (Nested) Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656322?start=0)
* [Using Query Parameters - Practice](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656326?start=0)
* [Configuring the Handling of Query Parameters](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656330?start=0)
* [Redirecting and Wildcard Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656332?start=0)
* [Important: Redirection Path Matching](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656336?start=0)
* [Outsourcing the Route Configuration](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656338?start=0)
* [An Introduction to Guards](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656340?start=0)
* [Protecting Routes with canActivate](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656342?start=0)
* [Protecting Child (Nested) Routes with canActivateChild](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656356?start=0)
* [Using a Fake Auth Service](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656350?start=0)
* [Controlling Navigation with canDeactivate](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656346?start=0) (good video to rewatch)
* [Passing Static Data to a Route](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656358?start=30)(good video to rewatch)
* [Resolving Dynamic Data with the Resolve Guard](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656360?start=0)(good video to rewatch)
* [Understanding Location Strategies](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656364?start=0)

## 12: Course Project - Routing

* [Planning the General Structure](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656374?start=0)
* [Setting Up Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656376?start=0)
* [Adding Navigation to the App](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656380?start=0)
* [Marking Active Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656386?start=0)
* [Fixing Page Reload Issues](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656388?start=0)
* [Child Routes: Challenge](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656394?start=0)
* [Adding Child Routing Together](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656400?start=0)
* [Configuring Route Parameters](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656402?start=0)
* [Passing Dynamic Parameters to Links](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656420?start=0)
* [Styling Active Recipe Items](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656426?start=0)
* [Adding Editing Routes](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656428?start=0)
* [Retrieving Route Parameters](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656434?start=0)
* [Programmatic Navigation to the Edit Page](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656442?start=0)
* [One Note about Route Observables](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656444?start=0)
* [Project Cleanup](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656448?start=0)

## 13: Understanding Observables

* [Module Introduction](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656534?start=0)
* [Analyzing a Built-in Angular Observable](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656536?start=0)
* [Building & Using a First Simple Observable](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656538?start=0)
* [Building & Using a Custom Observable from Scratch](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656540?start=0)
* [Unsubscribe!](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656544?start=0)
* [Where to learn more](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656546?start=0)
* [Using Subjects to Pass AND Listen to Data](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656548?start=0)
* [Understanding Observable Operators](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656550?start=0)
* [Wrap Up](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656552?start=0)

## 14: Course Project - Observables

* [Improving the Reactive Service with Observables (Subjects)](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656558?start=0)

## 15 Handling Forms in Angular Apps

* [Module Introduction](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656450?start=0)
* [Why do we Need Angular's Help?](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656454?start=0)
* [Template-Driven (TD) vs Reactive Approach](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656458?start=0)
* [An Example Form](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656460?start=0)
* [TD: Creating the Form and Registering the Controls](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656462?start=0)
* [TD: Submitting and Using the Form](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656464?start=0)
* [TD: Understanding Form State](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656466?start=0)
* [TD: Accessing the Form with @ViewChild](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656468?start=0)
* [TD: Adding Validation to check User Input](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656470?start=0)
* [Built-in Validators & Using HTML5 Validation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656496?start=0)
  * For the Template-driven approach, you need the directives. Find their names by searching for "validator" [here](https://angular.io/docs/ts/latest/api/#!?query=validator) in the Angular docs. Everything marked with "D" is a directive and can be added to your template.
  * For the Reactive approach, see the Angular docs [Validators class](https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html)
  * You can also enable HTML5 validation (by default, Angular disables it) by adding the `ngNativeValidate` to a control in your template.
* [TD: Using the Form State](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656472?start=0)
* [TD: Outputting Validation Error Messages](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656476?start=0)
* [TD: Set Default Values with ngModel Property Binding](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656478?start=0)
* [TD: Using ngModel with Two-Way-Binding](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656480?start=0)
* [TD: Grouping Form Controls](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656484?start=0)
* [TD: Handling Radio Buttons](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656486?start=0)
* [TD: Setting and Patching Form Values](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656488?start=0)
* [TD: Using Form Data](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656490?start=0)
* [TD: Resetting Forms](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656492?start=0)
* [Assignment 6: Practicing Template-Driven Forms](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/practice/276/introduction)
* [Assignment 6: Instructor Solution](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/practice/276/instructor-solution) (good video to rewatch)
* [Introduction to the Reactive Approach](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656498?start=0)
* [Reactive: Setup](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656500?start=0)
* [Reactive: Creating a Form in Code](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656502?start=0)
* [Reactive: Syncing HTML and Form](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656504?start=0)
* [Reactive: Submitting the Form](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656506?start=0)
* [Reactive: Adding Validation](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656508?start=0)
* [Reactive: Getting Access to Controls](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656510?start=0)
* [Reactive: Grouping Controls](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656512?start=0)
* [Reactive: Arrays of Form Controls (FormArray)](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656514?start=0)
* [Reactive: Creating Custom Validators](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656518?start=0)
* [Reactive: Using Error Codes]()
* [Reactive: Creating a Custom Async Validator]()
* [Reactive: Reacting to Status or Value Changes]()
* [Reactive: Setting and Patching Values]()
* [Assignment 7: Practicing Reactive Forms]()
