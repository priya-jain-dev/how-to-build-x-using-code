#! /usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');

const { questions, questionsTs } = require('./utils/questions');
const path = process.cwd();
const links = require('./utils/links.js');


inquirer.prompt(questions).then(answers => {
    // Use user feedback for... whatever!!
    // console.log(JSON.stringify(answers, null, 2));
    if (answers.framework == 'React') {
        inquirer.prompt(questionsTs).then(answersTs => {
            if (answersTs.typescript === 'Yes') {
                // If the user has chosen React and want to use TypeScript
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green('📁 Created a folder for the project'));
                shell.exec(
                    `git clone ${links.get('React-TS')} ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`));

                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(chalk.yellow('👩🏼‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'));

            } else {
                // If the user has choosen React but doesn't want to use TypeScript
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green('📁 Created a folder for the project'));
                shell.exec(
                    `git clone ${links.get('React')}  ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`));

                console.log('🛠️  Successfully build the required files');
                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(chalk.yellow('👩🏼‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'));

            }
        });
    } else if (answers.framework === 'NextJS') {
        inquirer.prompt(questionsTs).then((answersTs) => {
            if (answersTs.typescript === 'Yes') {
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green('📁 Created a folder for the project'));

                shell.exec(
                    `git clone ${links.get('NextJS-TS')}  ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`));

                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(chalk.yellow('👩🏼‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'));

            } else {
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green('📁 Created a folder for the project'));

                shell.exec(
                    `git clone ${links.get('NextJS')}  ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`));

                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(chalk.yellow('👩🏼‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'));

            }
        });
    } else if (answers.framework === 'Svelte') {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green('📁 Created a folder for the project'));

        shell.exec(
            `git clone ${links.get('Svelte')} ${answers.projectName}`
        );
        console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`));

        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(chalk.yellow('👩🏼‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'));

    } else {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green('📁 Created a folder for the project'));

        shell.exec(
            `git clone ${links.get('Vue')} ${answers.projectName}`
        );
        console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`));

        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(chalk.yellow('👩🏼‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'));

    }
});
console.log('The CLI is working 🚀');   
