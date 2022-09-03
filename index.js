const core = require('@actions/core');

/**
https://docs.docker.com/engine/reference/commandline/tag/#description
A tag name must be valid ASCII and may contain lowercase and uppercase
letters, digits, underscores, periods and dashes. A tag name may not
start with a period or a dash and may contain a maximum of 128
characters.
**/

try {
  const main = core.getInput('main')
  const branch = core.getInput('branch');
  const prefix = core.getInput('prefix');
  if (main == branch) {
    core.setOutput('tag-name', 'latest');
  } else {
    let result = branch;

    // Remove prefix
    if (branch.startsWith(prefix)) {
      result = result.substr(prefix.length);
    }

    // Remove invalid characters
    result = result.replaceAll(/[^a-zA-Z0-9\._-]/g, '')

    // Remove starting end periods and dashes
    result = result.replace(/^[-\.]+/, '')

    // Maximum of 128 characters
    result = result.substr(0, 128)

    // Remove ending periods and dashes
    result = result.replace(/[-\.]+$/, '')

    core.setOutput('tag-name', result);
  }
} catch (error) {
  core.setFailed(error.message);
}
