// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Project Name
  ${data.title}

  ## What was your motivation?
  ${data.motivation}

  ## Why did you build this project?
  ${data.why}

  ## Choose a license
  ${data.license}

  ## What problem does it solve?
  ${data.problem}

  ## What did you learn?
  ${data.learn}

  ## What makes your project stand out?
  ${data.standout}
`;
}

module.exports = generateMarkdown;
