import { RECEIVE_LANGUAGE_DATA, RECEIVE_ALL_LANGUAGE_DATAS } from '../actions/language_data_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    
    Object.freeze(state);
    let newState;
    switch (action.type) {
        
        case RECEIVE_LANGUAGE_DATA:
            
            return merge({}, state, { [action.language_data.id]: action.language_data });

        case RECEIVE_ALL_LANGUAGE_DATAS:
            
            return action.payload;
        default:
            return state;
    }
};
