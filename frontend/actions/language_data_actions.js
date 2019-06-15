import * as APIUtil from '../util/language_data_api_util'

export const RECEIVE_LANGUAGE_DATA = "RECEIVE_LANGUAGE_DATA"

export const receiveLanguageData = (language_data) => {
    debugger
    return ({
        type: RECEIVE_LANGUAGE_DATA,
        language_data: language_data
    })
}

export const createLanguageData = (language_data) => (dispatch) => {
    debugger
    return (
        APIUtil.createLanguageData(language_data).then((language_data) => {
            debugger
            return dispatch(receiveLanguageData(language_data))
        })
    )
}
