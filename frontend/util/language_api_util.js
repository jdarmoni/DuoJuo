export const fetchLanguages = ()=>{
    return $.ajax({
        method: 'get',
        url: '/api/languages'
    })
}

export const fetchLanguage =(id)=>{
    return $.ajax({
        method: 'get',
        url: `/api/languages/${id}`
    })
}

export const createLanguage = (language)=> {
    
    return $.ajax({
        method: 'post',
        url: `/api/languages/`,
        data: language
    })
}

export const updateLanguage = (languageId)=> {
    return $.ajax({
        method: 'patch',
        url: `/api/languages/${languageId}`,
        data: {language}
    })
}

