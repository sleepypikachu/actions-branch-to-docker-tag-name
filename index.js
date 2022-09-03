const core = require('@actions/core');

/**
https://docs.docker.com/engine/reference/commandline/tag/#description
Name components may contain lowercase letters, digits and separators.
A separator is defined as a period, one or two underscores, or one or
more dashes. A name component may not start or end with a separator.
**/

try {
  const path = core.getInput('path');
  const prefix = core.getInput('prefix');
  let result = path;

  // Remove prefix
  if (path.startsWith(prefix)) {
    result = result.substr(prefix.length);
  }

  // Remove start 
  result = result.replace(/^\./, '');

  // Replace '/' (we expect lots of / in paths)
  result = result.replaceAll('/', '-');

  // Replace excessive underscores
  result = result.replaceAll(/___+/, '__');

  // Lower case
  result = result.toLowerCase();

  // Remove invalid characters
  result = result.replaceAll(/[^a-z0-9\._-]/, '')

  // Remove start and end seperators
  result = result.replace(/^[-\._]+/, '')
  result = result.replace(/[-\._]+$/, '')

  core.setOutput('image-name', result);

} catch (error) {
  core.setFailed(error.message);
}
