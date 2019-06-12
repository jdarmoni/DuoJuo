import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import languages_reducer from './languages_reducer'

export default combineReducers({
    users: usersReducer,
    languages: languages_reducer
    // users should point to a combined users
    
});

