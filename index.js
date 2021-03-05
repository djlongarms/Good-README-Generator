// Initialize the inquirer package
const inquirer = require('inquirer')
const fs = require('fs')
const generate = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [
  'What is the title of your project?',
  'What is a description of your project?',
  'How do you install your project?',
  'How is your project meant to be used?',
  'How should people contribute to your project?',
  'How should people test your project?',
  'What kind of license are you using?',
  'What is your github username?',
  'What is your email address?'
]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    }, {
      type: 'input',
      name: 'description',
      message: questions[1],
    }, {
      type: 'input',
      name: 'install',
      message: questions[2],
    }, {
      type: 'input',
      name: 'usage',
      message: questions[3],
    }, {
      type: 'input',
      name: 'contribution',
      message: questions[4],
    }, {
      type: 'input',
      name: 'tests',
      message: questions[5],
    }, {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: ['One', 'Two', 'Three']
    }, {
      type: 'input',
      name: 'username',
      message: questions[7],
    }, {
      type: 'input',
      name: 'email',
      message: questions[8],
    }
  ])
    .then(res => {
      console.log(generate(res))
    })
    .catch(err => console.log(err))
}

// function call to initialize program
init();
