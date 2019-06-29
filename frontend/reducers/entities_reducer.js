import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import languages_reducer from './languages_reducer'
import language_data_reducer from './language_data_reducer'
import skills_reducer from './skills_reducer'

export default combineReducers({
    users: usersReducer,
    languages: languages_reducer,
    language_data: language_data_reducer,
    skills: skills_reducer
    // users should point to a combined users
    
});

