const { Circle, Triangle, Square } = require('../lib/shapes');

test('Circle class - render()', () => {
  const circle = new Circle();
  circle.setColor('blue');
  const svgContent = circle.render('SVG', 'white');
  expect(svgContent).toEqual(`<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue" /><text x="50%" y="50%" text-anchor="middle" fill="white">SVG</text></svg>`);
});

test('Triangle class - render()', () => {
  const triangle = new Triangle();
  triangle.setColor('red');
  const svgContent = triangle.render('Logo', 'green');
  expect(svgContent).toEqual(`<svg width="300" height="200"> <polygon points="150,30 30,170 270,170" fill="red" /> <text x="50%" y="50%" text-anchor="middle" fill="green">Logo</text></svg>`);
});


test('Square class - render()', () => {
  const square = new Square();
  square.setColor('purple');
  const svgContent = square.render('JAC', 'yellow');
  const expectedSVG = `<svg width="300" height="200"><rect x="30" y="30" width="240" height="140" fill="purple" /><text x="50%" y="50%" text-anchor="middle" fill="yellow">JAC</text></svg>`;
  expect(svgContent).toEqual(expectedSVG);
});
