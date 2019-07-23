import React from 'react'
const request = require('request');
const uuidv4 = require('uuid/v4');

class TranslatedWord extends React.Component {
    constructor(props) {
        super(props)
    }
    translate(event) {

        let text = event.target.innerText;
        
        let wordSpan = document.getElementById(`translate-word-` + text);

        if (wordSpan !== null && wordSpan.innerText === "") {
            let options = {
                method: 'POST',
                baseUrl: 'https://api.cognitive.microsofttranslator.com/',
                url: 'translate',
                qs: {
                    'api-version': '3.0',
                    'to': ['en']
                },
                headers: {
                    'Ocp-Apim-Subscription-Key': "a2fb1712983c4807a035c51720b545c1",
                    'Content-type': 'application/json',
                    'X-ClientTraceId': uuidv4().toString()
                },
                body: [{
                    'text': text
                }],
                json: true,
            };

            request(options, function (err, res, body) {

                wordSpan.innerText = (body[0].translations[0].text);
                //  console.log(JSON.stringify(body, null, 4));
            });

        }
    }
    render(){

        return (
            <span onMouseOver={this.translate.bind(this)} className="translate-word" >{this.props.word}
                <div className="translate-div-container">
                    <div className="translate-div-content">
                        <span id={`translate-word-` + `${this.props.word}`}></span>
                    </div>
                </div>
            </span> 
        )
    }
}

export default TranslatedWord