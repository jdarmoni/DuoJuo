import {
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER
} from '../actions/session_actions'
import {RECEIVE_LANGUAGE_DATA} from '../actions/language_data_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        case LOGOUT_CURRENT_USER:
            // i added this so that you don't accumulate users throughout login/logouts
            return {}
        // case RECEIVE_LANGUAGE_DATA:
        //     // comment this out to repair
        //     debugger
        //     return merge({}, Object.values(state)[0], { ["language_data"]: {[action.language_data.language]:  action.language_data }});
        default:
            return state;
    }
}