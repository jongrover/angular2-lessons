/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Component, View } from 'angular2/angular2';
// model dependencies
import { Task } from '../models/task';

@Component({
  selector: 'newtask'
})
@View({
  templateUrl: 'src/views/task.html'
})
export class NewTask {
  task: Task;
  createTask(description){
    this.task = new Task(description);
    description.value = "";
  }
} 