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