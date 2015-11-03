var list_1 = require('./list');
var Task = (function () {
    function Task(description, list) {
        this.list = list_1.List.all[parseInt(list.value)];
        this.description = description.value;
        this.list.tasks.push(this);
        console.log(list_1.List.all);
    }
    return Task;
})();
exports.Task = Task;
