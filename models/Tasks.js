const Task = require("./Task");
const colors = require("colors");

class Tasks {
  tasksList = {};

  get getTaskList() {
    const list = [];
    Object.keys(this.tasksList).forEach((key) => {
      list.push(this.tasksList[key]);
    });
    return list;
  }

  constructor() {
    this.tasksList = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this.tasksList[task.id] = task;
  }

  loadTasks(tasks = []) {
    tasks.forEach((task) => {
      this.tasksList[task.id] = task;
    });
  }

  fullListing() {
    console.log();
    this.getTaskList.forEach((task, i) => {
      const index = `${i + 1}.`.green;
      const { description, dateComplete } = task;
      const state = dateComplete ? "Completada".green : "Pendiente".red;
      console.log(`${index} ${description} :: ${state}`);
    });
  }
}

module.exports = Tasks;
