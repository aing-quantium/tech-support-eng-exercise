#!/usr/bin/env node
const inputArg = process.argv[2];

function readInput(callback) {
    if (inputArg !== undefined) {
        callback(inputArg);
    } else {
        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question('Input: ', (answer) => {
            rl.close();
            callback(answer);
        });
    }
}

readInput((raw) => {
    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n < 1) {
        console.error('Please provide a positive integer greater than 0.');
        process.exit(1);
    }

    // Print the first n Fibonacci numbers starting with 1 1 ...
    if (n === 1) {
        process.stdout.write('1\n');
        return;
    }

    let a = 1;
    let b = 1;

    for (let i = 1; i <= n; i++) {
        const next = a + b;
        b = next;
        a = b;
        process.stdout.write(next + ' ');
    }

    process.stdout.write('\n');
});
