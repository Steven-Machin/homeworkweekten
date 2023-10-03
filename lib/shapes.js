const fs = require('fs');
const inquirer = require('inquirer');

class Circle {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svgContent = `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    return svgContent;
  }
}

class Triangle {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {

    const svgContent = `<svg width="300" height="200"> <polygon points="150,30 30,170 270,170" fill="${this.color}" /> <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    return svgContent;
  }
}

class Square {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svgContent = `<svg width="300" height="200"><rect x="30" y="30" width="240" height="140" fill="${this.color}" /><text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    return svgContent;
  }
}
module.exports = { Circle, Triangle, Square };
async function collectUserInput() {
}

async function main() {
}


main();
