import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import languages_reducer from './languages_reducer'
import language_data_reducer from './language_data_reducer'

export default combineReducers({
    users: usersReducer,
    languages: languages_reducer,
    language_data: language_data_reducer
    // users should point to a combined users
    
});

