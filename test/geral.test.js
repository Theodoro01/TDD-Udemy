const app = require("../src/app")
let supertest = require("supertest")
let request = supertest(app)

test('A aplicação deve responder na porta 3131', () => {
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))
})

test('Deve retornar vermelho', () => {
    return request.get('/cor/theo').then(res => expect(res.body.cor).toEqual("vermelho"))
})