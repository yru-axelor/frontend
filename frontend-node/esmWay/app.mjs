import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currModuleURL = import.meta.url;
const currModulePath = fileURLToPath(currModuleURL);
const currDirectory = dirname(currModulePath);
console.log(chalk.red.bold.underline(currDirectory));