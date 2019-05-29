import { combineReducers } from 'redux'
import sessionErrorsReducer from './session_errors_reducer'

export default combineReducers({
    session: sessionErrorsReducer
});

