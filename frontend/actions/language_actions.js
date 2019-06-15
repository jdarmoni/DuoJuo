import * as APIUtil from '../util/language_api_util'

export const RECEIVE_ALL_LANGUAGES = "RECEIVE_ALL_LANGUAGES"
export const RECEIVE_LANGUAGE = "RECEIVE_LANGUAGE"

export const receiveAllLanguages=(langauges)=>{
    return ({
        type: RECEIVE_ALL_LANGUAGES,
        languages: langauges
    })
}

export const receiveLanguage = (language) =>{
    
    return ({
        type: RECEIVE_LANGUAGE,
        language: language
    })
}

export const requestAllLanguages = ()=> (dispatch)=>{
    return (
        APIUtil.fetchLanguages().then((languages)=>{
            return dispatch(receiveAllLanguages(languages))
        })
    )
}
export const requestLanguage = (id)=> (dispatch) =>{
    return (
        APIUtil.fetchLanguage(id).then((language)=>{
            return dispatch(receiveLanguage(language))
        })
    )
}

export const createLanguage = (language)=> (dispatch)=>{
    
    return (
        APIUtil.createLanguage(language).then((language)=>{
            
            return dispatch(receiveLanguage(language))
        })
    )
}

export const updateLanguage = (languageId)=> (dispatch)=>{
    return (
        APIUtil.updateLanguage(languageId).then((language)=>{
            return dispatch(receiveLanguage(language))
        })
    )
}