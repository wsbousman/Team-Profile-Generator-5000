function engineerMap(element) {
  if (element.status === 'engineer') {
    return `
    <div class="employee">
    <div class="titlebox">
      <i class="fas fa-code-branch"></i>
      <p>${element.engineerName}</p>
      <p>Engineer</p>
      <p>ID: ${element.engineerId}</p>
      <p>GitHub: <a href="https://github.com/${element.engineerGithub}">${element.engineerGithub}</a></p>
    </div>
  </div>
  `
  }
}

function internMap(element) {
  if (element.status === 'intern') {
    return `
    <div class="employee">
    <div class="titlebox">
      <i class="fas fa-chess-pawn"></i>
      <p>${element.internName}</p>
      <p>Intern</p>
      <p>ID: ${element.internId}</p>
      <p>Email: ${element.internEmail}</p>
      <p>School: ${element.internSchool}</p>
    </div>
  </div>
  `
  }
}

function generateContent(teamData) {
    return `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile</title>
    <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./utils/style.css">
    <link rel="stylesheet" href="./utils/all.min.css">
  </head>
  <section>
      <h2 class="header">My Team</h2>
  </section>

  <div class="wrapper">
  <div class="employee">
    <div class="titlebox">
      <i class="far fa-angry"></i>
      <p>${teamData[0].managerName}</p>
      <p>Manager</p>
      <p>ID: ${teamData[0].managerId}</p>
      <p>Email: ${teamData[0].managerEmail}</p>
      <p>Office number:${teamData[0].managerOffice}</p>
    </div>
  </div>
  ${teamData.map(engineerMap)}
  ${teamData.map(internMap)}
  </div>
 
  <footer>
    <h3 class="footer">&copy; ${new Date().getFullYear()} by ${teamData[0].managerName}</h3>
  </footer>
  </body>
</html>
  `
}

module.exports = teamData => {
    return `
    ${generateContent(teamData)}
    `
}