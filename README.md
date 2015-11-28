# Angular 2 Lesson Code

Examples from [Angular.io](https://angular.io/docs)

## Configuration

First install Node and NPM, then:

$ `npm install -g tsd@^0.6.0`

$ `npm install -g typescript@^1.5.0-beta`

$ `npm install -g http-server`

Install Angular into the project folder using:

$ `tsd install angular2 es6-promise rx rx-lite`

Tell TypeScript to watch file for changes and compile to ECMAScript5:

$ `tsc --watch -m commonjs -t es5 --emitDecoratorMetadata <your-file-to-watch>.ts`

Run HTTP-Server:

$ `http-server`

## Updated Instructions Nov 2015

Reccomended NPM 3.5.0 and Node v5.1.0 if you have lesser version it is reccomended you first install [NVM](https://github.com/creationix/nvm)

Then install latest version of node using nvm:

$ `nvm install node`

Then install latest version of npm:

$ `npm install -g npm`

Create a package.json for new apps:

$ `npm init -y`

Add angular2 and typescript:

$ `npm i angular2@2.0.0-alpha.44 systemjs@0.19.2 --save --save-exact`

$ `npm i typescript live-server --save-dev`

