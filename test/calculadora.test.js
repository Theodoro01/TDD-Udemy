const app = require('../src/app');


test('Deve retornar 10 no resultado da soma', () => {
  var resultado = app.soma(5 , 5)
  expect(resultado).toBe(10);
});

test('Deve retornar 10 no resultado da mult', () => {
  var resultado = app.mult(2,5)
  expect(resultado).toBe(10);
});

