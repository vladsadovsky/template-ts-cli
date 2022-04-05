/**
 * Test CLI app
 */

import * as process from 'process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { sum, multiply } from './arithmetics';
import { conc } from './strings';

function main() {
    const arrStrings = process.argv.slice(2);

    /* Compose yargs command line manifest */
    const yinst = yargs(hideBin(process.argv));

    const arglistraw = yinst
        .option('verbose', {
            alias: 'e',
            type: 'boolean',
            description: 'Run with verbose logging',
        })
        .option('precision', {
            alias: 'r',
            choices: ['high', 'low'] as const,
            type: 'string',
        })
        .usage('Usage: $0 <command> [options]')
        .command('sum', 'Summarize numbers')
        .command('mul', 'Multiply numbers')
        .example('$0 sum 1 2 3', 'summarize')
        .help('h')
        .alias('h', 'help')
        .epilog('copyright 2022')
        .help()
        .parse();

    const arrNum = arrStrings.map((str) => {
        return Number(str);
    });

    console.log('>>Entered app.ts::main');
    console.log(' Parameters: ', arglistraw);
    console.log('   Sum test:');
    console.log(sum(...arrNum));
    console.log('   Mul test:');
    console.log(multiply(...arrNum));
    console.log(' concat test');
    console.log(conc(...arrStrings));
    console.log('>>Exited app.ts::main');
}

main();
