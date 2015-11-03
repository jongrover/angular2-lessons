/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Component, View, NgFor } from 'angular2/angular2';
// model dependencies
import { List } from '../models/list';
import { Task } from '../models/task';

@Component({
  selector: 'newtask'
})
@View({
  templateUrl: 'src/views/newTask.html',
  directives: [NgFor]
})
export class NewTask {
  task: Task;
  lists: Array<List>;
  constructor(){
    this.lists = List.all;
  }
  createTask(description, list){
    this.task = new Task(description, list);
    description.value = "";
  }
} 