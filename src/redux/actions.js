import { ADD_SOMETHING, MODIFY_SOMETHING , DELETE_SOMETHING , TELNET_REQUEST , TELNET_REQUEST_SUCCEED , TELNET_REQUEST_FAILED , RUN , STOP , SET_CLIENT , SET_INTERVAL , SET_LOGIN , SET_PASSWORD , SET_IP , DATAREQUEST_SUCCED , DATAREQUEST_FAILED } from './actionTypes';


export const delete_something = (key) => (
    {
        type:DELETE_SOMETHING,
        key:key
    }
)


export const run = () => (
    {
        type: RUN
    }
)

export const stop = () => (
    {
        type: STOP
    }
)

export const set_client = (data) => (
    {
        type: SET_CLIENT,
        data: data
    }
)

export const set_interval = (data) => (
    {
        type: SET_INTERVAL,
        data: data
    }
)

export const set_login = (data) => (
    {
        type: SET_LOGIN
    }
)
export const set_password = (data) => (
    {
        type: SET_PASSWORD,
        data: data
    }
)
export const set_ip = (data) => (
    {
        type: SET_IP,
        data: data
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

export const data_request_succed = (data) => (
    {
        type: DATAREQUEST_SUCCED,
        data: data
    }
)

export const data_request_failed = (data) => (
    {
        type: DATAREQUEST_FAILED,
        data: data
    }
)