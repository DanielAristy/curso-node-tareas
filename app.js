require("colors");

const {
  inquirerMenu,
  pause,
  readInput,
  deleteSelectedTask,
  confirmate,
  showCheckList,
} = require("./helpers/inquirer");
const { save, read } = require("./helpers/file");
const Tasks = require("./models/Tasks");

console.clear();

const main = async () => {
  let option = "";

  const tasks = new Tasks();

  const taskDB = read();

  if (taskDB) tasks.loadTasks(taskDB);

  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await readInput("Descripcion:");
        tasks.createTask(description);
        break;
      case "2":
        tasks.fullListing();
        break;
      case "3":
        tasks.listPendingCompletedTask();
        break;
      case "4":
        tasks.listPendingCompletedTask(false);
        break;
      case "5":
        const ids = await showCheckList(tasks.getTaskList);
        tasks.toggleComplete(ids);
        break;
      case "6":
        const id = await deleteSelectedTask(tasks.getTaskList);
        if (id !== "0") {
          const ok = await confirmate("Estas seguro?");
          if (ok) {
            tasks.deleteTaks(id);
          }
        }
        break;
    }

    save(tasks.getTaskList);

    if (option !== "0") await pause();
  } while (option !== "0");
};

main();
