import { ADD_SOMETHING, MODIFY_SOMETHING , DELETE_SOMETHING , TELNET_REQUEST , TELNET_REQUEST_SUCCEED , TELNET_REQUEST_FAILED } from './actionTypes';




export const add_something = (data) => (
    {
        type: ADD_SOMETHING,
        data: data
    }
)

export const modify_something = (key,data) => (
    {
        type: MODIFY_SOMETHING,
        key:key,
        data: data
    }
)

export const delete_something = (key) => (
    {
        type:DELETE_SOMETHING,
        key:key
    }
)



export const telnet_request = (data) => (
    {
        type: TELNET_REQUEST,
        data: data
    }
)

export const telnet_request_succed = (data) => (
    {
        type: TELNET_REQUEST_SUCCEED,
        data: data
    }
)

export const telnet_request_failed = (data) => (
    {
        type: TELNET_REQUEST_FAILED,
        data: data
    }
)