const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("What\'s your name?", name => {
    readline.question("What\'s your year of birth? MM/DD/YYYY:", birth => {
        readline.question("What\'s your home town?", homeTown => {
            const today = new Date();
            // const yob = new Date(`${birth}`);
            // const age = Math.trunc((today.getTime() - yob.getTime()) / (1000 * 3600 * 24) / 365);

            const date = new Date(`${birth}`);
            const age = today.getFullYear() - date.getFullYear();

            console.log(`Thank you. Hello ${name}, so you are ${age} year old and from ${homeTown}`);
            readline.close();
        })
    })
});
