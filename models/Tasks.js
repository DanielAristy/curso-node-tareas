const Task = require("./Task");


class Tasks {
    tasksList = {};

    constructor(){
        this.tasksList = {};
    }

    createTask( description = ''){
        const task = new Task(description);
        this.tasksList[task.id] = task
    }
}

module.exports = Tasks;