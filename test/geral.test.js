let supertest = require("supertest")
let request = supertest("www.google.com")

test('A aplicação deve responder na porta 3131', async () => {
    // Promise 
    // return request.get('/').then(res => expect(res.statusCode).toEqual(200))

    // Async Await

    try{

        let res = await request.get('/')
        expect(res.statusCode).toEqual(200)
        
    }catch(err){
        console.log(err)
    }

})