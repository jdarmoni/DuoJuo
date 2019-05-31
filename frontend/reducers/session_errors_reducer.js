import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state = [], action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            
            // returning the error messages in the state
            return action.errors
        case RECEIVE_CURRENT_USER:
            // clears the errors
            return [];

        default:
            return state;
    }
}

