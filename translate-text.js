const request = require('request');
const uuidv4 = require('uuid/v4');

// for quickstart guide:
// https://docs.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-nodejs-translate

let options = {
    method: 'POST',
    baseUrl: 'https://api.cognitive.microsofttranslator.com/',
    url: 'translate',
    qs: {
        'api-version': '3.0',
        'to': ['ja']
        // 'to': ['de', 'it']

    },
    headers: {
        'Ocp-Apim-Subscription-Key': "a2fb1712983c4807a035c51720b545c1",
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
        'text': 'the boy!'
    }],
    json: true,
};

request(options, function (err, res, body) {
    console.log(JSON.stringify(body, null, 4));
});