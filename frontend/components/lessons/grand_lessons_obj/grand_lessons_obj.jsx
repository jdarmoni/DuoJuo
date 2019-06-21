import React from 'react';
import TranslateSentenceContainer from '../translate_sentence/translate_sentence_container'
// a ul of skill containers


 export const grandLessonsObj = {
        "fr": {
            "Basics-1": [<TranslateSentenceContainer sentence={"Le chien est epouvantable"} correct={["the dog is scary"]}/>, <TranslateSentenceContainer sentence={"Je suis un fil, pas un fille"} correct={["I am a boy, not a girl"]} />, <TranslateSentenceContainer sentence={"La fille, la femme"} correct={[""]}/>]
        },
        "jp": {},
        "ge": {},
        "esp": {}
    }
