var request = require('request');

describe('Filtering resources in API: ', function () {

    it('As a user I can filter a resource', function (done) {

        request({
            uri: 'https://jsonplaceholder.typicode.com/posts?userId=1',

        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            console.log('\nResponse Code: ' + response.statusCode);
            expect(response.statusCode).toBe(200);

            console.log('\nResponse Headers: ' + response.headers['content-type']);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');

            console.dir('\n----------------Body--------------------:');
            console.dir(JSON.parse(body));
            console.dir('-------------------------------------------');

            done();
        });
    });
});