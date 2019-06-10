export const fetchLanguages = ()=>{
    return $.ajax({
        method: 'get',
        url: '/api/languages'
    })
}

export const fetchLanguage =(language)=>{
    return $.ajax({
        method: 'get',
        url: `/api/languages/${language.id}`
    })
}

export const createLanguage = (language)=> {
    return $.ajax({
        method: 'post',
        url: `/api/languages/`,
        data: language
    })
}

export const updateLanguage = (language)=> {
    return $.ajax({
        method: 'patch',
        url: `/api/languages/${language.id}`,
        data: {language}
    })
}