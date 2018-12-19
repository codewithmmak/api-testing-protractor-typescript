import { browser } from 'protractor';

var request = require('request');

describe('POST method in API: ', function () {

    browser.ignoreSynchronization = true; // for non-angular websites

    it('As a user I can create a resource', function (done) {

        request({
            method: 'POST',
            uri: 'https://jsonplaceholder.typicode.com/posts',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: { 'content-type': 'application/json; charset=utf-8' },

        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            console.log('\nResponse Code: ' + response.statusCode);
            expect(response.statusCode).toBe(201);

            console.log('\nResponse Headers: ' + response.headers['content-type']);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');

            console.dir('\n----------------Body--------------------:');
            console.dir(JSON.parse(body));
            console.dir('-------------------------------------------');

            done();
        });
    });
});