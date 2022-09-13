import chalk from 'chalk';

console.log(chalk.green.underline.inverse('Hello karan world!'));

import validator from 'validator';

const res = validator.isEmail("karan@kp.om");
console.log(res);
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res))



