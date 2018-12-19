import { browser } from 'protractor';

var request = require('request');

describe('GET method in API: ', function () {

    browser.ignoreSynchronization = true; // for non-angular websites

    it('As a user I can get User using query string', function (done) {

        request.get({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/users',
            qs: {
                name: 'Leanne Graham',
                username: 'Bret'
            }

        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            console.log('\nResponse Code: ' + response.statusCode);
            expect(response.statusCode).toBe(200);

            console.log('\nResponse Headers: ' + response.headers['content-type']);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');

            console.dir('----------------Body--------------------:');
            console.dir(JSON.parse(body));
            console.dir('-------------------------------------------');

            done();
        });
    });
});