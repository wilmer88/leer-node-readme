// function to generate markdown for README
function generateMarkdown(data) {
  let license = "";
  if (data.license === "MIT"){
    license = "this is license by MIT";
  }
  return `# ${data.title}
${data.license}
MIT
${licensetex}
`;
}

module.exports = generateMarkdown;

