export const createLanguageData = (language_data) => {
    debugger
    return $.ajax({
        method: 'post',
        url: `/api/language_data/`,
        data: language_data
    })
}