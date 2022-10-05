require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/Tasks');


console.clear()

const main = async () => {

    let option = '';
    const tasks = new Tasks()

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const description = await readInput('Descripcion:');
                tasks.createTask(description)
                break;
            case '2':
                console.log(tasks.tasksList);
                break;
        }

        if (option !== '0') await pause();
    } while (option !== '0');
   
}

main();