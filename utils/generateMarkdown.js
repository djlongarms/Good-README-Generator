// function to generate markdown for README
function generateMarkdown(data) {
  let license = ''
  switch (data.license) {
    case 'MIT':
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break
    case 'GNU GPLv3':
      license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break
    case 'Apache':
      license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break
  }
  return `# ${data.title}
${license}

## Description

${data.description}

## Table of Contents
[Title](#title)
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

This application is covered under the ${data.license} license.

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

Q: Where can I find your other projects?
A: At my github profile, just follow this link: [Github Profile](https://www.github.com/${data.username})

Q: How can I reach you with questions about your project?
A: Feel free to email me at ${data.email}
`
}

module.exports = generateMarkdown;