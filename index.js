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
     message: "Add contact info?",
     
 },
 {
    name: "license",
     type:"input",
     message: "what license do you want?",
     choices: ["license1", "license2"]
 },
]).then(responde => {
console.log(responde);
const leer = `#title: ${responde.title}

1.Description ${responde.description}

*Installation ${responde.installation}

*Usage ${responde.usage}

*Contributing ${responde.contributing}

2.Test ${responde.test}
 
 3.[${responde.questions}] 
 







 4. license ${responde.license}`;
 
 fs.writeFile("ready.md", leer, function (err){
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
