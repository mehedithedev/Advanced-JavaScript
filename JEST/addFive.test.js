const addFive = require('./addFive');
//We will test that file using jest here:
test('adds 5 to 10 to equal 15', () => {
  expect(addFive(10)).toBe(15);
});