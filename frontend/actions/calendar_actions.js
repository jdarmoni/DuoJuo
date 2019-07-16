import * as APIUtil from '../util/calendar_api_util'

export const RECEIVE_CALENDARS = "RECEIVE_CALENDARS"

export const receiveCalendars = (calendars) => {

    return ({
        type: RECEIVE_CALENDARS,
        calendars: calendars
    })
}

export const createCalendars = (calendars) => (dispatch) => {
    
    return (
        APIUtil.createCalendar(calendars).then((calendars) => {
            
            return dispatch(receiveCalendars(calendars))
        })
    )
}

export const updateCalendars = (calendars) => (dispatch)=> {
    return (
        APIUtil.updateCalendar(calendars).then((calendars) => {
            
            return dispatch(receiveCalendars(calendars))
        })
    )
}