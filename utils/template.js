function generateEmployees(teamData) {
  console.log(teamData)
  for (i = 0; i < teamData.length; i++) {
    if (teamData[i].status === 'engineer') {
      console.log(teamData[i].engineerName)
       return `
        <div class="employee">
          <p>${teamData[i].engineerName}</p>
          <br>
          <i class="fas fa-code-branch"></i>
        </div>
        `  
    }
    else if (teamData[i].status === 'intern') {
      return `
        <div class="employee">
          <p>${teamData[i].internName}</p>
        </div>
        `
    }
    else if (teamData[i].status === 'manager') {
      return
    }
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

  <div class="employee">
    <div class="titlebox">
      <i class="far fa-angry"></i>
      <p>${teamData[0].managerName}</p>
      <p>Manager</p>
    </div>
  </div>

  ${generateEmployees(teamData)}

  <footer>
    <h3>&copy; ${new Date().getFullYear()} by ${teamData[0].managerName}</h3>
  </footer>
  </body>
</html>
  `
}

module.exports = teamData => {
  const { htmlData } = teamData
    return `
    ${generateContent(teamData)}
    `
    // ${generateEngineer(teamData)}
    // ${generateIntern(teamData)}
}