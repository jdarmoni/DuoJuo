import React from 'react';
import TranslateSentenceContainer from '../translate_sentence/translate_sentence_container'
import MarkMeaningContainer from '../mark_meaning/mark_meaning_container'
import ConstructSentence from '../construct_sentence/construct_sentence'
import CompletedContainer from '../../lessons/lesson_complete/completed_container'
    // // idea here is to use the words array; for practice, can just .sample a bunch of words you've completed.
    // const wordObj = {
    //     "chien": "Le chien est epouvantable",
    //     "oeufs": "Bonjour, je cache des oeufs"
    // }
 export const grandLessonsObj = {
    //  < TranslateSentenceContainer sentence = { "Le chien est effrayant"} correct = { ["the dog is scary"]} />
        "fr": {
         "Basics-1": [<TranslateSentenceContainer sentence={"La fille, la femme"} correct={["the girl, the woman"]} />, <ConstructSentence sentence={"Rekha est bon"} words={["eggs", "milk", "good", "is", "Rekha"]} correct={["Rekha is good"]}/> , <TranslateSentenceContainer sentence={"Je suis un fil, pas un fille"} correct={["I am a boy, not a girl"]} />, <MarkMeaningContainer sentence={["A French woman"]} correct={"Un femme Francaise"} phrase1={"Un femme Francaise"} phrase2={"Il est un pamplemousse"} phrase3={"Je suis le jeunne fille"}/>],
            "Greetings": [<TranslateSentenceContainer sentence={"Bonjour, je cache des oeufs"} correct={["Hello, I am hiding eggs"]} />, <TranslateSentenceContainer sentence={"Capitaine Haddock boit à nouveau"} correct={["Captain Haddock is drinking again"]} />, <TranslateSentenceContainer sentence={"Tu va me dire ou est le lait maitenant"} correct={["You will tell me where the milk is now"]} />, <TranslateSentenceContainer sentence={"Juliette Binoche"} correct={["Juliette Binoche"]} />],
            "Basics-2": [<TranslateSentenceContainer sentence={"Petite cerises"} correct={["little cherries"]} />, <TranslateSentenceContainer sentence={"Je suis seule a Dunkin Donuts"} correct={["I am alone at Dunkin Donuts"]} />, <TranslateSentenceContainer sentence={"D'ou etes-vous?"} correct={["Where are you from?"]} />, <TranslateSentenceContainer sentence={"Je suis un célébrité"} correct={["I am a celebrity"]} />]
        },
        "jp": {
            "Hiragana-1": [<TranslateSentenceContainer sentence={"こんにちは、さようなら"} correct={["hello, goodbye"]} />, <TranslateSentenceContainer sentence={"私の名前は"} correct={["My name is"]} />, <TranslateSentenceContainer sentence={"水"} correct={["water"]} />, <TranslateSentenceContainer sentence={"たべる"} correct={["To eat"]} />],
            "Hiragana-2": [<TranslateSentenceContainer sentence={"私の名前はマリアです"} correct={["My name is maria"]} />, <TranslateSentenceContainer sentence={"あなたは私の中央ビジネス地区への道を示すことができました"} correct={["Could you show me the way to the central business district"]} />, <TranslateSentenceContainer sentence={"アメリカ"} correct={["America"]} />, <TranslateSentenceContainer sentence={"私はインサイダー取引で非難されています"} correct={["I have been accused of insider trading"]} />  ],
            "Hiragana-3": [<TranslateSentenceContainer sentence={"ポケットモンスター"} correct={["Pokemon"]} />, <TranslateSentenceContainer sentence={"男の子"} correct={["boy"]} />, <TranslateSentenceContainer sentence={"お父さん"} correct={["father"]} />, <TranslateSentenceContainer sentence={"母"} correct={["mother"]} />],
        },
        "ge": {
            "Basics-1": [<TranslateSentenceContainer sentence={"Der junge"} correct={["The boy"]} />, <TranslateSentenceContainer sentence={"Das mädchen"} correct={["the girl"]} />, <TranslateSentenceContainer sentence={"Ich bin ein Berliner"} correct={["I am a Berliner"]} />, <TranslateSentenceContainer sentence={"Es tut mir leid"} correct={["I am sorry"]} />],
            "Phrases": [<TranslateSentenceContainer sentence={"Hallo, ich bin der junge"} correct={["Hello, I am the boy"]} />, <TranslateSentenceContainer sentence={"Der film"} correct={["the film"]} />, <TranslateSentenceContainer sentence={"Ich heiße Christoph Waltz"} correct={["My name is Christoph Waltz"]} />, <TranslateSentenceContainer sentence={"Ich mag Duolingo"} correct={["I like Duolingo"]} />],
            "Basics-2": [<TranslateSentenceContainer sentence={"Bitte"} correct={["Please"]} />, <TranslateSentenceContainer sentence={"Danke dir"} correct={["thank you"]} />, <TranslateSentenceContainer sentence={"the boy"} correct={["der junge"]} />, <TranslateSentenceContainer sentence={"I like Christoph Waltz"} correct={["Ich mag Christoph Waltz"]} />]

        },
        "es": {
            "Intro": [<TranslateSentenceContainer sentence={"el cerdo esta durmiendo"} correct={["the pig is sleeping"]} />, <TranslateSentenceContainer sentence={"Soy el chico que bebe leche"} correct={["I am the boy who drinks milk"]} />, <TranslateSentenceContainer sentence={"eres un pájaro?"} correct={["are you a bird?"]} />, <TranslateSentenceContainer sentence={"dime porque sueño"} correct={["tell me why i dream"]} />],
            "Phrases": [<TranslateSentenceContainer sentence={"Mi nombre es Rafael Nadal"} correct={["My name is Rafael Nadal"]} />, <TranslateSentenceContainer sentence={"Soy apasionado"} correct={["I am passionate"]} />, <TranslateSentenceContainer sentence={"Mi mejor amigo se llama Roger"} correct={["My best friend is named Roger"]} />, <TranslateSentenceContainer sentence={"I have won Roland Garros 12 times, no?"} correct={["He ganado Roland Garros 12 veces, ¿no?"]} />],
            "Travel": [<TranslateSentenceContainer sentence={"Yo soy de Mallorca"} correct={["I am from Mallorca"]} />, <TranslateSentenceContainer sentence={"Mis brazos son espectaculares"} correct={["My arms are spectacular"]} />, <TranslateSentenceContainer sentence={"Siempre pelearé por ti"} correct={["I will always fight for you"]} />, <TranslateSentenceContainer sentence={"My name is Rafael Nadal"} correct={["Mi nombre es rafael nadal"]} />]
        }
        
    }

    