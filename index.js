const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
    name: "title",
     type:"input",
     message: "what the title of project?",
 },
//  {
//     name: "description",
//      type:"input",
//      message: "what is the description of project?",
//  },
//  {
//     name: "installation",
//      type:"input",
//      message: "what is the instalation proccess?",
//  },
//  {
//     name: "usage",
//      type:"input",
//      message: "what is the usage of app?",
//  },
 
//  {
//     name: "contributing",
//      type:"input",
//      message: "who are the contributors?",
//  },
//  {
//     name: "test",
//      type:"input",
//      message: "how to test app?",
//  },
 {
    name: "questions",
     type:"input",
     message: "what is your contact info?",
 },
 {
    name: "license",
     type:"input",
     message: "what license do you want?",
     choices: ["license1", "license2"]
 },
]).then(responde => {
console.log(responde);
const leer = `#title ${responde.title}

1.description ${responde.description}

*installation ${responde.installation}

*usage ${responde.usage}

*contributing ${responde.contributing}

2.test ${responde.test}
 
 3.[questions] ${responde.questions}
 
 4. license ${responde.license}`;
 
 fs.writeFile("leeme", leer, function (err){
     if (err) throw err;
     console.log("creastes file");
 })


})
.catch(err =>{
    console.log(err);
})



// // array of questions for user
// const questions = [{}

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
