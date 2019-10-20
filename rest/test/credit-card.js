const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);
chai.should();

// Testing Credit Cards Module
describe("Credit Cards", function () {

    describe("REST API OPERATIONS", function () {
        const card = {
            "name": "Mat",
            "card_number": "1111 2222 3333 4444",
            "limit": 2000
        };
        // Add new credit card and check status
        it("Should add Credit Card in DB", (done) => {
            chai.request(server)
                .post("/credit_card/add")
                .send(card)
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                    done();
                });
        });
        // Fetch all credit cards and check status
        it("Should Fetch all the Credit Cards", (done) => {
            chai.request(server)
                .get("/credit_card/get_all")
                .end((err, result) => {
                    result.should.have.status(200);
                    console.log("Got", result.body.length, " Credit Cards");
                    console.log("Result Body:", result.body);
                    done();
                });
        });

        const cardValidate = {
            "name": "Don",
            "card_number": "1111 2222 3333",
            "limit": 1000
        };
        // Validate new credit card and check status
        it("Should validate Credit Card before add in DB", (done) => {
            chai.request(server)
                .post("/credit_card/add")
                .send(cardValidate)
                .end((err, res) => {
                    res.should.have.status(400);
                    console.log("Response Body:", res.body);
                    done()
                });
        });
    });

    describe("Util functions", function () {
        //Luhn algorithm test
        it('validate credit card number using Luhn', () => {
            const luhnCheck = require('../util/luhn');
            expect(luhnCheck("1111 2222 3333 4444")).to.equal(true);
        });
    });

});