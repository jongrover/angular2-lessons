var List = (function () {
    function List(name) {
        this.name = name.value;
        this.tasks = []; //list.tasks
        List.all.push(this);
    }
    List.all = []; //List.all
    return List;
})();
exports.List = List;
