// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

${data.license}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

Q: Where can I find your other projects?
A: At my github profile, just follow this link: [Github Profile](https://www.github.com/${data.username})

Q: How can I reach you with questions about your project?
A: Feel free to email me at ${data.email}
`;
}

module.exports = generateMarkdown;