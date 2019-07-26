import { connect } from 'react-redux';
import CourseIconContent from './course_icon_content'
import {translate} from '../../actions/translate_actions'
import {createSentence} from '../../actions/grammar_actions'
import uuidv4 from 'uuid/v4';
import GrammarGraph from 'grammar-graph';

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        // currentLanguage: currentLanguage
    };
};
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
debugger
const mapDispatchToProps = dispatch => ({
    translate: ()=>translate(options),
    createSentence: ()=> createSentence(guide, 5, graph)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseIconContent);
