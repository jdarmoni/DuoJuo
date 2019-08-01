import GrammarGraph from 'grammar-graph';

// use the sentence returned from createSentence in translate

let grammar = {
    Sentence: ['NounPhrase VerbPhrase'],
    NounPhrase: ['the Noun',
        'the Noun RelativeClause'],
    VerbPhrase: ['Verb',
        'Verb NounPhrase'],
    RelativeClause: ['that VerbPhrase',
        'who VerbPhrase',
    ],
    Noun: ['dog',
        'cat',
        'bird',
        'squirrel',
        'boy'],
    Verb: ['befriended',
        'loved',
        'ate',
        'attacked',
        'watched',
        'found']
}

let graph = new GrammarGraph(grammar)
let guide = graph.createGuide('Sentence')

function random(guide) {
    
    return (Math.floor(Math.random() * ((guide.choices().length - 1) - 0 + 1)) + 0)
}

export const createSentence = (guide, num)=> {
    
    if (guide === undefined) {
        let grammar = {
            Sentence: ['NounPhrase VerbPhrase'],
            NounPhrase: ['the Noun',
                'the Noun RelativeClause'],
            VerbPhrase: ['Verb',
                'Verb NounPhrase'],
            RelativeClause: ['that VerbPhrase',
                'who VerbPhrase',
            ],
            Noun: ['dog',
                'cat',
                'bird',
                'squirrel',
                'boy'],
            Verb: ['befriended',
                'loved',
                'ate',
                'attacked',
                'watched',
                'found']
        }

        let graph = new GrammarGraph(grammar)
        let guide = graph.createGuide('Sentence')
        return createSentence(guide, num)

    } else {
        // when it's finished, console log it and return sentence
        if (guide.construction().length >= num && guide.isComplete()) {
            
            let sentence = guide.construction().join(' ')
            console.log(sentence)
            
            return sentence

        } else {
            
            guide.choose(guide.choices()[random(guide)])
            
            return createSentence(guide, num)
        }    
    }
}