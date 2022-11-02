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

  listPendingCompletedTask(complete = true) {
    console.log();
    let index = 0;
    this.getTaskList.forEach((task) => {
      const { description, dateComplete } = task;
      const state = dateComplete ? "Completada".green : "Pendiente".red;

      if (complete) {
        // Mostrar Completadas
        if (dateComplete) {
          index += 1;
          console.log(`${index.toString().green}. ${description} :: ${state}`);
        }
      } else {
        // Mostrar Pendientes
        if (!dateComplete) {
          index += 1;
          console.log(`${index.toString().green}. ${description} :: ${state}`);
        }
      }
    });
  }

  deleteTaks(id = "") {
    if (this.tasksList[id]) {
      delete this.tasksList[id];
    }
  }
}

module.exports = Tasks;
