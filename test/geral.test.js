let supertest = require("supertest")
let request = supertest("www.google.com")

test('A aplicação deve responder na porta 3131', () => {

    return request.get('/').then(res => expect(res.statusCode).toEqual(200))

})