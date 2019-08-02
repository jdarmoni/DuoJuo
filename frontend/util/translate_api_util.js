import request from 'request';
import uuidv4 from 'uuid/v4';

export const translate = (options)=> {
    debugger
    if (options === undefined) {
        let options = {
            method: 'POST',
            baseUrl: 'https://api.cognitive.microsofttranslator.com/',
            url: 'translate',
            qs: {
                'api-version': '3.0',
                'to': ['fr']
                // 'to': ['de', 'it']

            },
            headers: {
                'Ocp-Apim-Subscription-Key': "a2fb1712983c4807a035c51720b545c1",
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            body: [{
                'text': 'the cat that found the dog loved'
            }],
            json: true,
        };
        translate(options)
    } else {

        request(options, function (err, res, body) {
            
            console.log(JSON.stringify(body, null, 4));
        });
    }
}


export const translatePractice = (options, sentence, lang) => {

    if (options === undefined) {
        let options = {
            method: 'POST',
            baseUrl: 'https://api.cognitive.microsofttranslator.com/',
            url: 'translate',
            qs: {
                'api-version': '3.0',
                'to': [lang]
                // 'to': ['de', 'it']

            },
            headers: {
                'Ocp-Apim-Subscription-Key': "a2fb1712983c4807a035c51720b545c1",
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            body: [{
                'text': sentence
            }],
            json: true,
        };
        return translatePractice(options)

    } else {

        request(options, function (err, res, body) {
            let translation = body[0].translations[0].text
            console.log(translation)
            return translation
        });
    }
}