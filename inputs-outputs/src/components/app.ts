///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Foo} from './foo';

@Component({
  selector: 'app',
  inputs: ['title']
})
@View({
  template: `
    <p>{{ greet }}</p>
    <foo [title]="janitor"></foo>
  `,
  directives: [Foo]
})
class App {
  greet: string;
  constructor(){
    this.greet = "Hello"; //private input (property)
  }
}

bootstrap(App);
