let chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

let chaiHttp = require('chai-http');
chai.use(chaiHttp)

let server = require('../server');

describe('Get Request', function (){
    it("Post Request for login", function (done){
        chai.request(server)
        .post('/api/v1/login')
        .send({ "userId":"mra",
        "password":123
        })
        .end(function(err, res){
            if (err) done(err);
            console.log('token===>', typeof(res.body.token))
            let token = res.body.token
            global.token = token;
            expect(res).to.have.status(200);
            done();
        })

    })
    it("Get request for RecipeList", function(done){
        chai.request(server)
        .get('/api/v1/RecipeList?recipe_id=201')
        .set('Authorization', `${global.token}`)
        .end( function(err, res){
            if(err) done(err);
            expect(res).to.have.status(200)
            done()
        })
    })
    it("Get request for foodDetail", function(done){
        chai.request(server)
        .get('/api/v1/foodDetail')
        .set('Authorization', ` ${global.token}`)
        .end(function(err,res){

            if(err) done(err);
            expect(res).to.have.status(200)
            done()
        })
    })
    it(" Post request for logout", function(done){
        chai.request(server)
        .post('/api/v1/logout')
        .set('Authorization', ` ${global.token}`)
        .end(function (err, res){
            if (err) done(err);
            expect(res).to.have.status(200);
            done()
        })
    })
    it('Post Sign up request', function(done){
        chai.request(server)
        .post('/api/v1/signUp')
        .send({
            "id":213,
            "name":"Tpinky",
            "user_id":"pinkT",
            "password":"Paadd",
            "verify_password":"Paadd",
            "email":"pink@gmail.com"
        })
        .end(function(err, res){
            if (err) done(err);
            expect(res).to.have.status(200);
            done()
        })
    })

})
