const chalk = require('chalk');
const sum = require('./export_function')
console.log(chalk.bold.inverse.red(`sum = `+sum(10,20)))

