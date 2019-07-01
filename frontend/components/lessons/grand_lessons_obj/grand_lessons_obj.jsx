import React from 'react';
import TranslateSentenceContainer from '../translate_sentence/translate_sentence_container'
import MarkMeaningContainer from '../mark_meaning/mark_meaning_container'

 export const grandLessonsObj = {
        "fr": {
            "Basics-1": [<TranslateSentenceContainer sentence={"Le chien est epouvantable"} correct={["the dog is scary"]}/>, <TranslateSentenceContainer sentence={"Je suis un fil, pas un fille"} correct={["I am a boy, not a girl"]} />, <TranslateSentenceContainer sentence={"La fille, la femme"} correct={["the girl, the woman"]}/>, <MarkMeaningContainer sentence={["A French woman"]} correct={"Un femme Francaise"} phrase1={"Un femme Francaise"} phrase2={"Il est un pamplemousse"} phrase3={"Je suis le jeunne fille"}/>],
            "Greetings": [<TranslateSentenceContainer sentence={"Bonjour, je cache des oeufs"} correct={["Hello, I am hiding eggs"]} />, <TranslateSentenceContainer sentence={"Tu va me dire ou est le lait maitenant"} correct={["You will tell me where the milk is now"]}/>],
            "Basics-2": []
        },
        "jp": {
            "Basics-1": [<TranslateSentenceContainer sentence={"あなたは私の中央ビジネス地区への道を示すことができました"} correct={["Could you show me the way to the central business district"]} />, <TranslateSentenceContainer sentence={"私はインサイダー取引で非難されています"} correct={["I have been accused of insider trading"]} /> ],
            "Intro": []
        },
        "ge": {
            "Basics-1": []
        },
        "es": {
            "Basics-1": [<TranslateSentenceContainer sentence={"el cerdo esta durmiendo"} correct={["the pig is sleeping"]} />, <TranslateSentenceContainer sentence={"Soy el chico que bebe leche"} correct={["I am the boy who drinks milk"]} />, <TranslateSentenceContainer sentence={"eres un pájaro?"} correct={["are you a bird?"]} />, <TranslateSentenceContainer sentence={"dime porque sueño"} correct={["tell me why i dream"]} />]
        }
    }
