// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const genMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation"
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "why"
    },
    {
        type:"list",
        message: "Choose a license.",
        name: "license",
        choices: [
            'MIT https://opensource.org/licenses/MIT', 
            'APACHE https://opensource.org/licenses/Apache-2.0', 
        ]
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problem"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn"
    },
    {
        type: "input",
        message: "What makes your project stand out?",
        name: "standout"
    },
];

// var prompt = inquirer.createPrompt();

// prompt(questions).then()


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.error(err)
        } else {
            console.log('Successfully saved')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((info) => {
        writeToFile('./README Files/README.md' , genMarkdown(info))
    })
}

// Function call to initialize app
init();
