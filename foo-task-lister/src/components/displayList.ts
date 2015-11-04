/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Component, View, NgFor } from 'angular2/angular2';
//model dependencies
import { List } from '../models/list';

@Component({
  selector: 'displaylist'
})
@View({
  templateUrl: 'src/views/displayList.html',
  directives: [NgFor]
})
export class DisplayList {
  lists: Array<List>;
  constructor(){
    this.lists = List.all;
  }
  destroy(obj){
    List.all[obj.list].tasks.splice(obj.task, 1);
  }
}