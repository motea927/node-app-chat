var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generageMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'gg';
        var latitude = longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1'
        var message = generateLocationMessage(from, latitude, longitude);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});