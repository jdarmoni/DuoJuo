var GrammarGraph = require('grammar-graph')

var grammar = {
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

function random(guide){
    return (Math.floor(Math.random() * ((guide.choices().length - 1) - 0 + 1)) + 0)
} 

var graph = new GrammarGraph(grammar)
var guide = graph.createGuide('Sentence')

function createSentence(guide, num=3){
    if (guide.construction().length >= num && guide.isComplete()) {
            // console.log(guide.construction())
        return guide.construction().join(' ')
        
    } else {

        guide.choose(guide.choices()[random(guide)])
        return createSentence(guide, num)
    }
}
console.log(createSentence(guide, 6))


// console.log(guide.choices()[Math.floor(Math.random() * (guide.choices.length - 0 + 1)) + 0] )
// guide.choose( guide.choices()[random(guide)])
// console.log(guide.choices())
// guide.choose(guide.choices()[random(guide)])
// console.log(guide.construction())
// guide.choose(guide.choices()[random(guide)])
// console.log(guide.construction())
// guide.choose(guide.choices()[random(guide)])
// console.log(guide.construction())
// guide.choose(guide.choices()[random(guide)])
// console.log(guide.construction())
// guide.choose(guide.choices()[random(guide)])
// console.log(guide.construction())
// guide.choose(guide.choices()[random(guide)])
// console.log(guide.construction())
// console.log(guide.isComplete())