///<reference path="../../typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'foo'
})
@View({
  template: `
    <p>{{title}}</p>
    `
})
export class Foo {
  //title: string;
  constructor(){
    //this.title = "cowboy";
  }
}