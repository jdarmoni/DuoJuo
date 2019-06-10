import {
    RECEIVE_ALL_LANGUAGES, RECEIVE_LANGUAGE
} from '../actions/language_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_LANGUAGES:
            return action.languages

        case RECEIVE_LANGUAGE:
            return merge({}, state, { [action.language.id]: action.language });
        
        default:
            return state;
    }
};