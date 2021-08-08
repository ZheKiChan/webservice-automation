const chai = require('chai');
const expect = chai.expect;
const fetch = require("node-fetch");

describe('Simple checks of https://jsonplaceholder.typicode.com service', () => {

    it('should return 200 status code in response', async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        expect(response.status).to.be.equal(200)
    });

    it('should return valid headers in response', async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        expect(response.headers.get('Content-Type')).to.exist;
        expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8')
    });

    it('should return an array of 10 users in response body', async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let responseBody = await response.json();
        expect(responseBody).to.be.an.instanceOf(Array);
        expect(responseBody).to.have.lengthOf(10);
    });
})