const Task = require("./Task");


class Tasks {
    tasksList = {};

    get getTaskList(){
        const list = [];
        Object.keys(this.tasksList).forEach(key => {
            list.push(this.tasksList[key])
        });
        return list;
    }

    constructor(){
        this.tasksList = {};
    }

    createTask( description = ''){
        const task = new Task(description);
        this.tasksList[task.id] = task
    }

    loadTasks( tasks = [] ){
        tasks.forEach(task => {
            this.tasksList[task.id] = task;
        });
    }
}

module.exports = Tasks;