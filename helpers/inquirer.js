require("colors");
const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "option",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".green);
  console.log("  Seleccione una opcion".white);
  console.log("=========================\n".green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = {
    type: "input",
    name: "description",
    message,
    validate(value) {
      if (value.length === 0) {
        return "Por favor ingrese una descripcion";
      }
      return true;
    },
  };

  const { description } = await inquirer.prompt(question);
  return description;
};

const deleteSelectedTask = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}.`.green;
    const { id, description } = task;
    return {
      value: id,
      name: `${index} ${description}`,
    };
  });
  choices.unshift({
    value: "0",
    name: "0.".green + "Cancelar",
  });

  const question = [{ type: "list", name: "id", message: "Borrar", choices }];
  const { id } = await inquirer.prompt(question);

  return id;
};

const confirmate = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
};

const showCheckList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}.`.green;
    const { id, description } = task;
    return {
      value: id,
      name: `${index} ${description}`,
      checked: task.dateComplete ? true : false,
    };
  });

  const question = [
    { type: "checkbox", name: "ids", message: "Selecciones", choices },
  ];
  const { ids } = await inquirer.prompt(question);

  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  deleteSelectedTask,
  confirmate,
  showCheckList,
};
