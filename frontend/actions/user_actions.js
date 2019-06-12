import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUser = (user)=>{
    debugger
    return ({
        type: RECEIVE_USER,
        user: user
    })
}

export const updateUser =(user)=> (dispatch)=>{
    debugger
    return (
        APIUtil.updateUser(user).then((user)=>{
            return dispatch(receiveUser(user))
        })
    )
}