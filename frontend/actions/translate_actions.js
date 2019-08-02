import * as APIUtil from '../util/translate_api_util'
import {createSentence} from '../util/grammar_api_util'
import request from 'request';
import uuidv4 from 'uuid/v4';

export const translate = (options) => {
    debugger
    return APIUtil.translate(options)

}

// takes a sentence, then calls translate, feeding in the language it wants to translate sentence to, and passing said sentence
export const translatePractice = (guide, options, num = 3, lang="fr")=> {

    let promise1 = new Promise(function (resolve, reject) {
        let sentence = createSentence(guide, num)
        
        if (resolve) {
            resolve(sentence);
        }
        else {
            reject(Error("It broke"));
        }
    });

    return promise1.then((sentence) => {
        return APIUtil.translatePractice(options, sentence, lang)
        // undefined ^
        // *
    })
} 










        // let promise2 = new Promise( function(resolve, reject) {
        //     let translation = APIUtil.translatePractice(options, sentence, lang)

        //     if (resolve) {
        //         resolve(translation);
        //     }
        //     else {
        //         reject(Error("It broke"));
        //     }
        // });

        // debugger
        // return promise2.then((request)=>{
        //     let result = request
        //     debugger

        // })
