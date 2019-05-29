import { combineReducers } from 'redux';
import usersReducer from './user_reducer';

export default combineReducers({
    users: usersReducer
});

