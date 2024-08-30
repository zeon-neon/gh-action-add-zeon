const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.setOutput("ok", true);
  // Get the JSON webhook payload for the event that triggered the workflow
  // still dev mode
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
  require("child_process").execSync(
    `git config --global user.email "zeon@saahild.com"`
  );
  require("child_process").execSync(
    `git config --global user.name "Zeon [ACTIONS]"`
  );
} catch (error) {
  core.setOutput("ok", false);
  core.setFailed(error.message);
}
