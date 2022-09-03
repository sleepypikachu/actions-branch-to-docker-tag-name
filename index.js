const core = require('@actions/core');

try {
  const path = core.getInput('path');
  const prefix = core.getInput('prefix')
  let result = path

  // Remove prefix
  if (path.startsWith(prefix)) {
    result = result.substr(prefix.length)
  }

  // Replace '/'
  result = result.replaceAll('/', '-')


  // Remove start and end path characters
  result = result.replace(/^\./, '')
  result = result.replace(/^-/, '')
  result = result.replace(/-$/, '')

  core.setOutput('image-name', result);

} catch (error) {
  core.setFailed(error.message);
}
