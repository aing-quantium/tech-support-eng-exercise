#!/usr/bin/env node
const readline = require('readline');

function generateChristmasTree(rows) {
	if (!Number.isInteger(rows) || rows < 1) {
        return;
    }
    
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= 2 * i - 1; j++) {
			process.stdout.write('*');
		}

        for (let j = 1; j <= rows - i; j++) {
			process.stdout.write(' ');
		}
	}
}

function printOrExit(msg) {
	console.error(msg);
	process.exit(1);
}

function promptAndPrint() {
	const arg = process.argv[2];
	if (arg !== undefined) {
		const n = Number(arg);
		if (Number.isInteger(n) && n > 0) {
			generateChristmasTree(n);
			return;
		}
		printOrExit('Error: argument must be a positive integer.');
	}

	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	rl.question('Enter number of layers: ', (answer) => {
		const n = Number(answer.trim());
		if (Number.isInteger(n) && n > 0) {
			generateChristmasTree(n);
		} else {
			console.error('Please enter a positive integer.');
		}
		rl.close();
	});
}

if (require.main === module) promptAndPrint();

