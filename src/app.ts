/**
 * Test CLI app
 */

import process from 'process';
import * as yargs from 'yargs';
import { sum, multiply } from './arithmetics';
import { conc } from './strings';

function main() {
    const arrStrings = process.argv.slice(2);
    const arglistraw = yargs.command('ts_testproject [numbers]', 'arithmetic functions').help().argv;

    const arrNum = arrStrings.map((str) => {
        return Number(str);
    });

    // const vv = arglistraw.numbers;

    console.log(' Entered app.ts::main');
    console.log(' Parameters: ', arglistraw);
    console.log('   Sum test:');
    console.log(sum(...arrNum));
    console.log('   Mul test:');
    console.log(multiply(...arrNum));
    console.log(' concat test');
    console.log(conc(...arrStrings));
    console.log(' Exited app.ts::main');
}

main();
