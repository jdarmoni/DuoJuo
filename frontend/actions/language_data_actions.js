import * as APIUtil from '../util/language_data_api_util'

export const RECEIVE_ALL_LANGUAGE_DATAS = "RECEIVE_ALL_LANGUAGE_DATAS"
export const RECEIVE_LANGUAGE_DATA = "RECEIVE_LANGUAGE_DATA"

export const getLanguageDatas = (language_datas)=> {
    
    return ({
        type: RECEIVE_ALL_LANGUAGE_DATAS,
        payload: language_datas
    })
}

export const receiveLanguageData = (language_data) => {
    
    return ({
        type: RECEIVE_LANGUAGE_DATA,
        language_data: language_data
    })
}


export const fetchLanguageDatas = (user)=> (dispatch) => {
    
    return (
        APIUtil.fetchLanguageDatas(user).then( (language_datas)=>{
            
            return (dispatch(getLanguageDatas(language_datas)))
        })
    )
}

export const fetchLanguageData = (language_data) => (dispatch) => {
    
    return (
        APIUtil.fetchLanguageData(language_data).then((language_data) => {
            
            return (dispatch(receiveLanguageData(language_data)))
        })
    )
}

export const createLanguageData = (language_data) => (dispatch) => {
    
    return (
        APIUtil.createLanguageData(language_data).then((language_data) => {
            
            return dispatch(receiveLanguageData(language_data))
        })
    )
}

export const updateLanguageData = (language_data) => (dispatch) => {
    return (
        APIUtil.updateLanguageData(language_data).then((language_data)=> {
            
            return dispatch(receiveLanguageData(language_data))
        })
    )
}
