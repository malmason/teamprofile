const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Template = require("./src/template");


const managers = [];
const engineers = [];
const interns = [];
let totalCards = 0;
let totalEngineers = 0;
let totalInterns = 0;


const promptEngineers = () => {
   return inquirer.prompt([
      {
        type: 'input',
        name: 'engineer',
        message: 'Enter the engineer\'s name',
      },
      {
        type: 'input',
        name: 'engid',
        message: 'Enter the engineer\'s employee id',
      },
      {
        type: 'input',
        name: 'engemail',
        message: 'Enter the engineer\'s e-mail address',
      },
      {
        type: 'input',
        name: 'enggithub',
        message: 'Enter the engineer\'s github username',
      },
      {
        type: 'list',
        name: 'addmore',
        message: 'What do you want to do next?',
        choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
      },
    ])
};

const promptInterns = () => {
  return inquirer.prompt([
     {
       type: 'input',
       name: 'intern',
       message: 'Enter the intern\'s name',
     },
     {
       type: 'input',
       name: 'intid',
       message: 'Enter the intern\'s employee id',
     },
     {
       type: 'input',
       name: 'intemail',
       message: 'Enter the intern\'s e-mail address',
     },
     {
       type: 'input',
       name: 'intschool',
       message: 'Enter the intern\'s school',
     },
     {
       type: 'list',
       name: 'addmore',
       message: 'What do you want to do next?',
       choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
     },
   ])
};


const promptUser = () => {

return inquirer.prompt([
  {
    type: 'input',
    name: 'manager',
    message: 'Enter the team manager\'s name',
  },
  {
    type: 'input',
    name: 'mgrid',
    message: 'Enter the team manager\'s employee id',
  },
  {
    type: 'input',
    name: 'mgremail',
    message: 'Enter the team manager\'s e-mail address',
  },
  {
    type: 'input',
    name: 'mgroffice',
    message: 'Enter the team manager\'s office number',
  },
  {
    type: 'list',
    name: 'addmore',
    message: 'What do you want to do next?',
    choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
  },
])
};

const createEngineers = () => {
  let cards = "";
  // if(engineers.length <=2) { 
    // The cards will fit in the first row with the manager card. (3 to a row)!
    engineers.forEach(engineer => {
      let newEng = new Engineer(engineer.engineer, engineer.engid, engineer.engemail, engineer.enggithub);
      cards += 
      `<div class="col">
        <div class="card rounded-top">
            <div class="card-header bg-danger text-white">
              <h3>${newEng.name}</h3>
              <h5 class="card-title"><i class="fas fa-user-cog"></i> Engineer</h5>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: <i class="fas fa-id-badge"></i> ${newEng.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${newEng.email}" target="_blank"><i class="fas fa-envelope"></i> ${newEng.name}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${newEng.github}" target="_blank"><i class="fab fa-github"></i> ${newEng.github}</a></li>
              </ul>
            </div>
          </div>
        </div>`
    })
    return cards;
  } 

  
// }; 

const createInterns = () => {
  let cards = "";
  interns.forEach(intern => {
    let newInt = new Intern(intern.intern,intern.intid, intern.intemail, intern.intschool);
    cards += 
    `<div class="col">
      <div class="card rounded-top">
          <div class="card-header bg-success text-white">
            <h3>${newInt.name}</h3>
            <h5 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h5>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: <i class="fas fa-id-badge"></i> ${newInt.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${newInt.email}" target="_blank"><i class="fas fa-envelope"></i> ${newInt.name}</a></li>
              <li class="list-group-item">School: <i class="fas fa-school"></i> ${newInt.school}</a></li>
            </ul>
          </div>
        </div>
      </div>`
  })
    return cards;
};

const generateHTML = async () => {
  // TODO: Dynamically add the closing tag for the second row below, currently it's hard coded in. Put this in based on the number of cards that are being added. 
  // Also, loop through the intern array to add those cards starting on the second or third row. Test html, update style sheet to remove decoration on anchor tags.
totalEngineers = engineers.length;
totalInterns = interns.length;
totalCards = totalEngineers = totalInterns + 1;
let mgr = new Template(managers[0].manager, managers[0].mgrid,managers[0].mgremail,totalCards);

fs.writeFile('./dist/index.html',
`<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team Members</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <div class="container"> <!--Main container for the project -->
    <div class="row">
    <div class="col header text-white rounded-top"><i class="fas fa-users"></i><h1> TEAM PROFILE GENERATOR </h1><i class="fas fa-users"></i></div>
    </div>
    <div class="row">
      <div class="col">
        ${mgr.createManager(managers[0].mgroffice)} 
      </div>
      ${createEngineers()}
      ${createInterns()}
    </div> <!--Closing tag for the second row-->
    <div class="row">
    <div class="col footer text-white text-center rounded-bottom">
      <ul> 
        <li>
          <a href="https://github.com/malmason" target="_blank"><i class="fab fa-github"></i></a></li>
        <li>
          <a href="https://www.linkedin.com/in/malcolm-mason-1491a31b9/" target="_blank"></a></li>
        <li>
          <a href="mailto:malmason66@gmail.com"><i class="fas fa-envelope-open" aria-hidden="true"> - Email</i></a>
        </li>
        <li>
          <i class="fas fa-mobile-alt" aria-hidden="true"> - Phone: (203) 578-0892</i>
      </li>
      </ul>
      <p>Copyright &copy; 2021 Built using HTML, Javascript, Bootstrap, Node.js and CSS</p></div>
  </div>
  </div> <!--Closing tag for the Main container-->
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  <script src="../index.js"></script>
</body>
</html>
`, (err) => err ? console.log(err) : console.log('Successfully created index.html file'))
};



const addEngineer = async () => {
  const eng = await promptEngineers();
  const {engineer, engid, engemail, enggithub, addmore} = eng;
  engineers.push(eng); // Add the new engineer object to the array.   
  // console.log(`Engineer: ${engineer} , Email: ${engemail} , ID: ${engid} , Github: ${enggithub}, Add More?: ${addmore}`); 

  if(eng.addmore === "Add an Engineer") {
    addEngineer();
  } else if(eng.addmore === "Add an Intern") {
    addIntern();
  } else {
    generateHTML();
  }
};

const addIntern = async () => {
  const newintern = await promptInterns();
  const {intern, intid, intemail, intschool, addmore} = newintern;
  interns.push(newintern); // Add the new intern object to the array.

  if(newintern.addmore === "Add an Engineer") {
    addEngineer();
  } else if(newintern.addmore === "Add an Intern") {
    addIntern();
  } else {
    console.log(engineers);
    generateHTML();
  }
};

const init = async () => {
  const mgrs = await promptUser();
  const {manager, mgrid, mgremail, mgroffice, addmore} = mgrs;
  managers.push(mgrs);
    // console.log(`Manger: ${manager} , Email: ${mgremail} , ID: ${mgrid} , Office: ${mgroffice}, Add More?: ${addmore}`); 
  if(mgrs.addmore === "Add an Engineer") {
    addEngineer();
  } else if(mgrs.addmore === "Add an Intern") {
    addIntern();
  } else {
    generateHTML();
  } 
};

init();
