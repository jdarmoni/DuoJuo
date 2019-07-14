export const createCalendar = (calendars) =>{
    return $.ajax({
        method: 'post',
        url: '/api/calendars',
        data: {calendars}
    })
}