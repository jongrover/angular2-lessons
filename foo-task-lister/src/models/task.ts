import { List } from './list';

var list = new List();

export class Task {
  description: string;
  constructor(descr) {
    this.description = descr.value;
    list.tasks.push(this);
    console.log(list.tasks);
  }
}