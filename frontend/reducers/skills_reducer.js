import { RECEIVE_SKILL } from '../actions/skill_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {

        case RECEIVE_SKILL:
            
            return merge({}, state, { [action.skill.id]: action.skill });

        default:
            return state;
    }
};
