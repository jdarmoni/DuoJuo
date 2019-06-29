import * as APIUtil from '../util/skill_api_util'

export const RECEIVE_SKILL = "RECEIVE_SKILL"

export const receiveSkill = (skill) => {
    
    return ({
        type: RECEIVE_SKILL,
        skill: skill
    })
}

export const createSkill = (skill) => (dispatch) => {
    
    return (
        APIUtil.createSkill(skill).then((skill) => {

            return dispatch(receiveSkill(skill))
        })
    )
}

export const updateSkill = (skill) => (dispatch) => {
    
    return (
        APIUtil.updateSkill(skill).then((skill) => {

            return dispatch(receiveSkill(skill))
        })
    )
}
