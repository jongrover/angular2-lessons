var list_1 = require('./list');
var list = new list_1.List();
var Task = (function () {
    function Task(descr) {
        this.description = descr.value;
        list.tasks.push(this);
        console.log(list.tasks);
    }
    return Task;
})();
exports.Task = Task;
