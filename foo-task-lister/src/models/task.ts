import { List } from './list';

export class Task {
  description: string;
  list: List;
  constructor(description, list) {
    this.list = List.all[parseInt(list.value)];
    this.description = description.value;
    this.list.tasks.push(this);
    console.log(List.all);
  }
}