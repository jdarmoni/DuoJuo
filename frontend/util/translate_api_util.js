import request from 'request';
import uuidv4 from 'uuid/v4';

export const translate = (options)=> {
    debugger
    request(options, function (err, res, body) {
        debugger
        console.log(JSON.stringify(body, null, 4));
    });
}
