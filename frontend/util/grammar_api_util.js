// use the sentence returned from createSentence in translate
function random(guide) {
    
    return (Math.floor(Math.random() * ((guide.choices().length - 1) - 0 + 1)) + 0)
}

export const createSentence = (guide, num)=> {
    
    if (guide.construction().length >= num && guide.isComplete()) {
        console.log(guide.construction().join(' '))
        
    } else {
        
        guide.choose(guide.choices()[random(guide)])

        return createSentence(guide, num)
    }    
}

