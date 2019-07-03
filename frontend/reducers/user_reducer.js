import {
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import {RECEIVE_LANGUAGE_DATA} from '../actions/language_data_actions';
import {RECEIVE_SKILL} from '../actions/skill_actions';

import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        case LOGOUT_CURRENT_USER:
            return {}

        case RECEIVE_LANGUAGE_DATA:

            let newUserObj = Object.assign({}, state[action.language_data.user_id], { ["language_data"]: {[action.language_data.language]:  action.language_data }});
            

            // the following is to assign it a key: [ed: make legible with explicit var names later]
            return Object.assign({}, {[action.language_data.user_id]: newUserObj})
        case RECEIVE_SKILL:
            
            let languageData = Object.values(state)[0].language_data;
            let miniLang = action.skill.language_mini;
            let userID = Object.values(state)[0].id

            languageData[miniLang].skills.push(action.skill)
            
            let newUserObj2 = Object.assign({}, state[languageData[miniLang].user_id], { ["language_data"]: languageData })
            
            return Object.assign({}, { [userID]: newUserObj2 })
  
        default:
            return state;
    }
}
// NEED: 96: 
// return merge({}, Object.values(state)[0], { ["language_data"]: { [action.language_data.language]: action.language_data } });


// Object.values(state.entities.users)
//     (11)[85, "naLqRMm4", "naLqRMm4@gmail.com", null, null, false, null, "fr", "French", Array(0), { … }]
// 0: 85
// 1: "naLqRMm4"
// 2: "naLqRMm4@gmail.com"
// 3: null
// 4: null
// 5: false
// 6: null
// 7: "fr"
// 8: "French"
// 9: []
// 10:
// fr: { streak: 0, user_id: 85, language_string: "French", points: 0, learning: true }
// __proto__: Object
// length: 11
// __proto__: Array(0)