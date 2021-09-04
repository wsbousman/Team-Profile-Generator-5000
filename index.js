const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/template.js');
const profileData = []

const managerPrompt = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Who is your team manager?'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is their employee ID?'
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Enter the email of your team manager.'
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: 'Enter the office number of your team manager.'
    }
  ]).then((answer) => {
      answer.status = 'manager'
      profileData.push(answer)
  })
}

const menuPrompt = () => {
    inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do next?',
      name: 'menu',
      choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
    }
    // no entry validation required, not possible to advance to next step without valid input
]).then((answer) => {
    if (answer.menu === 'Add an engineer') {
    engineerPrompt(answer)
    }
    if (answer.menu === 'Add an intern') {
    internPrompt(answer)
    }
    if (answer.menu === 'Finish building my team') {
    finishPrompt(profileData)
    }
})
}

const engineerPrompt = () => {
        inquirer.prompt([
            {
              type: 'input',
              name: 'engineerName',
              message: 'Who is your team engineer?'
            },
            {
              type: 'input',
              name: 'engineerId',
              message: 'What is their employee ID?'
            },
            {
              type: 'input',
              name: 'engineerEmail',
              message: 'Enter the email of your team engineer.'
            },
            {
              type: 'input',
              name: 'engineerGithub',
              message: 'Enter the GitHub username of your team engineer.'
            }
        ]).then((answer) => {
            answer.status = 'engineer'
            profileData.push(answer)
      }).then(menuPrompt)
        // return to main menu
}

const internPrompt = () => {
        inquirer.prompt([
            {
              type: 'input',
              name: 'internName',
              message: 'Who is your team intern?'
            },
            {
              type: 'input',
              name: 'internId',
              message: 'What is their employee ID?'
            },
            {
              type: 'input',
              name: 'internEmail',
              message: 'Enter the email of your team intern.'
            },
            {
              type: 'input',
              name: 'internSchool',
              message: 'Enter the school your intern attends.'
            }
        ]).then((answer) => {
            answer.status = 'intern'
            profileData.push(answer)
      }).then(menuPrompt)
        // return to main menu
}

const finishPrompt = () => {
    // generatePage
    const htmlData = generatePage(profileData)
    fs.writeFile('./index.html', htmlData, err => {
        if (err) throw new Error(err);
        console.log('Team profile generated! Check out index.html in this directory to see it!')
        })
}

managerPrompt()
   .then(menuPrompt)