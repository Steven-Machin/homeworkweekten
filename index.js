const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes'); 

async function collectUserInput() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for text: ',
        validate: (input) => {
          return input.length > 0 && input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal): ',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape: ',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal): ',
      },
    ]);

let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape selection');
        return;
    }

   
    shape.setColor(userInput.shapeColor);

    const svgContent = shape.render(userInput.text, userInput.textColor);

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function main() {
  console.log('Welcome to the Logo Generator!');

  await collectUserInput();

  console.log('Thank you for using the Logo Generator.');
}

main();
