import { RECEIVE_LANGUAGE_DATA } from '../actions/language_data_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    
    Object.freeze(state);
    let newState;
    switch (action.type) {
        
        case RECEIVE_LANGUAGE_DATA:
            
            return merge({}, state, { [action.language_data.id]: action.language_data });

        default:
            return state;
    }
};
