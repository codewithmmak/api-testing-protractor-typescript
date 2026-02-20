var request = require('request');

describe('DELETE method in API: ', function () {

    it('As a user I can delete a resource', function (done) {

        request({
            method: 'DELETE',
            uri: 'https://jsonplaceholder.typicode.com/posts/1',

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