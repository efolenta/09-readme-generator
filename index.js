const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please describe your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please create a table of contents. Seperate by using a comma.',
        name: 'tableofcontents'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Please choose a license.',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'Boost Software License 1.0',
            'MIT License',
            'Mozilla Public License 2.0'
        ]

    },
    {
        type: 'input',
        message: 'Who contributed to this project? Seperate each person by using a comma.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What tests have you done?.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please provide a URL to your profile picture.',
        name: 'profile'
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email'
    }
];

inquirer.prompt(questions).then(response => {

    fs.appendFileSync('README.md', (`# ` + response.title) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`Ratio of Code: <img src="https://img.shields.io/badge/javascript-100%25-blue" alt="badge"><br>`) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`Prepared By: ` + response.github) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Description` + `\n` + response.description) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Table of Contents` + `\n` + `- ` + response.tableofcontents.split(`, `).join(`\n` + `- `)) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Installation` + `\n` + response.installation) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Usage` + `\n` + response.usage) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## License` + `\n` + response.license) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Contributing` + `\n` + response.contributing) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## License` + `\n` + response.tests) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Profile Picture` + `\n` + `<img src="${response.profile}" alt="profile" width="200px"><br>`) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });

    fs.appendFileSync('README.md', (`## Contact` + `\n` + response.email) + `\n`, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
    });
});