import { combineReducers } from 'redux';
import usersReducer from './user_reducer';

export default combineReducers({
    users: usersReducer
    // users should point to a combined users
    
});

