const inquirer = require("inquirer");
const util = require("util");
const execSync = util.promisify(require("child_process").execSync);
var prompt = inquirer.createPromptModule();
const finalBuild = process.argv[2];
const choices = ["EN", "FR", "BR", "UA", "CA"];
choices.push(new inquirer.Separator());
if (!process.env.REACT_APP_TARGET) {
  prompt([
    {
      type: "rawlist",
      name: "env",
      message: "Which target do you want to build?",
      choices
    }
  ]).then(answers => {
    process.env.REACT_APP_TARGET = answers.env;

    console.log("Starting " + process.env.REACT_APP_TARGET + " build..");
    execSync(finalBuild, {
      stdio: "inherit"
    });
  });
} else {
  console.log("Building " + process.env.REACT_APP_TARGET + "..");
  execSync(finalBuild, { stdio: "inherit" });
}
