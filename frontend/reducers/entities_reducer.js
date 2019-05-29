import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

export default combineReducers({
    users: usersReducer,
});

