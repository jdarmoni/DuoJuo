export const createCalendar = (calendars) =>{

    return $.ajax({
        method: 'post',
        url: '/api/calendars',
        data: {calendars}
    })
}

export const updateCalendar = (calendars) => {
    return $.ajax({
        method: 'patch',
        url: `/api/calendars/${calendars.id}`,
        data: {calendars}
    })
}