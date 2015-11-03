/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Component, View } from 'angular2/angular2';
// model dependencies
import { List } from '../models/list';

@Component({
  selector: 'newlist'
})
@View({
  templateUrl: 'src/views/newList.html'
})
export class NewList {
  list: List;
  createList(name) {
    this.list = new List(name);
    name.value = '';
  }
}