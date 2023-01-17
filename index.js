// packages required for app
const inquirer = require('inquirer');
const fs = require('fs');

// README template used when questions are answered
const generateREADME = (response) =>
  `# ${response.name}
  ## License:
  ${response.license}  
  ## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)  
  ## Description:
  ${response.description}
  &nbsp;  
  ## Installation:
  ${response.installation}
  &nbsp;  
  ## Usage:
  ${response.usage}
  &nbsp;  
  ## Contributing:
  ${response.contribution}
  &nbsp;  
  ## Tests:
  ${response.test}
  &nbsp;  
   ## Questions:
  If you have any questions you can reach me at ${response.email} and visit my [GitHub](https://www.github.com/${response.github}).
  `;

// array of questions asked by the generator 
inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter a project name.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what your project does.',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please describe your project.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any instructions to install?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide install instructions');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What can this project be used for?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide the project usage');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide ways for others to contribute to the project');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe the tests written for the project.',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please describe tests for the project');
                return false; 
            }
        } 
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['BSD [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)','MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)','GPL [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
        default: ['MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please choose a license.');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your github username.',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide your github username.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false; 
            }
        }

    },
  ])
  // takes the response and plugs it into the formated generator
  .then((response) => {
    const readMeValues = generateREADME(response);
    // creates the files using the response values 
    fs.writeFile('README.md', readMeValues, (err) =>
      err ? console.log(err) : console.log('README.md created')
    );
  });

