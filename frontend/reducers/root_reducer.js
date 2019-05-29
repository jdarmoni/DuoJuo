import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import session from "./session_reducer";
import errors from './errors_reducer'

const rootReducer = combineReducers({
    //unexplicity explicit (bc I export defaulted them)
    entities: entitiesReducer,
    session: session,
    errors: errors
})

export default rootReducer