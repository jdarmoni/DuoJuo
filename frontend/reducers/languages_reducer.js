import { RECEIVE_ALL_LANGUAGES, RECEIVE_LANGUAGE } from '../actions/language_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    debugger
    switch (action.type) {
        case RECEIVE_ALL_LANGUAGES:
            return action.languages
            
            case RECEIVE_LANGUAGE:
                return merge({}, state, { [action.language.id]: action.language });
                
            case RECEIVE_CURRENT_USER:
                newState = merge({}, state);
                newState[action.currentUser.id.languages] = { };
                return newstate;
        default:
            return state;
    }
};