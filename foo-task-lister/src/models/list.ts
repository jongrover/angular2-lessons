export class List {
  name: string;
  tasks: Array<string>;
  constructor(name) {
    this.name = name.value;
    this.tasks = []; //list.tasks
    List.all.push(this);
  }
  static all = []; //List.all
}