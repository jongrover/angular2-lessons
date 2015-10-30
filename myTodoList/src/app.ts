/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {List} from './models/list';

@Component({
  selector: 'app'
})
@View({
  directives: [NgFor],
  templateUrl: './src/views/app.html' //always set chromes network tab disable cache checkbox to checked or updates to this path will not change in the browser.
})
class App {

  lists: Array<List>;
  listName: string;

  constructor() {
    this.lists = [];
  }

  addList(listName){
    this.lists.push(new List(listName.value));
  }
}

bootstrap(App);