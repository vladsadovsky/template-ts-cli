"use strict";
/**
 * Test CLI app
 */
exports.__esModule = true;
var process = require("process");
var yargs_1 = require("yargs");
var helpers_1 = require("yargs/helpers");
var arithmetics_1 = require("./arithmetics");
var strings_1 = require("./strings");
function main() {
    var arrStrings = process.argv.slice(2);
    /* Compose yargs command line manifest */
    var yinst = (0, yargs_1["default"])((0, helpers_1.hideBin)(process.argv));
    var arglistraw = yinst
        .usage('Usage: $0 <command> [options]')
        .example('$0 sum 1 2 3', 'summarize')
        .help('h')
        .alias('h', 'help')
        .epilog('copyright 2022')
        .version()
        .pkgConf('template-ts-cli')
        .completion('completion')
        .option('debug', {
        alias: 'd',
        describe: 'Debug mode',
        count: true
    })
        .option('verbose', {
        alias: 'e',
        type: 'boolean',
        description: 'Run with verbose logging'
    })
        .option('precision', {
        alias: 'r',
        choices: ['high', 'low'],
        type: 'string'
    })
        .command('$0', 'The default command', function () { }, function (argv) {
        console.log('this command will be run by default. argv=', argv);
    })
        .command('sum <op1> [operands...]', 'Summarize numbers', {
        op1: {
            alias: 'o',
            "default": 0
        }
    }, function t(argv) {
        /*
        arrNum = argv.operands.map((str) => {
            return Number(str);
        });
        */
        console.log(' Called sum handler: op1=', argv.op1, argv.operands);
        console.log(' sum=', (0, arithmetics_1.sum)(argv.op1, 0));
    })
        .command('mul', 'Multiply numbers')
        .help()
        .parse();
    var arrNum = arrStrings.map(function (str) {
        return Number(str);
    });
    console.log('>>Entered app.ts::main');
    console.log(' Parameters: ', arglistraw);
    console.log('   Mul test:');
    console.log(arithmetics_1.multiply.apply(void 0, arrNum));
    console.log(' concat test');
    console.log(strings_1.conc.apply(void 0, arrStrings));
    console.log('>>Exited app.ts::main');
}
main();
