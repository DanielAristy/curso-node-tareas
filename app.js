require('colors');

const { showMenu, pause } = require('./helpers/messages');


console.clear()

const main = async () => {

    let option = '';

    do {
        option = await showMenu(); 
        if (option !== '0') await pause();
    } while (option !== '0');
   
}

main();