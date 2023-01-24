const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions for your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information for your project:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "GPLv3", "Apache", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contributing guidelines for your project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions for your project:"
    },
    {
        type: "input",
        name: "questions",
        message: "Provide your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address:"
    }
];

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }



function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
    });
}



// function to initialize program
// function init() {
//     inquirer.prompt(questions)
//     .then(answers => {
//         const markdown = generateMarkdown(answers);
//         writeToFile("README.md", markdown);
//     });
// }


function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}




// function call to initialize program
init();
