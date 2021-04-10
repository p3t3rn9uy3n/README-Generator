// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const genFile = require('./utils/generateMarkdown');

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
    fs.writeFile('./' + fileName, data, err => {
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
    .then(function(info){
        writeToFile("README.MD", genFile(info))
    })
}

// Function call to initialize app
init();
